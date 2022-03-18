---
title: 数据库单表十亿量级的优化之路
authors: [czasg]
tags: [数据库]
---

在常规数据库中，单表数据量到达百万时，查询方面就可能出现性能问题。而当单表数据量达到千万量级时，不仅查询，连索引维护也可能出现问题。     
此次我们的主角是"单表量级十亿"，本文章主要记录在优化期间的一些思路与实现。


<!--truncate-->

## 背景介绍
* **数据库**：postgres  
* **数据库配置**：4c8g + ssd
* **表名**：czasg（已脱敏）
* **表量级**：10亿  
* **表字段**：（已脱敏）
    * **key**：主键，类型 text
    * **value**： 类型 text
* **业务需求**：每天会有一批数据源，400w 左右，需求就是写入这批数据，并输出实际新增和更新的数据。

当前线上处理方式比较常规，主要包括下面两个步骤：

#### 1、创建临时表，写入数据
创建临时表，存储业务待处理数据，总量在 400w 上下。（数据插入过程略）
```sql
CREATE TEMPORARY TABLE tmp_czasg (
    key    text,
    value  text
) ON COMMIT DROP;
```

创建临时表，存储最终更新数据。当前表为空。
```sql
CREATE TEMPORARY TABLE tmp_czasg_update (
    key        text,
    value      text,
    old_value  text
) ON COMMIT DROP;
```


#### 2、join 计算
以 key 为连接条件 join 原表，再过滤出 value 不同或者原表 value 为空的数据.
```sql
INSERT INTO tmp_czasg_update 
SELECT newkv.key, newkv.value, kv.value FROM tmp_czasg AS newkv 
LEFT JOIN czasg AS kv ON newkv.key = kv.key 
WHERE newkv.value != kv.value OR kv.value IS NULL;
```

`tmp_czasg_update` 中 old_value 为空的表示新增数据，我们将它插入到原表中。
```sql
INSERT INTO czasg SELECT key, value FROM tmp_czasg_update 
WHERE old_value IS NULL;
```

`tmp_czasg_update` 中 old_value 非空的表示更新数据，我们将它更新到原表中。
```sql
UPDATE czasg AS kv SET kv.value = newkv.value FROM 
(SELECT * FROM tmp_czasg_update WHERE old_value IS NOT NULL) AS newkv 
WHERE kv.key = newkv.key;
```

至此业务结束。根据当前线上情况，执行完一次需要 N（N >= 2）小时。

优化需求：由于该业务会长时间阻塞，影响其他关联业务，**希望减少此阶段的执行时间。**


## 优化之路：痛点分析
看完上面的背景介绍后，我们应该已经初步了解业务流程了。可以看出，主要涉及到的操作就是新增和更新。

现在我们来拆解当中的流程，大致分析下耗时的原因：

1、创建临时表  
2、数据写入临时表  
3、**关联计算最终待作业的数据**    
4、**插入新数据**    
5、更新旧数据   
6、导出结果集   

在上述流程中，主要耗时点就是 3、4。     
步骤 3 耗时是因为数据量过大，关联过程无法全程在内存中操作，需要借用磁盘来完成中间计算。               
步骤 4 耗时是因为存在索引，对这个量级的索引进行增删操作都会非常耗时。     

首先，针对量级过大的问题，解决方案比较统一，那就是进行水平拆分，尽可能减小表的大小。   
其次，针对索引导致的插入/删除耗时，解决方案也比较简单，就是插入/删除前，先 `DROP INDEX`，执行完操作后，再 `CREATE INDEX`。     
在这里我们之所以不这样做，是因为重建一张 10亿 量级表的索引，不见得比当前方案快多少。     

有了大致思路，我们再来想想具体的落地方案。


## 优化之路：表分区
针对第一个问题，我们计划选择水平拆分这张大表。    
拆分时要考虑到单表的大小，最好能控制在百万级。    
所以我们可以选择将这张 10亿 大表拆分成 256 张小表，这样平均到每张表的大小就是 400w 左右了。

一般拆分的方式就是创建多张物理表，然后将数据按照某种规则均匀的插入到这些表中，从而减小单表的大小。  
但我们业务场景并没有特别复杂，在这里我们选择了**表分区**。

<!-- http://www.postgres.cn/docs/12/ddl-inherit.html -->
:::note 表继承
在 postgres 中，继承可以快速的关联和区分多张表，让数据维护更加高效。  
使用继承时，至少需要有一张源表，然后通过指定源表来创建继承表。    
对于继承表来说，此时的继承表将拥有源表的全部列，并且可以自定义额外的列属性。       
对于源表来说，此时的源表将可以检索自身以及继承表的全部数据。    
:::

<!-- http://www.postgres.cn/docs/12/ddl-partitioning.html -->
:::note 表分区
在 postgres 中，分区
:::


<br/>

:::info 👇👇👇
**本文作者:** Czasg    
**版权声明:** 转载请注明出处哦~👮‍
:::
