---
title: About Me ~
tags: []
sidebar_label: 关于我
---

## 1.个人信息
---

**基本信息：**陈子昂 / 1995.09 / 湖北-武汉   
**邮箱地址：**[972542655@qq.com](#)  
**个人博客：**[Czasg's Site](https://czasg.github.io/docusaurus/)  
**教育背景**：[武汉科技大学](https://www.wust.edu.cn/) / 本科专业-工业工程（2014.09~2018.07）    
**经历简述：**
- 2023年担任基建板块**研发负责人**
- 2022年担任基建**研发组长**
- 2021年荣获安天极限技术挑战第二名
- 2020年入职武汉安天
- 2019年入职数博科技
- 2018年尝试考研（华科）计算机
- 2018年平均成绩绩点 **3.78**（GPA-4.0）
- 2018年荣获**优秀毕业生**
- 2017年拒绝本校保研
- 2017年自学编程过计算机二级(优秀)
- 2016年荣获**冶机77奖学金**
- 2015年荣获**特等奖学金**
- 2014年担任班级**学习委员**

<br/>

## 2.自我评价
---

- **性格方面**：性格偏活泼，比较好相处😋
- **编码方面**：轻微洁癖，命名强迫症病友😖
- **工作方面**：态度积极，责任心强。曾多次临时接手并修复历史遗留瘫痪系统，属于认真实干的一批人😁
- **学习方面**：喜欢造轮子，也喜欢分享。曾组织数十余次技术分享，主题包括Go、Python、Docker、K8S等相关知识领域。也一直希望身边有很多大佬，可以一起探索学习😍~~

<br/>

## 3.技术栈
---

* **编程语言**：`★★Python`、`★☆Go`、`★JavaScript`
* **常用框架**：
  * `★Iris`、`★Gin`、`☆Kratos`
  * `★★Pywss`、`★☆Flask`、`★Tornado`、`☆Django`、`☆FastAPI`
  * `★☆Scrapy`、`★☆Selenium`
  * `☆Vue`、`☆React`
* **常用中间件**
  * `★☆MySQL`、`★Postgres`、`☆TIDB`
  * `★★Redis`、`☆MongoDB`
  * `★★RabbitMQ`、`☆Kafka`
* **运维相关**：`★Docker`、`★Kubernetes`、`★Gitlab-CI`、`☆Jenkins`

<br/>

## 4.工作经历
---

### 安天移动（2020.06~至今） 
**公司全称：**[武汉安天信息技术有限公司](https://www.avlsec.com/zh-hans/home)  
**公司性质：**移动安全行业知名企业 / 人员300+      
**工作岗位：**后端研发工程师 / 研发组长          
**工作内容：**       
- 负责AVLSDK产品线**基建研发板块管理工作**，定期向上级汇总、汇报相关事宜
- 负责病毒运营体系维护
- 负责URL运营体系维护
- 负责部分遗留旧系统维护

**里程碑事项：**
- 2023年团队扩员至7人，担任**AVLSDK产品线基建研发板块**负责人
- 2022年团队重构，担任**研发组长**一职，负责团队（4人）日常工作管理
- 2021年参与**云查引擎**研发，担任 KV-DB 主设计与主研发 
- 2020年修复多个遗留瘫痪系统，初步恢复线上功能

---
<br/>

### 数博科技（2019.03~2020.06）
**公司全称：**[武汉数博科技有限公司](http://www.dnect.cn/)     
**公司性质：**小型创业公司 / 人员20+    
**工作岗位：**后端研发工程师 / 爬虫研发工程师    
**工作内容：**     
- 负责**分布式爬虫调度系统**的研发与维护
- 负责攻克重难点（js）逆向技术
- 负责攻克（裁判文书网、搜狗微信等）**字符型验证码**反爬
- 负责部分垂直领域爬虫维护

**里程碑事项：**    
- 2020年优化分布式爬虫调度系统，显著减少系统奔溃次数
- 2019年攻克裁判文书网、搜狗微信等多个重难点平台反爬

<br/>

## 5.项目经验
---

### 云查引擎   

#### **项目简介：**    
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
云查引擎是一款为终端用户提供病毒云查询能力的产品，该产品依托于大数据平台赋能，
由云查API、KV-DB、云查数据加工等多个模块联动组成。支持快速病毒查杀、秒级上下线规则、定向多元打击等能力。
其产品定位于解决终端引擎性能瓶颈、规则更新延迟等问题。目前该产品已长期应用于多家合作厂商，高峰期并发量达百万，日活数十亿。  

<div style={{'textAlign':'center','display':'flex','justifyContent':'center'}}>

| 云查引擎   | 说明                                      |
|--------|-----------------------------------------|
| 云查API  | 提供 HTTPS 业务查询接口                         |
| KV-DB  | 对外提供 gRPC 数据查询接口，对内负责多节点数据同步，为数据一致性提供保障 |
| 云查数据加工 | 包含爬虫、定时脚本、数据清洗等，为云查提供数据更新               | 

</div>

#### **关键技术：**
- Go & Iris
- Redis
- Kafka
- Postgres
- KV-DB
  - Ensure/Publish
  - gRPC Loadbalance 
  - WAL Streaming Replication

#### **职责描述：**
* 负责 KV-DB 设计与研发
* 负责云查数据加工开发与维护

#### **项目难点：**
- **高性能**，高峰期**超百万QPS**
- **数据一致性**，需要支撑百万数据量级的高频更新
- **复杂的网络拓扑**，云服务部署在阿里云、华为云等多个云服务厂商

#### **项目亮点：**    
* 基于 WAL 技术开发 KV-DB，引入**版本管理**概念，设计**ensure/publish协议**，解决弱网环境下数据可靠性问题，并**申请专利**。（架构见下）

<div align="center">
<img src={require('./kv-db.png').default} alt="RabbitMQ" />
</div>

* 基于**业务分流、云查本地缓存、gRPC负载均衡、KV-DB缓存**等多重方案，抗住高峰期百万并发压力
* 基于 GOMAXPROCS 调优 Go 性能，减少内存消耗，避免性能尖刺

---
<br/>

### URLSAAS

#### **项目简介：**
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
基于公司战略和从对url治理能力扩展的角度出发，构建对url海量的检测能力，探索对开发者新的治理点。

#### **关键技术：**
- Go & Gin
- Redis
- Kafka
- Postgres
- Spider
  - Pywss
  - Selenium

#### **职责描述：**
- 负责 URLSAAS-API 架构设计与研发
- 负责 URLSAAS 爬虫模块支撑

#### **项目难点：**

#### **项目亮点：**
<div align="center">
<img src={require('./urlsaas.png').default} alt="urlsaas" />
</div>

---
<br/>

### 业务监控中台
#### **项目简介：**
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
为了更全面地了解线上服务的运行状态，及时感知线上异常并触发相应的处置流程，我们需要建立一套可视化的业务监控平台。

#### **关键技术：**
- Pywss
- TIDB
- 可视化监控大屏

#### **职责描述：**
- 负责业务监控中台架构设计与后端研发

#### **项目难点：**
- 待监控业务具有较高的复杂性与多样性，并不是一个纯粹的监控服务
- 监控指标变动较频繁

#### **项目亮点：**
- 考虑业务来源的复杂性与多样性，将系统拆分出**数据单元**和**预警规则**两个子模块，灵活管控。（架构见下）

<div align="center">
<img src={require('./monitor.png').default} alt="RabbitMQ" />
</div>

---
<br/>

### 分布式防误报系统
#### **项目简介：**
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
在对外发布病毒规则之前，需要先进行一轮内部的防误报测试，以达到减少误报的目的。
在大多数情况下，漏报是能力问题，误报则往往是事故。
因此，事前防误报就显得尤为重要了。
本系统的核心在于如何在有限的时间内扫描尽可能多的样本，从而提高防误报的效果。

#### **关键技术：**
- 分布式存储
- 优化调度

#### **职责描述：**
- 负责分布式防误报系统的设计与研发

#### **项目难点：**
- 需要在尽可能少的时间内扫描尽可能多的样本（20w / 10T / 30min）
- 分布式场景下多节点存储、扫描时间分配不均匀

#### **项目亮点：**
- 设计分布式存储架构（含 Center、Agent、Scheduler 等多个系统模块），实现分布式存储与调度能力
- Center 对外提供接口服务，对内提供样本管理能力
- Agent 部署在存储节点上，用于管理样本
- Scheduler 用于优化多节点下的样本调度

<div align="center">
<img src={require('./misreport.png').default} alt="misreport" />
</div>

---
<br/>

### 字符型验证码识别平台
#### **项目简介：**    
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
基于卷积神经网络搭建数字字符型验证码识别平台，提供验证码识别接口。
针对图片的难度，可快速适配多种卷积模型来进行训练，对简易验证码实现快速训练，对复杂验证码实现精度更高的训练。
训练过程中，自动调节保留率，即随着正确率的增加，训练识别错误的验证码则有更大概率保留到下一次，以便加强训练。

#### **关键技术：**
- tensorflow
- cnn（卷积神经网络）

#### **职责描述：**   
* 负责机器学习算法调研与研发
* 验证码爬虫与打标

#### **项目亮点：**   
* 使用卷积神经网络算法，自训练模型
* 目前已训练有搜狗微信、创宇、京东、苏宁等数字字符验证码

---
<br/>

### 分布式爬虫调度服务
#### **项目简介：**    
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
基于生产者消费者模型搭建的分布式爬虫调度服务平台。
该平台基于Vue搭建了管理界面，支持多维度的爬虫任务管理，且支持多任务之间的优先级调度。
在实现上采用了多种技术模型，其中包括有：
- 基于 Agscheduler 实现的任务调度
- 基于 RabbitMQ 实现任务分发
- 基于 RPC 实现爬虫节点注册与发现

#### **关键技术：**
- Flask
- Agscheduler
- RabbitMQ
- RPC 
- Mongodb

#### **职责描述：**      
* 负责分布式爬虫调度服务研发与维护  

#### **项目亮点：**      
* 优化 Agscheduler 触发机制，避免服务高频重启
* 基于 RabbitMQ 引入优先级机制
* 引入 RPC 机制，实现爬虫节点注册与发现，同时支持实时中断爬虫任务，获取节点信息     

---
<br/>

### 爬虫服务
#### **项目简介：**       
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
这是一场爬虫与反爬虫之间的技术斗争😤

#### **关键技术：**
- JavaScript 逆向

#### **项目亮点：**       
* 中国裁判文书网，旧版sojson.v5反爬、js混淆加密（最新版瑞数反爬未攻破）。js混淆加密技术，动态生成随机密钥，实际解析逻辑经jsfuck编译为不可读的代码，由eval来执行该段字串。
* 搜狗微信，验证码反爬、js加密。验证码为5-7位，且干扰信息严重，无法通过普通机器学习识别。js重定向，根据url动态生成数组信息，按照规则拼接出重定向后的链接。
* 自如网，房价数据加密。数据存储在js和css中，需要综合图片、js、css等获取最终信息。
* 58同城，房价数据加密。房价被字体加密，需要编译font字体文件，获取对应的数字映射关系。
* 京东商城，验证码反爬。爬取营业证件信息时出现4位字符验证码。
* 苏宁易购，验证码反爬。感觉和京东差不多。
* 美团外卖，js混淆加密。


## 6.开源项目
---

### Pywss（后端框架）

#### **项目简介：**
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
Pywss（发音 /piːwaɪz/，类似 **p~whys**）是一个轻量级的 Python Web 框架，它基于 Python3.6+ 特性构建。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
与 Flask、Django 等主流框架不同的是，Pywss 的底层并没有实现 WSGI 接口协议。
其编程风格也更类似于 Gin、Iris 等框架，因此对于熟悉这些框架的开发者来说，Pywss 是一个非常值得探索的项目。

其关键特性有：
- **简单**：拒绝海量参数，减少心智负担。了解上下文 `pywss.Context` 即刻启程。
- **快速**：纯手撸 socket，拒绝中间商赚取性能差价。(实在有性能追求的同学，不妨再探索下其他语言~**Go**~)
- **优雅**：`ctx.next` 真的太优雅了。如果你也和我一样喜欢，那我觉得这件事情，**泰裤辣！！**
- **标准化**：集成了部分 OpenAPI（Swagger）能力，方便开发者快速生成 API 文档并进行调试。
- **支持WebSocket**：开箱即用的 **WebSocket** 能力。
- **接口测试**：开箱即用的 **API 测试模块**，不启动服务也能测试接口功能辣！

**_仓库地址_** [**_https://github.com/czasg/pywss/_**](https://github.com/czasg/pywss/)     
**_在线文档_** [**_https://czasg.github.io/pywss/_**](https://czasg.github.io/pywss/)     

[![GitHub Stars](https://img.shields.io/github/stars/czasg/pywss.svg?style=flat-square&label=Stars&logo=github)](https://github.com/czasg/pywss/stargazers)
[![GitHub Forks](https://img.shields.io/github/forks/czasg/pywss.svg?style=flat-square&label=Forks&logo=github)](https://github.com/czasg/pywss/network/members)
[![GitHub Issue](https://img.shields.io/github/issues/czasg/pywss.svg?style=flat-square&label=Issues&logo=github)](https://github.com/czasg/pywss/issues)

---
<br/>

### Loggus（日志框架）

#### **项目简介：**
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
loggus 是一个基于 Python 的结构化日志库。与原生的 logging 相比，loggus 提炼了部分关键的结构化字段，
同时简化了结构化日志的使用方式，并改进了日志对象回收机制以确保更优的性能。
此外，loggus 还充分利用了 Python 动态语言的特性，实现了一系列独特的功能。

**_仓库地址_** [**_https://github.com/czasg/loggus/_**](https://github.com/czasg/loggus/)   

[![GitHub Stars](https://img.shields.io/github/stars/czasg/loggus.svg?style=flat-square&label=Stars&logo=github)](https://github.com/czasg/loggus/stargazers)
[![GitHub Forks](https://img.shields.io/github/forks/czasg/loggus.svg?style=flat-square&label=Forks&logo=github)](https://github.com/czasg/loggus/network/members)
[![GitHub Issue](https://img.shields.io/github/issues/czasg/loggus.svg?style=flat-square&label=Issues&logo=github)](https://github.com/czasg/loggus/issues)
