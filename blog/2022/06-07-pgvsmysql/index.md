---
title: PostgreSQL vs MySQL
authors: [czasg]
tags: [数据库]
---

MySQL 是业界主流的关系型数据库，目前被 Oracle 收购，并提供免费与付费等多种版本。    
PostgreSQL 则是一个开源的数据库。其中有句比较经典的话就是：PostgreSQL 能与 Oracle 媲美，且没有那么昂贵的价格和傲慢的客服。

本文主要学习总结下二者之间的特点，以及各自的优势。

<!--truncate-->

## PG相较于MySQL优势
### 更丰富的数据类型
####支持json、jsonb类型

#### text无长度限制，支持全文索引

#### 字符编码支持更友好
MySQL 存储 emoji 的坑，在 PG 种遇不到。

### 更丰富的索引类型

### 更丰富的集群支持


## MySQL相较于PG优势

### 业界主流
更多的解决方案和社区支持

### 线程模式比进程模式更占据优势

### 存储引擎插件化

<!--
SELECT virus_name, minor_type, rules#>>'{0,rule,0}' as c FROM "public"."avl_models" WHERE "expire" = 'f' AND "major_type" = 'gen'

https://www.herodotus.cn/knowledge/postgresql/
https://www.modb.pro/db/51063
http://postgres.cn/docs/12/datatype-json.html
-->

<br/>

:::info 👇👇👇
**本文作者:** Czasg
**版权声明:** 转载请注明出处哦~👮‍
:::
