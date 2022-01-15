---
title: nginx 配置说明
authors: [czasg]
tags: [nginx]
---

记录一下 nginx 常见配置说明和部署模板（docker、k8s）。

<!--truncate-->

nginx 是一个高性能的 web 服务器，同时也能提供负载均衡和反向代理服务。

## nginx 常用指令
* -c：用于指定一个配置文件
* -t：用于测试配置是否可用
* -s：用于发送信号，包括：stop, quit, reopen, reload。eg：`nginx -s reload`

```shell script title="指定并测试配置文件是否正确"
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
pid  /var/run/nginx.pid;  # 进程ID
worker_processes  auto;  # 工作进程，可以指定具体数字
error_log  /var/log/nginx/error.log notice;  # 指定日志和错误级别，包含：debug、info、notice、warn、error、crit

worker_cpu_affinity  none;  # 用于绑定 worker 进程与 cpu
```

### 事件模块
```text
events {
    worker_connections  1024;  # 每个工作进程最大链接数。乘以 worker_processes 就是该 nginx 服务的最大连接数
}
```

### HTTP 模块
#### location 路由匹配规则及顺序  
* `=`: 精确匹配
* `^~`: 优先前缀匹配
* `~`: 正则匹配，区分大小写
* `~*`: 正则匹配，不区分大小写
* `!~`: 正则匹配，区分大小写
* `!~*`: 正则匹配，不区分大小写
* `/route`: 普通前缀匹配
* `/`: 通用匹配

> 精确匹配 > 优先前缀匹配 > 正则匹配 > 普通前缀匹配 > 通用匹配

```text
http {
    server {
        # 优先匹配依次往下
        location = /route { return 200; }
        location ^~ /route { return 201; }
        location ~ ^/route { return 202; }
        location /route { return 203; }
        location / { return 204; }
    }
}
```

#### upstream 负载均衡策略  
* 轮询：在每个服务之间轮询请求
* weight：按指定权重比例在服务之间请求，默认 weight 为 1
* ip_hash：按照请求 IP 计算 Hash，保证每次请求都访问同一个服务
* fair：按照后端的响应时间来分配（三方插件实现）
```text
http {
    # 负载均衡
    upstream serverName {
        # ip_hash;  # 指定 ip_hash 负载均衡策略
        server 10.251.10.10:8080 weight=2;  # 指定权重比例
        server 10.251.10.10:8081 down;  # down 表示服务下线
        server 10.251.10.10:8082;
        server 10.251.10.10:8083 backup;  # backup 表示备用，当其他机器 down 或者压力比较大时，流量会走到此服务
        # fair;  # 指定 fair 负载均衡策略
    }

    server {
        listen  80;  # 监听端口
        server_name  _;  # 不启用域名检测

        location / {
            proxy_pass  http://serverName;  # 指定 upstream 名字即可
        }
    }
}
```

#### http 客户端与服务端参数配置
```text
http {
    server {
        client_body_timeout  60s;  # 定义读取客户端请求体的超时
        client_body_buffer_size  8k;  # 设置读取客户端请求体的缓冲区大小（超过则存储到临时文件中）
        client_header_timeout  60s;  # 定义读取客户端请求头的超时
        client_header_buffer_size  1k;  # 设置读取客户端请求头的缓冲区大小
        client_max_body_size  0;  # 数据最大传输限制
        proxy_request_buffering off;  # 默认开启，作用是缓冲请求。关闭后请求会立即转发到后端服务
        proxy_buffering off;  # 对代理服务器的响应内容缓冲
        proxy_buffer_size  4k;  # 从代理服务器获取部分响应后进行缓冲
        proxy_buffers  8 4k;  # 从被代理的后端服务器取得的响应内容，会缓冲到这里
        proxy_connect_timeout  60s;  # 与后端服务建立连接的超时时间
        proxy_send_timeout  60s;  # 向后端传输请求的超时时间
        proxy_read_timeout  60s;  # 从后端读取响应的超时时间

        proxy_set_header  Host $proxy_host;

        location / {
            proxy_set_header  Auth "auth-key";
            proxy_pass  http://serverName;
        }
    }
}
```

```text
http {
    server {
        location /alias/ {
            alias  /a/new/route/;  # 请求路径 /alias/files 等效于 /a/new/route/files，会替换掉匹配路由
        }
        location /root {
            root  /a/new/route/;  # 请求路径 /root/files 等效于 /a/new/route/root/files，会保留匹配路由
        }
        location / {
            rewrite  http://serverName;
        }
    }
}
```

#### mirror
```text
http {
    server {
        location /mirror {
            mirror  /internal;  # mirror 实现流量拷贝
            proxy_pass  http://serverName;
        }

        location /internal {
            internal;  # 表示仅被内部请求发现
            proxy_pass  http://serverName;  # 指定 upstream 名字即可
        }

        location /autoindex {
            autoindex  on;  # 自动生成目录列表
        }
    }
}
```

## nginx 常见部署



<br/>

:::info 👇👇👇
**本文作者:** Czasg     
**版权声明:** 转载请注明出处哦~👮‍    
:::