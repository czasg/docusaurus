---
title: tidb主键自增异常排查
authors: [czasg]
tags: [数据库]
---

在一次线上运维过程中，发现最新的数据，排在了前几天之后。

因为列表是按主键排序的，所以显示是没有问题的。

问题就在于，为什么最新的数据，主键会小于前几天的数据。

<!--truncate-->

之后，我们通过阅读官方文档，发现这似乎并不是一个异常。

::: info
TiDB 的自增 ID (AUTO_INCREMENT) 只保证自增且唯一，并不保证连续分配。    
TiDB 目前采用批量分配的方式，所以如果在多台 TiDB 上同时插入数据，分配的自增 ID 会不连续。    
当多个线程并发往不同的 tidb-server 插入数据的时候，有可能会出现后插入的数据自增 ID 小的情况。
此外，TiDB允许给整型类型的字段指定 AUTO_INCREMENT，且一个表只允许一个属性为 AUTO_INCREMENT 的字段。
:::

文档参考：
- https://docs.pingcap.com/zh/tidb/v4.0/auto-increment  
- https://docs.pingcap.com/zh/tidb/v4.0/mysql-compatibility


<br/>

:::info 👇👇👇
**本文作者:** Czasg
**版权声明:** 转载请注明出处哦~👮‍
:::
