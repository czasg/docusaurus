---
title: redis 整理
authors: [czasg]
tags: [redis]
---

整理下 redis 常见知识点。

<!--truncate-->

:::note redis 单线程理解
在 6.0 版本之前，redis 内部的网络IO和键值对的读写是在同一个线程中完成的。  
但类似数据持久化、主从同步等，都是多线程完成的。所以本质上，redis 并不是一个绝对的单线程服务。
而官方之所以这样描述，也只是因为他的核心逻辑都是单线程实现的，然后还能提供这么高的并发，整体听上去就很牛了。

在 6.0 版本之后，redis 在网络IO部分引入了多线程，而键值对的读写则还是由单线程完成。  

:::

## 常见数据类型
* string
* hash
* list
* set
* zset
* bitmap
* hyperloglog
* geo


## 
