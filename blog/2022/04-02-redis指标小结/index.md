---
title: redis指标小结
authors: [czasg]
tags: [redis]
---

本文学习总结下 redis 常用的观测指标，包括：性能指标、内存指标等。

<!--truncate-->

## 性能指标
redis 作为高性能缓存服务，其性能指标是一个很重要的观测点。

|名称|说明|
|---|---|
|latency|平均响应时间。该数据无法从 info 中获取，需要使用 redis-cli 加指定参数。eg：`redis-cli --latency`|
|instantaneous_ops_per_sec|每秒处理的命令总数，可以在 info stats 中获取。|
|hit rate|缓存命中率。该值无法直接获取，需要通过计算：`keyspace_hits /（keyspace_hits + keyspace_misses）`|


## 内存指标
redis 作为常见内存数据库，其内存指标也是一个很重要的观测点。

|名称|说明|
|---|---|
|used_memory|内存使用量，可以在 info memory 中获取。|
|mem_fragmentation_ratio|操作系统分配的内存和 redis 请求的内存的比率。计算方式为：`mem_fragmentation_ratio = used_memory_rss / used_memory`。该指标可以用于观测 redis 服务器的内存碎片率。该值大于1，表示存在内存碎片，比如1.5，则表示50%是内存碎片。若该值小于1，则表示redis内存分配超出了物理内存，操作系统正在进行内存交换。|


<br/>

:::info 👇👇👇
**本文作者:** Czasg
**版权声明:** 转载请注明出处哦~👮‍
:::