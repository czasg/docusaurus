---
title: golang 关于继承的坑点
authors: [czasg]
tags: [golang]
---

准确来说，golang 没有继承，而是组合。

<!--truncate-->

```go
package main

import "fmt"

type People struct{}

func (p People) Hello() {
	fmt.Println("hello")
	p.CallName()
}

func (p People) CallName() {
	fmt.Println("my name is people")
}

type Man struct {
	People
}

func (m Man) CallName() {
	fmt.Println("my name is man")
}

func main() {
	(Man{}).Hello()
}
```
该代码最终输出的都是结构体 `People` 定义的方法:
```text title="输出结果"
hello
my name is people
```
这是因为 `p.CallName()` 方法只会调用自己或者组合过来的方法。  
通过这种匿名组合的方式，被组合的类型 `People` 所包含的方法，虽然升级成了外部类型 `Teacher` 这个组合类型的方法，但接受调用的时候并没有发生变化。


<br/>

:::info 👇👇👇
**本文作者:** Czasg     
**版权声明:** 转载请注明出处哦~👮‍    
:::
