---
title: 索引
---

### 如何统计索引大小
在数据库中，以主键索引为例，叶子节点存储了所有的行数据，假设不存在其他非主键索引。因此对于主键索引来说，索引大小和数据大小之和就是表的大小。而数据库统计则是分开统计的。
```sql
-- 显示表的详细信息，包括索引大小。
SHOW TABLE STATUS LIKE 'your_table_name';

-- 显示数据长度
SELECT DATA_LENGTH('your_table_name');
```
