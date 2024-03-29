---
title: PostgreSQL vs MySQL
authors: [czasg]
tags: [数据库]
---

<!--
《postgresql修炼之道》
https://blog.csdn.net/Hehuyi_In/article/details/95895473
-->

MySQL 是业界主流的关系型数据库，目前被 Oracle 收购，并提供包括免费、付费等多种社区版本。    
PostgreSQL 则是一个开源的数据库。有句比较经典的话你可能听过，那就是："PostgreSQL 能与 Oracle 媲美，并且没有那么昂贵的价格和傲慢的客服。"    

两类数据库各有高低，本文主要学习总结下二者之间的特点，以及各自的优势。

<!--truncate-->

## PG相较于MySQL优势
首先 PG 完全开源，相较于 MySQL 来说，拥有更迅速的功能迭代。

### 更丰富的数据类型
除了常规的数据类型外，PG 的数据类型更加丰富，且完善了部分 MySQL 数据类型的一些槽点。

#### 支持json、jsonb类型
随着json格式的流行，越来越多的数据存储和传输，采用json格式。     

但存储这类半结构化数据，对于关系型数据库来说并不友好。往往只能先将json数据序列化为成字符串，然后存储字符串。   
这也是 MongoDB 等非关系型数据库逐渐流行的原因之一。       

PG 支持 json、jsonb 两类数据类型：   
* json：存储文本数据，每次读取都会对其进行json解析。不支持索引。  
* jsonb：存储二进制数据，相对于json类型来说，避免了重复解析，并且支持索引。  

所以当数据库字段设计时，仅仅有部分字段数据类型是半结构化的，数据库选型时 PG 将是非常优秀的选择。

#### text无长度限制，支持全文索引
一般关系型数据库的字符串有长度限制，大小在8k左右，PG 则没有限制。

#### 字符编码支持更友好
对于 emoji 的存储，MySQL 需要 utf8mb4 编码才能正确显示，在 PG 种遇不到。

### 更丰富的索引类型
MySQL 的索引类型取决于底层引擎选型，像 MyISAM、InnoDB 等支持B+树索引类型。       
PG 则支持B+数索引、哈希索引、Gist索引等。

### 更丰富的集群支持
MySQL 的集群高可用依赖于主从复制（replication），其底层基于 binlog 实现，并且是异步的。   
这种同步方案很难实现同步复制，更适合异地复制的场景。当主从节点处理能力不一致时，特别是主节点能力弱于从节点时，可能会存在较大的麻烦。

PG 的主备复制属于物理复制，相较于binlog的逻辑复制，数据的一致性更加可靠，复制性能更高，对主机的影响也更小。    
PG 集群有较多的插件：   
* slony 支持字段级的同步集群。  
* standby 支持WAL文件级或流式的读写分离集群。     


## MySQL相较于PG优势

### 业界主流
主流就意味着你能找到更多的用户经验、解决方案、文档等。

### 线程模式比进程模式更占据优势
MySQL 使用了线程，而 PG 使用的是进程。

进程之间的调度开销要比线程大很多。也是因为这个原因，PG 默认最大连接数只有 100，对于数据库来说，这是非常小的连接数了。    
因此，PG 更需要类似 pgbounder 的连接池代理服务来确保数据库稳定。

### 存储引擎插件化
MySQL 的存储引擎插件化机制，是的它的应用场景更加广泛，比如 InnoDB 适合事务场景，MyISAM 则更适合静态数据的查询场景。

### 索引组织表
以 InnoDB 为例，B+树索引中，主键索引树中叶子节点存储的就是物理数据，普通节点物理索引存储的是主键的索引。

PG 的索引记录的均是物理位置，需要二次查询。

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
