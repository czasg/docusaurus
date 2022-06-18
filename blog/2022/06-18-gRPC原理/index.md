---
title: gRPC原理
authors: [czasg]
tags: [gRPC]
---

RPC 是 `Remote Procedure Call` 的缩写，即**远程过程调用**。    
一般 RPC 框架会屏蔽底层的序列化方式和传输方式，让服务调用者可以像调用本地接口一样调用远程的服务。

业界主流的 RPC 框架主要有：   
1、Google 的 gRPC，基于 HTTP2 实现，是支持多语言的 RPC 框架。     
2、阿里的 Dubbo，底层由 RPC 实现，是可以用于实现微服务治理的分布式服务框架。   

本文主要学习 gRPC 的相关原理。  

<!--truncate-->

## gRPC 特点
说到 gRPC 有什么特点，我们第一反应就是：Google 出品，必属精品~😃   

除此之外，gRPC 还是一个**基于HTTP2的、支持多语言的、高性能的、面向服务端和移动端**的RPC框架。

## gRPC与高性能


<br/>

:::info 👇👇👇
**本文作者:** Czasg
**版权声明:** 转载请注明出处哦~👮‍
:::