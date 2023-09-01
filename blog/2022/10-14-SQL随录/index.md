---
title: SQL随录
authors: [czasg]
tags: [sql]
---

```sql
SELECT 
    SUBSTRING( ( table.key -> 0- > 'rule' -> 0 ) :: TEXT, '=*([0-9a-zA-Z]*);' ) AS hash 
FROM
    table;
```

<!--truncate-->

需求说明：`table.key`是一个`JSONB`字段，存储数据为：`[{"rule": ["hash=hashstring;"]}]`，现需要解析此数据，
并截取出此数据结构中的哈希数据。


参考：[9.15. JSON 函数和操作符](http://postgres.cn/docs/12/functions-json.html)      
参考：[9.4. 字符串函数和操作符](http://postgres.cn/docs/12/functions-string.html)     


<br/>

:::info 👇👇👇
**本文作者:** Czasg    
**版权声明:** 转载请注明出处哦~👮‍
:::
