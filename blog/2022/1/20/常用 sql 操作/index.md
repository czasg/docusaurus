---
title: 常见 sql 批量操作
authors: [czasg]
tags: [数据库]
---

整理下 sql 常见的批量操作写法。

<!--truncate-->

## 插入
```sql title="批量插入"
INSERT INTO my_table (k, v) VALUES ('k', 'v'); -- 插入单条
INSERT INTO my_table (SELECT * FROM same_table); -- 相同结构表之间的批量插入
INSERT INTO my_table (k, v) (SELECT k, v FROM other_table); -- 不同结构表之间的批量插入
```

## 更新
```sql title="批量更新"
UPDATE my_table SET v = 'new_v' WHERE k = 'new_k'; -- 更新一次
UPDATE my_table AS o SET v = new_table.v FROM (SELECT * FROM other_table) as new_table WHERE o.k = new_table.k; -- 批量更新
```

## 删除
```sql title="批量删除"
DELETE FROM new_table AS kv USING other_table AS row WHERE kv.k = row.k;
```

```sql title="联级删除 CASCADE"
DROP TABLE IF EXISTS my_table CASCADE;
```
