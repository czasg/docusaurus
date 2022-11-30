---
title: 记一次SQLAlchemy连接异常问题
authors: [czasg]
tags: [数据库]
---

```text title="服务错误日志"
mysql.connector.errors.OperationalError: 2055: Lost connection to MySQL server
```

<!--truncate-->

## 排查与定位

从连接信息可以快速看出，是数据库连接丢失了，我们首先做了简单的服务重启，并重试请求，期间同步观察数据库状态，确保数据库服务持续可用。

神奇的是，这是一个必现的错误。


```text title="服务错误日志"
File "/usr/local/lib/python3.6/site-packages/mysql/connector/network.py", line 140, in send_plain 
    self.sock.sendall(packet) 
BrokenPipeError: [Errno 32] Broken pipe 
```
继续排查日志，我们看到是在推送数据的过程，连接损坏了。由于是必现，所以网络不稳定基本可以排除。    
我们怀疑这可能是数据库侧的主动行为，即触发了某些机制，导致数据库强制关闭了连接。

我们拿到了待执行的SQL，直接在Navicat上进行复现，发现了新的错误信息：
```text title="navicat错误日志"
Got a packet bigger than 'max_allowed_packet' bytes
```
这明显就是单次请求大小超过了数据库的限制，所以导致连接被强制关闭。但是被`SQLAlchemy`封装了一层，导致错误信息有部分偏差。


## 修复
通过查询得知当前数据库单次请求体积不能查超过4M
```sql
show variables like 'max_allowed_packet';
```

|name|value|
|---|---|
|max_allowed_packet|4194304|

调大即可，这里我调到了64M，满足当前业务述求。
```sql title="修复SQL"
set global max_allowed_packet = 67108864;
```



<br/>

:::info 👇👇👇
**本文作者:** Czasg
**版权声明:** 转载请注明出处哦~👮‍
:::
