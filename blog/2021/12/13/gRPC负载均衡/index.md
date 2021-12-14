---
title: 基于 gRPC 实现负载均衡
authors: [czasg]
tags: [k8s, gRPC, 负载均衡]
---

<!-- 参考自 https://www.lixueduan.com/post/grpc/13-loadbalance-on-k8s/ -->

本文主要介绍在 k8s 环境下 gRPC 负载均衡的具体实现。

<!--truncate-->

## 概述
我们的服务最初使用 `DaemonSet` 部署在 k8s 上，即单台宿主机仅运行一个 `Pod`，然后通过 `NodePort Service` 的方式对外暴露服务。

在这种场景下直接对外暴露 IP 提供服务，所以也不存在负载均衡的说法。

现在服务改造升级，以前的 `DaemontSet` 类型升级为 `Deployment` 类型，而 `NodePort Service` 类型则升级为 `ClusterIP Service` 类型。

单副本的场景基本没有任何区别，但是在多副本的场景下，却发生了流量倾斜，具体表现就是某个副本的压力非常高，而其他副本的压力很小，进而导致服务整体异常。

> 简单分析:  
>
> gRPC 是基于 HTTP2.0 实现的长连接，且默认没有超时，那么再回到上述场景，显然就是客户端与某个具体的副本建立了长连接  
> 而连接又不会断开，导致了请求流量倾斜的问题。

经过分析，我们也可以大致了解了问题，长连接基于TCP建立连接后，不会断开。
所以常规的基于七层的负载均衡方法，无法为长连接提供有效负载。

具体解决的方法有多种，我们将其分为：  
* 用户侧的负载均衡
* 服务侧的负载均衡

## gRPC 负载均衡 - 用户侧
### Headless Service
k8s 的 `Service` 是一个
`ClusterIP Service`

### KubeResolver

## gRPC 负载均衡 - 服务侧

### 长连接转短连接

### 中间件


