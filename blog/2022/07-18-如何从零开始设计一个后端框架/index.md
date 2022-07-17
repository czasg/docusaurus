---
title: 如何从零开始设计一个后端框架
authors: [czasg]
tags: [python]
---

<!--truncate-->

## web探秘
我们常说的web服务，通常是指的HTTP WEB服务。

在不了解web服务之前，我一直很好奇一件事情。     
我在浏览器里输入一个地址，他会返回一些内容给我。
我一直困惑于他实现的原理是什么？我是不是也可以自己搭建一个这样的服务？以前梦想就是想自己搭建一个web服务。

如果你学过python，那你一定用过requests库，我们用它来发起一次HTTP请求
```python
import requests  # pip install requests

resp = requests.get("http://www.baidu.com")
print(resp.text)
```

这是一段非常简单的代码，但不知道你们有没有想过，它最底层是怎么实现的，为什么这么简单的几行代码，就可以发起一次HTTP请求。
```python
import socket

sock = socket.socket()
sock.connect(("www.baidu.com", 80))  # 建立TCP连接

sock.sendall("GET / HTTP/1.1\r\n\r\n".encode())  # 自己构造请求，发送给服务端
print(sock.recv(1024*1024).decode())
```

HTTP请求报文
* 请求行
* 请求头
* 请求体

HTTP响应报文
* 响应行
* 响应头
* 响应体

抛开所有的业务，所有的实现，我们来看一下HTTP的请求，或者说web服务的本质，其实就是我给你一段文本，你给我一段文本。

框架使用多了，特别是一些集成度很高的框架，可能会使我们失去一些基础的能力、判断力。

## 如何实现一个web服务
我们先来看看flask框架如何实现一个web服务
```python
import flask

app = flask.Flask(__name__)
app.route("/hello", methods=["GET"])(lambda: "hello world")
app.run()
```
通过route注册一个路由，然后绑定一个匿名函数，最后启动服务。

这是我们能看到的框架，那么框架帮我们做了什么事情呢？   
首先，第一件事肯定是帮我们解析HTTP请求报文，然后你觉得他们会做什么事情。   
他会去匹配路由，然后执行对应的处理函数。  

接着，我们来看下如何基于socket实现方式。   
基于socket，我们可以非常轻松的实现一个简陋的web服务，这个服务接收任何请求，然后响应`hello world`
```python
import socket

sock = socket.socket()
sock.bind(("localhost", 8080))
sock.listen()

while True:
    s, addr = sock.accept()
    print(s.recv(1024*1024).decode())
    s.sendall("HTTP/1.1 200 ok\r\nContent-Length: 11\r\n\r\nhello world".encode())
    s.close()
```

## 如何实现一个web框架
框架的目的，是为了减少重复性工作。那么我们实现这个框架的目的，就是为了不在自己解析HTTP请求和构造HTTP响应。


<br/>

:::info 👇👇👇
**本文作者:** Czasg
**版权声明:** 转载请注明出处哦~👮‍
:::