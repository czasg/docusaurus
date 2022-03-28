---
title: golang 选项模式
authors: [czasg]
tags: [golang]
---

在 golang 开发过程中，可能会遇到这么一种问题：参数过多，当希望将参数配置成可选的模式。    

在其他语言中有不同的解决方法，比如 python 就支持默认参数，可以很好的处理这个问题。      
在 golang 中也有一种选项模式，可以比较友好的处理这类问题。   

<!--truncate-->

选项模式的主要流程是：初始化一个默认参数，然后提供可变参数，这些参数可以针对性的修改此默认参数，最终得到目标参数。

```go
type MyFuncOption func(options *MyFuncOptions)

func WithOptionStr1(str1 string) MyFuncOption {
    return func(options *MyFuncOptions) {
        options.optionStr1 = str1
    }
}

func WithOptionInt1(int1 int) MyFuncOption {
    return func(options *MyFuncOptions) {
        options.optionInt1 = int1
    }
}

func WithOptionStr2AndInt2(str2 string, int2 int) MyFuncOption {
    return func(options *MyFuncOptions) {
        options.optionStr2 = str2
        options.optionInt2 = int2
    }
}

func NewIns(options ...MyFuncOption) {
    defaultOptions := Options{}
    for _, f := range options {
        f(&defaultOptions)
    }
}
```


<br/>

:::info 👇👇👇
**本文作者:** Czasg
**版权声明:** 转载请注明出处哦~👮‍
:::