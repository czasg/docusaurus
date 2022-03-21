---
title: python 生成器与迭代器理解
authors: [czasg]
tags: [python]
---

<!--truncate-->

## 生成器
生成器是 python 中的一种特殊对象，它可以运行时返回计算值，而不用一次将所有逻辑执行完。  
生成器定义的方式有两种：  
```python title="列表生成式中 [] 改 ()"
(x * x for x in range(10))
```
```python title="在函数中嵌入 yield"
def fib(max):
    n, a, b = 0, 0, 1
    while n < max:
        yield b
        a, b = b, a + b
        n = n + 1
    return 'done'
```

## 迭代器
在 python 中，我们将所有可以直接用于 for 循环的对象，统称为**可迭代对象**：`Iterable`

而生成器是一种特殊的对象，不仅可以直接作用于 for 循环，还可以被 next 函数不断调用返回下一个值，直至最后抛出 StopIteration 错误，
表示已获取到最后一个值。  
所以，我们将可以被 next 函数调用并不断返回值的对象称之为 **迭代器**：`Iterator`

`Iterator` 和常见的 list、map 概念不同：`Iterator` 表示的是数据流，而他们则表示一个数据集合。

<br/>

:::info 👇👇👇
**本文作者:** Czasg     
**版权声明:** 转载请注明出处哦~👮‍    
:::
