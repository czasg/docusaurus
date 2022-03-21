---
title: golang interface 坑点
authors: [czasg]
tags: [golang]
---

<!--truncate-->

## 坑点：interface == nil
```go
var v interface{}
fmt.Println(v == nil)
v = (*int)(nil)
fmt.Println(v == nil)
```
这是一段简单的代码，我们来看下它的输出结果：  
```text
true
false
```

这是一个坑点，在 code 过程中，我们常常认为 interface 被赋值了一个空值 nil，再做判断时，可以直接和 nil 做对比。   
显然这是错误的，这样会得到与我们预期不符的结果。 

这是因为 interface 并不是一个指针类型，而是一个特殊的结构体，内部包含了两类数据结构：**类型** 和 **值**。  
所以在上面的判断中，需要类型和值都为 nil 的是否才会判断正确。  
一旦对 interface 赋予了某个类型或者值，即便是空值，当再次进行判断时，也会出现令人困惑的场景。   


针对这种场景，一般正确的方式是调用 reflect 反射包进行判断。


<br/>

:::info 👇👇👇
**本文作者:** Czasg     
**版权声明:** 转载请注明出处哦~👮‍    
:::
