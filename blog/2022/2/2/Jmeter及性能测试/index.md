---
title: Jmeter及性能测试
authors: [czasg]
tags: [性能测试,jmeter]
---

记录 jmeter 工具的使用，以及在性能测试过程中学习到的一些知识点。

<!--truncate-->

## 性能指标
* TPS（Transactions Per Second）：每秒事务数，吞吐率
* QPS（Queries Per Second）：每秒查询数
* RT（Response Time）：响应时间，服务延迟

性能问题，归根结底还是资源问题。常见的瓶颈点：  
1、网络IO  
2、存储IO  
3、CPU、内存  
4、应用  


## jmeter 结果解读
并发线程、响应时间、TPS之间的关联：
```text
TPS = (1s/响应时间) * 并发线程
```

:::note
假设有4个线程，每个线程每秒发起4个请求并响应，此时并发是16而非4
:::

```text title="1个线程"
summary +   5922 in 00:00:30 =  197.4/s Avg:     4 Min:     0 Max:    26 Err:     0 (0.00%) Active: 1 Started: 1 Finished: 0
summary =  35463 in 00:03:05 =  192.0/s Avg:     5 Min:     0 Max:   147 Err:     0 (0.00%)
summary +   5922 in 00:00:30 =  197.5/s Avg:     4 Min:     0 Max:    24 Err:     0 (0.00%) Active: 1 Started: 1 Finished: 0
summary =  41385 in 00:03:35 =  192.8/s Avg:     5 Min:     0 Max:   147 Err:     0 (0.00%)
summary +   5808 in 00:00:30 =  193.6/s Avg:     5 Min:     0 Max:    25 Err:     0 (0.00%) Active: 1 Started: 1 Finished: 0
summary =  47193 in 00:04:05 =  192.9/s Avg:     5 Min:     0 Max:   147 Err:     0 (0.00%)
```
(1000ms/5ms)*1=200TPS


```text title="10个线程"
summary +  11742 in 00:00:30 =  391.3/s Avg:    25 Min:     0 Max:   335 Err:     0 (0.00%) Active: 10 Started: 10 Finished: 0
summary =  55761 in 00:02:24 =  386.6/s Avg:    25 Min:     0 Max:   346 Err:     0 (0.00%)
summary +  11924 in 00:00:30 =  397.5/s Avg:    25 Min:     0 Max:    80 Err:     0 (0.00%) Active: 10 Started: 10 Finished: 0
summary =  67685 in 00:02:54 =  388.5/s Avg:    25 Min:     0 Max:   346 Err:     0 (0.00%)
summary +  11884 in 00:00:30 =  396.2/s Avg:    25 Min:     0 Max:   240 Err:     0 (0.00%) Active: 10 Started: 10 Finished: 0
summary =  79569 in 00:03:24 =  389.6/s Avg:    25 Min:     0 Max:   346 Err:     0 (0.00%)
```
(1000ms/25ms)*10=400TPS


<br/>

:::info 👇👇👇
**本文作者:** Czasg    
**版权声明:** 转载请注明出处哦~👮‍
:::