---
title: 读写锁
---

### 请介绍实现原理
读写锁底层是基于互斥锁和信号量实现的，在此基础上，维护了读锁总量和等待数量。
```go
type RWMutex struct {
	w           Mutex        // held if there are pending writers
	writerSem   uint32       // semaphore for writers to wait for completing readers
	readerSem   uint32       // semaphore for readers to wait for completing writers
	readerCount atomic.Int32 // number of pending readers
	readerWait  atomic.Int32 // number of departing readers
}
```

#### 申请读锁
申请读锁时会尝试在`readerCount`读锁总量上加1，当返回值为负数时，表示有写锁正在申请，因此阻塞等待写锁释放。
这个过程时通过监听读锁信号量实现的。

#### 申请写锁
申请写锁时会先使用互斥锁，然后将`readerCount`读锁总量置为最大的负数，确保不会有读锁能够申请，从而实现了写锁优先。
然后如果读锁等待量大于0，表示仍然有读锁正在占用，那么这时读锁会监听写锁信号量，等待读锁释放。
