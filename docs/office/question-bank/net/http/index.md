---
title: HTTP
---

:::note[什么是http]
:::

HTTP 是超文本传输协议，它拥有简单、易拓展、跨平台等特点，是目前应用最广泛的协议之一，包括移动端、桌面端等。

其中超文本指类似 html、xml 之类的文本内容。我们 HTTP 报文分为请求报文和响应报文。

先介绍下请求报文。

HTTP 请求文本内容由请求报文行、请求报文头、请求数据体三部分组成。

请求报文首行由请求方法、请求路径、协议版本组成。一个常见的报文行如：`GET / HTTP/1.1`。

常见的请求方法有 GET、POST、PUT、DELETE 等。协议目前默认都是1.1。

:::note[GET、POST有什么区别]
:::

:::note[HTTP/1.1相比1.0有什么优势]
:::

请求报文头则类似 KV 结构，一个常见的报文行如：`Content-Type: text/plain`。

我们常说的 HTTP 高可扩展性，主要也是因为报文头的高自由度带来的。

:::note[HTTP如何获取真实IP]
X-Forward-For
:::

:::note[HTTP如何实现缓存]
Expire、Cache-Control    
Etag、If-None-Match  
Last-Modified、If-Modified-Since
:::

:::note[HTTP如何实现长连接与连接断连]
Connection
:::

然后是响应报文。
