---
title: 常用 sql 操作
authors: [czasg]
tags: [sql]
---

整理下 sql 常见的操作。

<!--truncate-->

## mysql

## postgres
### 建表
```sql title="创建普通表"
CREATE TABLE IF NOT EXISTS my_table (
    k  text,
    v  text
)
```
```sql title="创建临时表"
CREATE TEMPORARY TABLE IF NOT EXISTS my_table (
    k  text,
    v  text
) ON COMMIT DROP;
```
```sql title="删除表"
DROP TABLE IF EXISTS my_table; -- 普通删除
DROP TABLE IF EXISTS my_table CASCADE; -- 级联删除
```

### 索引
```sql
CREATE INDEX IF NOT EXISTS my_table_hash_index USING HASH(k);
DROP INDEX IF EXISTS my_table_hash_index;
```

### 插入
```sql
INSERT INTO my_table (k, v) VALUES ('k', 'v'); -- 插入单条
INSERT INTO my_table (SELECT * FROM same_table); -- 相同结构表之间的批量插入
INSERT INTO my_table (k, v) (SELECT k, v FROM other_table); -- 不同结构表之间的批量插入
```

### 更新
```sql
UPDATE my_table SET v = 'new_v' WHERE k = 'new_k'; -- 更新一次
UPDATE my_table AS o SET v = new_table.v FROM (SELECT * FROM other_table) as new_table WHERE o.k = new_table.k; -- 批量更新
```
