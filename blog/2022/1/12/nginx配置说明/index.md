---
title: Github 搭建 Docusaurus 站点
authors: [czasg]
tags: [部署, docusaurus]
---

<!--truncate-->

## nginx 常用指令
* -c：用于指定一个配置文件
* -t：用于测试配置是否可用
* -s：用于发送信号，包括：stop, quit, reopen, reload。eg：`nginx -s reload`

```shell script title="指定并测试配置文件"
nginx -t -c ./nginx.conf
```

## nginx 核心模块
nginx 的核心模块主要有三个：
* 主模块：管理 nginx 基本功能的模块
* 事件模块：管理 nginx 处理连接请求的模块
* HTTP 模块：管理 nginx 处理 http 请求的模块

### 主模块
```text
user  nginx;  # 用户
worker_processes  auto;  # 工作进程，可以指定具体数字
worker_cpu_affinity  none;  # 用于绑定 worker 进程与 cpu
error_log  /var/log/nginx/error.log notice;  # 指定日志和错误级别，包含：debug、info、notice、warn、error、crit
pid  /var/run/nginx.pid;
```

### 事件模块


### HTTP 模块


## nginx 常见部署



<br/>

:::info 👇👇👇
**本文作者:** Czasg     
**版权声明:** 转载请注明出处哦~👮‍    
:::