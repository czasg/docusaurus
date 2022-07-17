---
title: 如何设计一个结构化日志
authors: [czasg]
tags: [python]
---

结构化日志，即日志遵循一定的结构。程序输出内容不再是自由格式，而是类似JSON格式的文本。

结构化日志的最大好处就是简化日志解析，便于日志分类、聚合。

<!--truncate-->

## 定义标准
在开始编程前，需要先设计好项目的整体架构。

### 日志基础信息
首先，日志格式我们选择JSON格式。   
此外，还需要附带基础日志信息，这里我们选择时间和日志级别。  
```python
import json, datetime

def log(msg):
    print(json.dumps(dict(
        time=f"{datetime.datetime.now()}",
        level="info",
        msg=msg,
    )))
log("hello world")
```
这样，一个简单的结构化日志雏形就已经出现了。

### 项目结构
* Logger: 日志实体
    * Level: 日志级别
    * Format: 日志格式
    * Hook: 日志钩子
* Entry: 数据实体
    * Data: 数据





<br/>

:::info 👇👇👇
**本文作者:** Czasg
**版权声明:** 转载请注明出处哦~👮‍
:::