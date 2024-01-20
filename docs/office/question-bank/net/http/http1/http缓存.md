---
title: HTTP缓存
---

### 什么是HTTP缓存

HTTP缓存是一种性能优化技术。

因为一次完整的HTTP请求涉及到TCP连接建立、请求响应报文的处理。因此对服务端可能造成一定的资源压力。

因此对于一些允许缓存的资源，比如静态资源等，就可以进行缓存，以便减少服务端压力，并提速。


### HTTP缓存机制

HTTP缓存主要有：强制缓存和协商缓存

#### 强制缓存

即当缓存没有过期的时候，会强制使用缓存。

举个例子，对于浏览器来说，我们打开F12开发者工具。
如果我们能看到一个请求标识有`from disk cache`，那么就表示这次请求使用了强制缓存。

#### 协商缓存

缓存相关通常有两个关键header，一般Cache-Control优先级高于Expires
- Cache-Control：缓存控制
- Expires：过期时间

协商缓存有两种方式：
- 协商ETag是否修改
- 协商Last-Modified是否修改

其中，发起请求中分别用以下两种header表示：
- If-None-Match：ETag
- If-Modified-Since：Last-Modified


