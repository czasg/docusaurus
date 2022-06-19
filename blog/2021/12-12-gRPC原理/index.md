---
title: gRPC原理及使用
authors: [czasg]
tags: [gRPC]
---

<!-- 
https://doc.oschina.net/grpc?t=58008
https://developers.google.com/protocol-buffers/docs/proto3
-->

RPC 是 `Remote Procedure Call` 的缩写，即**远程过程调用**。    
一般 RPC 框架会屏蔽底层的序列化方式和传输方式，让服务调用者可以像调用本地接口一样调用远程的服务。

业界主流的 RPC 框架主要有：   
1、Google 的 gRPC，基于 HTTP2 实现，是支持多语言的 RPC 框架。     
2、阿里的 Dubbo，底层由 RPC 实现，是可以用于实现微服务治理的分布式服务框架。   

本文主要学习 gRPC 的相关原理及其使用。  

<!--truncate-->

## gRPC 揭秘
说到 gRPC，我们脑海中第一反应可能就是：Google 出品，必属精品~😃   
除此之外，可能还有一些例如 HTTP2、`protocol buffers` 等类似的关键词。

虽然说脑海中有很多关于 gRPC 的描述与特点，但总**感觉说不清 gRPC 到底是什么**。

其实，和其他 RPC 框架一样，gRPC 也有一个理念：       
定义一个服务，指定其能够被远程调用的方法、参数、响应等。
在服务端实现这个接口，并运行一个 gRPC 服务器来处理客户端的调用。
使得客户端能够像本地一样调用远程服务端的方法。

整体来看，gRPC 就是一个 RPC 框架，而且是一个**基于HTTP2、支持`protocol buffers`序列化机制、支持多语言的、高性能的、面向服务端和移动端**的高级RPC框架。

所以我们可以看到 gRPC 的标签非常多。那它区别于常规 RPC 框架的亮点是什么?

如果你用过 gRPC，那你一定接触过 `.proto` 文件，这是 gRPC 的亮点之一，即 `protocol buffers` 机制。    

![](./landing-2.svg)

```go title="/hello.demo.proto"
service HelloService {
  rpc SayHello (HelloRequest) returns (HelloResponse);
}

message HelloRequest {
  required string greeting = 1;
}

message HelloResponse {
  required string reply = 1;
}
```

gRPC 允许你定义四类服务方法：

```go title="单次响应"
rpc SayHello(HelloRequest) returns (HelloResponse){
}
```

```go title="服务端流式 RPC"
rpc LotsOfReplies(HelloRequest) returns (stream HelloResponse){
}
```

```go title="客户端流式 RPC"
rpc LotsOfGreetings(stream HelloRequest) returns (HelloResponse) {
}
```

```go title="双向流式 RPC"
rpc BidiHello(stream HelloRequest) returns (stream HelloResponse){
}
```

## protocol buffers




<br/>

:::info 👇👇👇
**本文作者:** Czasg
**版权声明:** 转载请注明出处哦~👮‍
:::
