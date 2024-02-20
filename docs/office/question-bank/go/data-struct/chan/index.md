---
title: 通道
---

### 什么是通道
在Go中，通道是一种特殊的数据结构，常用于协程之间的通信。

通道在初始化时可以指定无缓冲通道和有缓冲通道，无缓冲通道要求发送和接收双方同时处理才能工作，否则就会进入阻塞状态。
有缓冲通道则维护了缓冲区，允许暂存发送方发送的数据，当缓冲区满了的时候，有缓冲通道的表现就像无缓冲通道一样了。

### 通道是如何保障并发安全的
我们可以看到通道和队列之间的概念是很接近的。在队列中，我们一般通过信号量的方式实现阻塞获取。

在go中，通道底层维护有环形缓冲区、当前缓冲区长度、最大容量、发送方等待队列、接收方等待队列。通过锁和等待队列的机制确保并发操作安全。

### 发送流程
1. 加锁
```go
lock(&c.lock)
```

2. 判断通道是否已经关闭，如果已经关闭，则直接抛出异常
```go
lock(&c.lock)
if c.closed != 0 {
    unlock(&c.lock)
    panic(plainError("send on closed channel"))
}
```

3. 判断等待接收队列是否为空，不为空则绕过通道缓冲区直接将数据投递到接收者。要注意，这里的投递是直接基于堆栈拷贝，没有显性的赋值过程。
```go
if sg := c.recvq.dequeue(); sg != nil {
    // 发现一个正在等待的接收者。绕过通道缓冲区，直接将数据投递到接收者。
    send(c, sg, ep, func() { unlock(&c.lock) }, 3)
    return true
}
```
```go
func send(c *hchan, sg *sudog, ep unsafe.Pointer, unlockf func(), skip int) {
    // 基于堆栈拷贝到目标数据ep
	sendDirect(c.elemtype, sg, ep)
	// 解锁
	unlockf()
	// 唤醒协程
	goready(gp, skip+1)
}

func sendDirect(t *_type, sg *sudog, src unsafe.Pointer) {
	dst := sg.elem
	typeBitsBulkBarrier(t, uintptr(dst), uintptr(src), t.Size_)
	// src is on our stack, dst is a slot on another stack.
	memmove(dst, src, t.Size_)
}
```

4. 当没有等待者，且存在缓冲空间，则将数据直接投递到缓冲区
```go
if c.qcount < c.dataqsiz {
    // Space is available in the channel buffer. Enqueue the element to send.
    qp := chanbuf(c, c.sendx)
    typedmemmove(c.elemtype, qp, ep)
    c.sendx++
    if c.sendx == c.dataqsiz {
        c.sendx = 0
    }
    c.qcount++
    unlock(&c.lock)
    return true
}
```

5. 当既没有等待着，也没有缓冲空间时，将当前协程投递到发送等待队列，阻塞等待唤醒
```go
mysg.elem = ep
c.sendq.enqueue(mysg)
gopark(chanparkcommit, unsafe.Pointer(&c.lock), waitReasonChanSend, traceBlockChanSend, 2)
```

### 接收流程

1. 加锁

2. 判断通道是否已经关闭，关闭且缓冲区为空，则返回零值

3. 判断是否存在等待发送的协程，如果存在，则绕过缓冲区，直接将数据拷贝过来

4. 判断缓冲区是否为空，不为空则直接从缓冲区获取数据

5. 没有发送者，也没有缓冲区，则阻塞等待唤醒



### 对已经关闭的chan进行读写会怎么样
- 对已关闭的通道读：返回零值
- 对已关闭的通道写：panic

### 什么是单向通道和双向通道


