---
title: tcmalloc理解
authors: [czasg]
tags: [计算机基础]
---

tcmalloc（Thread-Caching Malloc）是一个内存分配器，用于管理堆内存。  
主要影响的是malloc和free，用于降低频繁分配、释放内存场景所造成的性能损耗，可以有效的控制内存碎片。

<!--truncate-->

## ptmalloc & tcmalloc
在tcmalloc之前，还有一个ptmalloc，tcmalloc号称要比它快。   
一次malloc和free操作，ptmalloc需要300ns，而tcmalloc只需要50ns。   

tcmalloc将内存请求分为了两类：大对象请求和小对象请求。（大于32K的属于大对象）   
它会为每个线程分配本地缓存，小对象请求可以直接从本地缓存获取，所以对于小对象的分配基本不存在锁竞争。

<br/>

:::info 👇👇👇
**本文作者:** Czasg
**版权声明:** 转载请注明出处哦~👮‍
:::