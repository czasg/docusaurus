---
title: 简历
tags: []
sidebar_label: 简历
---

:::danger ‍请知👮‍
**简历仅供招聘专用，企业/个人应尽保密义务，禁止外传**
:::

## 1.个人信息
---
<div style={{"posttion":"relative","text-align":"center"}}>
  <img src={require('./cza.jpg').default} style={{"max-width":"170px","height":"auto","position":"absolute","right":"15px","border":"5px solid #f1f1f1"}} />
</div>

- **基本信息：**陈子昂 / 1995.09 / 湖北-武汉   
- **工作经验**：5年
- **联系方式：**15607173521 / [972542655@qq.com](#)  
- **个人博客：**[Czasg's Site](https://czasg.github.io/docusaurus/) / [Github](https://github.com/czasg/)  
- **教育背景：**[武汉科技大学](https://www.wust.edu.cn/) / 本科 / 2014.09-2018.07    
- **校园荣誉：**
  - 2018年荣获**优秀毕业生**（GPA **3.78**）
  - 2017年通过计算机二级考试（优秀）
  - 2016年荣获**冶机77奖学金**
  - 2015年荣获**特等奖学金**
  - 2014年担任班级**学习委员**
- **自我评价**：
  - **性格方面**：性格偏活泼，比较好相处
  - **编码方面**：轻微代码洁癖 + 命名纠结症
  - **工作方面**：态度积极，责任心强。曾多次临时接手并修复历史遗留瘫痪系统
  - **学习方面**：喜欢造轮子，也喜欢分享。曾组织数十余次技术分享，主题包括Go、Python、Docker、K8S等相关知识领域。业余时间**自研开源框架**并落地到多个项目中使用。也一直希望身边有很多大佬，可以一起探索学习~

<br/>

## 2.个人技能
---
拥有5年的后端开发经验，并具备1年的基层团队管理经验。担任管理职务期间也仍然投入大量时间参与一线coding。  
拥有一定 DevOps 体系搭建经验，帮助团队完成从 Jenkins-CICD 到 Gitlab-CICD 的转型升级。  
自研开源 web 开发框架，并落地多个项目使用。

技能清单见：

* **开发语言**：`★★Go`、`★★Python`、`☆JavaScript`
* **开发框架**：`★Iris`、`★Gin`、`☆Kratos`、`★★Pywss`、`★☆Flask`、`★Tornado`
* **常用中间件**：`★★Redis`、`★★RabbitMQ`、`★☆MySQL`、`★Postgres`
* **DevOps**：`★Docker`、`★Kubernetes`、`★Gitlab-CI`、`☆Jenkins`
* **网络相关**：`★HTTP`、`★gRPC`、`★WebSocket`

<br/>

## 3.工作经历
---

### 安天移动（2020.06~至今）
**公司全称：**[武汉安天信息技术有限公司](https://www.avlsec.com/zh-hans/home)  
**公司性质：**移动安全行业知名企业 / 人员300+      
**工作岗位：**后端研发工程师 / 研发组长          
**工作内容：**
- 负责AVLSDK产品线**基建研发板块管理工作**，定期向上级汇总、汇报相关事宜
- 负责**平台研发组团队管理工作**，包括不限于团队目标制定、组员培养等
- 负责病毒运营体系维护
- 负责URL运营体系维护
- 负责部分遗留旧系统维护

**里程碑事项：**
- 2023年团队扩员至7人，担任**AVLSDK产品线基建研发板块**负责人
- 2022年团队重构，担任**研发组长**一职，负责团队（4人）日常工作管理
- 2022年主导修复并优化多个线上重点平台，大量减少病毒作业体系时间
- 2021年参与**云查引擎**研发，担任 KV-DB 主设计与主研发
- 2020年修复多个遗留瘫痪系统，初步恢复线上功能

---

### 数博科技（2019.03~2020.06）
**公司全称：**[武汉数博科技有限公司](http://www.dnect.cn/)     
**公司性质：**小型创业公司 / 人员20+    
**工作岗位：**后端研发工程师 /（兼）爬虫研发工程师    
**工作内容：**
- 负责**分布式爬虫调度系统**的研发与维护
- 负责攻克重难点（js）逆向技术
- 负责攻克（裁判文书网、搜狗微信等）**字符型验证码**反爬
- 负责部分垂直领域爬虫维护

**里程碑事项：**
- 2020年优化分布式爬虫调度系统，显著减少系统奔溃次数
- 2019年攻克裁判文书网、搜狗微信等多个重难点平台反爬

---

### 中软国际（2018.3~2019.3 / 含实习）
**公司全称：**[武汉中软国际科技服务有限公司](https://www.chinasofti.com/)     
**公司性质：**外包    
**工作岗位：**后端研发工程师 / 华为驻场      
**工作内容：**参与**华为消费者业务线**日常工作  
**里程碑事项：**2019年荣获优秀实习生，并代表实习生发言

<br/>

## 4.项目经验
---

### 云查引擎

#### **项目简介：**
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
云查引擎是一款为终端用户提供病毒云查询能力的产品，如果您使用的手机是华为、小米等国产机型，
那么您可以打开手机管家，点击病毒扫描功能，如果您能看到"**安天AVL提供引擎支持**"类似字样，
就说明此次病毒扫描由本产品提供支持。目前该产品已长期应用于多家合作厂商，日活数十亿。

#### **关键技术：**
- Go & Iris
- LocalCache
- Kafka（Data Recycle）
- ELK（Alarm）
- gRPC Loadbalance
- KV-DB（Redis、Postgres、Ensure/Publish）

#### **职责描述：**
* 负责三代 KV-DB 设计与研发
* 负责云查数据加工开发与维护

#### **项目难点：**
- **高并发**，日活二十亿+，高峰期**10万QPS**+
- **数据更新**，需要支撑多集群下百万量级的高频数据更新
- **复杂的网络拓扑**，服务部署在阿里云、华为云等多个云服务厂商

#### **个人亮点：**
* 设计并开发三代 KV-DB，引入**版本管理**概念，设计**ensure/publish协议**，**解决弱网环境下数据可靠性问题**，并**申请专利**。（专利审查中，附个人梳理架构图）

<div align="center">
<img src={require('./kv-db.png').default} alt="KVDB" height="auto" width="500px" />
</div>

* 基于**业务分流、云查本地缓存、gRPC负载均衡、KV-DB缓存**等多重方案，解决高峰期并发压力问题
* 基于 GOMAXPROCS 调优 Go 性能，减少一定内存消耗和性能尖刺问题

<!--

日活：20 亿
日活折算每秒请求量：2.3w
工作时间实际请求量：4~5w
高峰期最高并发：9~10w 左右
带宽整理：1k（单次请求）* 10w ≈ 100M

-->

---

<br/>

### 恶意URL检测系统

#### **项目简介：**
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
恶意URL检测系统是一款用于保护用户免受恶意网站和URL威胁的安全检测产品。
通过分析用户访问的URL，系统能够基于存量的规则去检测并识别那些可能包含恶意内容、欺诈性行为或网络攻击的URL。

#### **关键技术：**
- Go & Gin
- Redis
- Postgres
- Kafka（Data Recycle）
- ELK（Alarm）
- Spider（Pywss、Selenium、Proxy Pool）

#### **职责描述：**
- 负责二代 URL-API 架构设计与研发
- 负责二代 URL 爬虫架构设计与研发

#### **项目难点：**
- 日活5000w，高峰期2000QPS+
- 有一定历史包袱，整套运营体系庞大且复杂

#### **个人亮点：**
- 开发二代 URL-API，复用部分存量资源，将一代系统从**4台云服务器**（2c4g）优化为仅需**2个轻量级Pod**（1c1g）。
- 参与整体运营体系梳理与设计，推动项目开展。

<!--

日活：3000w
日活折算每秒请求量：340
工作时间实际请求量：600 左右
高峰期最高并发：1000~1200 之间
带宽整理：1k（单次请求）* 1000 ≈ 1M

-->

---

### 分布式防误报系统
#### **项目简介：**
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
防误报系统是一款针对病毒规则精心设计的安全性测试平台。此平台专注于每天待发布病毒规则的误报测试，
其核心目标是降低病毒检测引擎在真实场景中可能造成的误报。

#### **关键技术：**
- Go & Gin
- RabbitMQ
- MySQL
- Distributed Storage

#### **职责描述：**
- 负责分布式防误报系统的设计与研发

#### **项目难点：**
- 单次误报耗时过长，平均一次误报耗时在1小时以上。业务侧期望**扫描样本尽可能多**，且**扫描耗时尽可能短**
- 在分布式场景下，多节点扫描**时间分配不均匀**，进一步增加误报耗时

#### **个人亮点：**
- 设计并优化分布式防误报系统，将历史单机存储升级为分布式存储，**大幅提升存储能力和扫描速度**。单次误报由 1.5h/5w样本 提升至 35min/14w样本。 
- 设计并开发**样本调度服务**，按一定策略调整不同节点下的样本存储，**修复单节点扫描短板问题**。（附个人梳理架构图）
<div align="center">
<img src={require('./misreport.png').default} alt="misreport" height="auto" width="500px"  />
</div>

<!--

- 支持**样本管理**，并**修复单节点扫描短板问题**，**大幅提升扫描速度**。（附架构图）

- 设计**核心调度逻辑**：记录每个节点中样本大小、样本数量、样本扫描耗时。每天凌晨触发一次样本调度，
计算各节点扫描总耗时，并将扫描耗时最大的节点与扫描耗时最小节点之间按一定条件进行**样本交换**，
直接二者扫描总耗时差距满足一定阈值。
- （12w / 6T / 45min）

-->

<br/>

## 5.开源项目
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
- **快速**：实现了独特的线程池机制，并能够在空闲时主动回收多余的线程池资源。
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
