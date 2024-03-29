---
title: 字符编码
authors: [czasg]
tags: [计算机基础]
---

字符串是使用的最多的数据类型之一。  
如果说在使用过程中会遇到什么问题，那可以说，大部分都是编码方面的问题了。

<!--truncate-->

## ascii 编码
> 字符编码的本质，是数字到字符串的映射

最早的编码是 ascii 编码，它是一个包含 128 个字符的字符集，可以编码字母和特殊字符。

:::note 比特与字节
由于计算机底层只能够处理数字，如果要处理类似文本图片等数据，就需要先将这些数据转化为数字才能够继续处理。  
最早计算机在设计时采用 8 个比特（bit）作为一个字节（byte），所以一个字节能表示的最大数字就是 255，二进制表示 `1111 1111`

如果需要表示更大的数，就需要更多的字节
:::

## unicode 编码
随着计算机的发展，单一的 ascii 编码已经无法满足多元的文化需求。  
计算机需要支持更多的编码集，例如：中国制定有 gb2312，其他国家也有类似的编码集。

虽然每个国家都实现了特定的编码，但是当一个文本中混合了多个国家的语言时，就不可避免的出现局部乱码。

为了解决这个问题，业界决定使用统一的 unicode 编码。  
即将所有国家的编码收录到一个字符集中。


## utf-8 编码
虽然 unicode 可以解决乱码问题，但并不优雅。因为它存在一个这样的问题：  
中英混合时，一个中文可能需要占据两个字节，这个时候为了正确编码，原本只需要占据一个字节的英文，不得不占据两个字节。  
从而造成了资源浪费。

为了解决这个缺陷，基于 unicode 编码又推出了可变长编码 utf-8

即 utf-8 会根据实际类型选择最佳的字节占位，从而节省空间。


## 计算机通用编码方式
搞清楚了 ascii、unicode、utf-8 编码，我们梳理下计算机通用的编码方式：    
1、在计算机内存中，统一使用 unicode 编码    
2、当需要保存到硬盘或者传输的时候，转化为 utf-8 编码   


以我们的 txt 文本为例：  
1、打开文本：数据以 unicode 编码，以便展示内容。  
2、保存文本：数据以 utf-8 编码，以便节约空间。

:::note 常用字符 ascii 码
0-9：48 ~ 57   
A-Z：65 ~ 90    
a-z：97 ~ 122    
:::


<br/>

:::info 👇👇👇
**本文作者:** Czasg         
**版权声明:** 转载请注明出处哦~👮‍    
:::
