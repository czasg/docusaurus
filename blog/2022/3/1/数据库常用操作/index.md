---
title: 数据库常用操作
authors: [czasg]
tags: [数据库]
---

记录一些在工作常用的数据库操作

<!--truncate-->

## mysql

## postgres
```shell script
psql -U postgres -d postgres
select * from pg_database;
select pg_database_size('postgres');
```

## redis
```shell script title="连接 rds 并简单查询"
redis-cli
ping
auth password
select db
keys *
type key
```

<br/>

:::info 👇👇👇
**本文作者:** Czasg
**版权声明:** 转载请注明出处哦~👮‍
:::