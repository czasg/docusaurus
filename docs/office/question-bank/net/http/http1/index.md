---
title: HTTP1
---

### 什么是HTTP
HTTP是超文本传输协议，这是一种应用层的一些，同时也是互联网应用最广泛的协议之一。 通常我们web服务，都是基于HTTP协议实现的。


### GET和POST区别

GET和POST是HTTP协议中的两种请求方式，它们从规范上来讲有一定区别：

- GET表示从服务器获取资源
- POST表示提供一定的数据并希望服务器做出处理

因此，从这个角度来看，GET是安全且幂等的，而POST可能会修改服务器数据，因此不是安全且幂等的。

### HTTP状态码

- 200 OK
- 201 Created: 表示资源已创建，常用于POST响应中
- 204 No Content
- 206 Partial Content: 表示处理了部分GET请求，常用于支持断点续传
- 301 Moved Permanently
- 302 Found
- 304 Not Modified
- 400 Bad Request
- 401 Unauthorized
- 403 Forbidden
- 404 Not Found
- 500 Internal Server Error
- 501 Not Implemented
- 502 Bad Gateway
- 504 Gateway Timeout

### 获取IP
- RemoteAddress
- X-Forwarded-For
  - X-Forwarded-For: client_c_ip, proxy_a_ip, proxy_b_ip

### HTTP1优缺点

优点：
- 简单：基于文本
- 灵活且易于拓展：可以自定义header
- 跨语言跨平台

缺点：
- 无状态协议
- 安全隐患，明文传输
- 性能不足
  - 建立TCP连接存在性能问题：可以通过长连接解决
  - 请求应答式存在阻塞问题

### 如何优化HTTP1

1. 尽量不发起请求，使用缓存技术
2. 尽量不建立TCP俩姐，使用HTTP长连接技术
3. 尽量减少请求数据，使用gzip压缩
