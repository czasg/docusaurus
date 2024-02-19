---
title: Go
---

### 常见panic发生场景
- slice下标越界
- map没有初始化，导致panic

### 什么是sysmon
`sysmon`（System Monitor）是运行时系统（runtime system）的一部分，用于监控系统的全局状态并触发一些操作，以维持整个程序的正常运行。`sysmon` 主要关注的是**全局的调度**和**内存管理**。

具体来说，`sysmon` 负责以下一些主要任务：

1. **全局调度：** `sysmon` 周期性地检查全局运行时状态，包括所有的M（机器）、P（处理器）和G（Goroutine）。它负责做出调度决策，例如在某个P上运行的Goroutine执行时间过长，或者某个P上没有足够的Goroutine可运行时，`sysmon` 可能会触发 Handoff 机制，将 Goroutine 从一个 P 转移到另一个 P，以保持负载均衡。

2. **GC标记：** `sysmon` 在全局扫描时触发垃圾回收（Garbage Collection）标记阶段。它会通过定期检查所有的Goroutines来查找全局的指针，并确保堆上的对象被正确标记。

### 什么是MN模型

### defer输出结果
- 非具名参数返回值中，return会自动创建临时变量存储返回值，因此defer无法修改返回值
- 具名参数返回中，return就相当于赋值操作，因此defer可以修改返回值
```go
func main() {
	fmt.Println(test1()) // 00
	fmt.Println(test2()) // 33
	fmt.Println(test3()) // 34
	fmt.Println(test4()) // 44
	fmt.Println(test5()) // 05
	fmt.Println(test6()) // 66
}

func test1() (v int) {
	defer fmt.Print(v)
	return v
}

func test2() (v int) {
	defer func() {
		fmt.Print(v)
	}()
	return 3
}

func test3() (v int) {
	v = 3
	defer fmt.Print(v)
	return 4
}

func test4() (v int) {
	v = 3
	defer func() {
		fmt.Print(v)
	}()
	return 4
}

func test5() (v int) {
	defer func(n int) {
		fmt.Print(n)
	}(v)
	return 5
}

func test6() (v int) {
	defer func() {
		v++
		fmt.Print(v)
	}()
	return 5
}
```

