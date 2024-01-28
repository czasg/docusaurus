---
title: Go
---

### 常见panic发生场景
- slice下标越界
- map没有初始化，导致panic

### 什么是sysmon
sysmon是go中特殊的监控线程，它不和任何P绑定，监控：
- 超过一定时间没有触发垃圾回收，则强制启动垃圾回收
- 对于长时间执行的G发起抢占调度

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

