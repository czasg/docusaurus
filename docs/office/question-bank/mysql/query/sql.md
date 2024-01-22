---
title: sql
---

### 查找重复的电子邮箱
```sql
SELECT email FROM person GROUP BY email HAVING sum(1) > 1;
```

### 删除重复的电子邮箱
```sql
DELETE p1.* FROM person p1, person p2 WHERE p1.email = p2.email AND p1.id > p2.id;
```


### 创建表
```sql
CREATE TABLE IF NOT EXISTS table (
    id INT PRIMARY KEY AUTO_INCREMENT COMMENT '主键',
    name VARCHAR(50) NOT NULL,
    gender ENUM(0, 1, 2) NOT NULL,
    age INT NOT NULL,
    create_at DATETIME DEFAULT CURRENT_DATETIME
)
```
