---
title: 关于我
tags: []
sidebar_label: 关于我
---

## 1.个人信息
---

**基本信息：**陈子昂 / 1995.09 / 湖北-武汉   
**邮箱地址：**[972542655@qq.com](#)  
**个人博客：**[Czasg's Site](https://czasg.github.io/docusaurus/)  
**教育背景**：[武汉科技大学](https://www.wust.edu.cn/) / 本科专业-工业工程（2014.09~2018.07）

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
