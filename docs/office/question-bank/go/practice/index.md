---
title: 实战练习
---

### 实现一个协程池

```go
func NewGoroutinePool(ctx context.Context, concurrent int) *GoroutinePool {
	newCtx, newCancel := context.WithCancel(ctx)
	gp := &GoroutinePool{
		ctx:    newCtx,
		cancel: newCancel,
		taskC:  make(chan Task, concurrent),
	}
	for i := 0; i < concurrent; i++ {
		go gp.worker()
	}
	return gp
}

type Task func(ctx context.Context)

type GoroutinePool struct {
	ctx    context.Context
	cancel context.CancelFunc
	taskC  chan Task
}

func (g *GoroutinePool) worker() {
	for {
		select {
		case <-g.ctx.Done():
			return
		case task := <-g.taskC:
			task(g.ctx)
		}
	}
}

func (g *GoroutinePool) Close() {
	if g.cancel != nil {
		g.cancel()
	}
}

func (g *GoroutinePool) BlockSubmit(ctx context.Context, task Task) {
	select {
	case <-g.ctx.Done():
	case <-ctx.Done():
	case g.taskC <- task:
	}
}
```

### 实现一个HTTP/DB连接池
考点：设计池化技术时需要注意那些点

- 连接池大小
- 最小空闲连接数
- 连接的空闲超时时间
- 连接的最大生命周期
- 连接的健康检查
- New 方法
- 实现方法：Get、Put



