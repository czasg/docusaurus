---
title: WaitGroup
---

### 什么是WaitGroup
在Go中，WaitGroup可以用于等待一组Goroutine最终同时完成任务，是一种并发编程中的同步机制。有点类似屏障的概念。

（屏障：从名字就可以形象的比作一个屏障，在并发编程中，通过设置一道屏障，要求所有任务在某个点汇聚）

### 实现原理
等待组底层实现原理是基于计数器和信号量实现的。

技术期使用的uint64无符号整数类型，其中高32位用于存储计数器，低32位用于存储等待协程的数量。

当我们使用Add函数增加计数的时候，计数器会同步增加。

当我使用Wait函数的时候，会阻塞直至信号量通知释放。

当我们使用Done的时候，本质上就是调用了Add(-1)，当计数器位0的时候，会循环遍历waiters数量，释放信号。

```go
type WaitGroup struct {
	state atomic.Uint64 // high 32 bits are counter, low 32 bits are waiter count.
	sema  uint32
}
```