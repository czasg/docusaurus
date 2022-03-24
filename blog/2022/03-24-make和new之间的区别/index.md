---
title: make和new之间的区别
authors: [czasg]
tags: [golang]
---

make 和 new 都是用来创建对象和初始化内存的。在实际使用场景中还是有一些不同的。

<!--truncate-->

#### new
```go title="new 源码注释"
// The new built-in function allocates memory. The first argument is a type,
// not a value, and the value returned is a pointer to a newly
// allocated zero value of that type.
func new(Type) *Type
```
在源码注释中我们可以看出 new 的功能：**输入一个类型，不能是值，返回一个指向该类型零值的指针。**

#### make
```go title="make 源码注释"
// The make built-in function allocates and initializes an object of type
// slice, map, or chan (only). Like new, the first argument is a type, not a
// value. Unlike new, make's return type is the same as the type of its
// argument, not a pointer to it. The specification of the result depends on
// the type:
//	Slice: The size specifies the length. The capacity of the slice is
//	equal to its length. A second integer argument may be provided to
//	specify a different capacity; it must be no smaller than the
//	length. For example, make([]int, 0, 10) allocates an underlying array
//	of size 10 and returns a slice of length 0 and capacity 10 that is
//	backed by this underlying array.
//	Map: An empty map is allocated with enough space to hold the
//	specified number of elements. The size may be omitted, in which case
//	a small starting size is allocated.
//	Channel: The channel's buffer is initialized with the specified
//	buffer capacity. If zero, or the size is omitted, the channel is
//	unbuffered.
func make(t Type, size ...IntegerType) Type
```
在源码注释中我们可以看出 make 的功能：**输入一个类型（必须是slice、map、chan），返回一个按指定条件初始化后的类型对象。**

## 主要区别
其实感觉没什么太大关系，都是内置的初始化函数，new 返回指针，make 只能用于特定类型。


<br/>

:::info 👇👇👇
**本文作者:** Czasg
**版权声明:** 转载请注明出处哦~👮‍
:::