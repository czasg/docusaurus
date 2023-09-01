---
title: SQL随录
authors: [czasg]
tags: [sql]
---

```sql
SELECT
	proname 
FROM
	pg_proc 
WHERE
	prosrc LIKE'%table_name%';
```

<!--truncate-->

需求说明：在众多函数中，找到与目标表相关的函数。

实现说明：
- pg_proc：pg存储函数的表
- prosrc：是函数源码，通过模糊匹配查询所有源码中，与目标表有关的函数
- proname：函数名


<br/>

:::info 👇👇👇
**本文作者:** Czasg    
**版权声明:** 转载请注明出处哦~👮‍
:::
