---
title: defer坑点收录
authors: [czasg]
tags: [golang]
---

Go defer 史诗级坑点整理！

<!--truncate-->

### 入参是确定的
```go
func demo() {
    i := 1
    defer fmt.Println(i) // 输出1
    i++
    return i
}
```
入参在 defer 出现时刻已经确定，因为执行 `defer fmt.Println(i)` 时已经生成临时变量拷贝了一份参数。

### 后近先处
这个通常没有问题，即后面定义的 defer 会先执行，很好理解。

### 可操作具名参数返回
```go
func demo() (result int) {
    i := 1
    defer func() {
        result++ // demo函数返回值为2
    }
    return i
}
```
此处函数 return 实际可以拆解为两步，即：
```go
result = i
return
```
故 defer 会修改此处实际返回值。

### 不可操作非具名返回
同样的函数我们作下适当的调整
```go
func demo() int {
    i := 1
    defer func() {
        i++ // demo函数返回值为1
    }
    return i
}
```
在执行 return 的时候，已经生成临时变量存储返回值，故延迟函数 defer 无法对返回值做出修改。

<br/>

:::info 👇👇👇
**本文作者:** Czasg    
**版权声明:** 转载请注明出处哦~👮‍
:::
