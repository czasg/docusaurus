---
title: Once
---

### 什么是sync.Once
Once是Go中的一种数据结构，常用于初始化操作。它的特点是仅且只能执行一次。

### Once实现原理
`sync.Once`实现原理比较简单，它通过维护一个状态变量和一个互斥锁来实现。

当状态是未完成时，申请互斥锁并执行初始化函数，并修改状态至完成。对于同步阻塞在互斥锁中的协程，获取到锁权限后判断是否已经完成，如果已经完成，则直接返回。

```go
type Once struct {
	done uint32
	m    Mutex
}

func (o *Once) Do(f func()) {
	if atomic.LoadUint32(&o.done) == 0 {
		// Outlined slow-path to allow inlining of the fast-path.
		o.doSlow(f)
	}
}

func (o *Once) doSlow(f func()) {
	o.m.Lock()
	defer o.m.Unlock()
	if o.done == 0 {
		defer atomic.StoreUint32(&o.done, 1)
		f()
	}
}
```
