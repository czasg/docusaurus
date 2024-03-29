---
title: gRPC 负载均衡
authors: [czasg]
tags: [grpc]
---

<!-- 参考自 https://www.lixueduan.com/post/grpc/13-loadbalance-on-k8s/ -->

本文主要介绍在 k8s 环境下 gRPC 服务在实现负载均衡时遇到的问题和解决思路。

<!--truncate-->

## 概述
我们的 gRPC 应用最初使用 `DaemonSet` 类型的资源对象部署在 k8s 上。通过标签配置，使得单台 Node 节点仅部署一个 pod 应用。
而 gRPC 应用则通过 `NodePort Service` 的方式对外暴露服务。

在这种场景下直接对外暴露固定 IP 提供服务，业务流量全部打到单台宿主机上，所以也不存在负载均衡的说法。

随着业务压力逐渐增大，单点提供的能力已逐渐达到极限，我们采用水平拓展的方式，部署了多台单节点服务。也算暂时抗住了压力。但随后的暴露的问题，也让我们被迫选择了重构。

:::note 为什么选择重构
业务持续拓展，引入多节点的问题也逐渐暴露出来，当前服务架构下，多节点之间的数据一致性完全不能保证，人工运维简直不要太恶心，无奈只能重构。这里我们不针对此展开。  
:::

服务改造升级完毕后，完全兼容历史 gRPC 接口，在 k8s 的配置上也有部分改动，以前的 `DaemontSet` 资源变更为 `Deployment` 资源，而 `NodePort Service` 资源则变更为 `ClusterIP Service` 资源。   
项目正式进入到了提测阶段。

功能上基本没有太大的问题，毕竟引用了相同的 gRPC 接口文件。

问题主要出现在了负载均衡上，在多副本的场景下，发生了严重的流量倾斜，具体表现就是某个副本的压力非常高，而其他副本的压力很小，进而导致服务整体异常。

:::tip 简单分析
gRPC 是基于 HTTP2.0 实现的长连接，且默认没有超时，这种长连接能够大量减少 TCP 连接管理所带来的开销，但也破坏了标准的连接级的负载均衡。因为连接已经建立且不断开，所以也无法再进一步负载均衡了。  

那么再回到上述场景，显然就是客户端与某个具体的服务建立了长连接，而连接又不会断开，从而导致了持续的流量倾斜问题。
:::

选择有效的 gRPC 负载均衡方案，是解决我们当前问题的核心。

具体解决的方法有多种，我们主要将其分为：  
* 用户侧的负载均衡
* 服务侧的负载均衡

## gRPC 负载均衡 - 用户侧
用户侧的 gRPC 负载均衡，是通过 DNS，使用户解析出全部的 gRPC 服务地址，然后用户自己实现负载策略。
最简单的策略就是与每个服务建立 gRPC 连接，然后轮询访问，实现 rr 负载。

![](client-load-balancer.png)

该方案实施起来比较容易，但对于用户侧有一定的要求。如：

* 安全方面，要考虑用户的可靠性。
* 更新策略，解析 DNS 虽有现成的方案，但是常规方案一般无法探知到后续新创建的服务，所以需要设计更新策略。

## gRPC 负载均衡 - 服务侧
服务侧的 gRPC 负载均衡，需要引入一个负载均衡代理，我们称之为 `Load Balancer`，
用户向 LB 发起 RPC 请求，然后由该 LB 将 RPC 分配到一个可用的后端服务器上，
由该服务器提供 gRPC 服务，并将负载情况报告给 LB，进一步补全 LB 的负载信息。
![](server-load-balancer.png)

在该方案中，负载均衡由 LB 统一管理，有一定的实施难度。  
除非能找到高 star 的开源项目，不然开发与运维就是一笔不小的投入。

## 方案选择
考虑到实施难度，我们选择了用户侧的负载均衡方式。

**首先要解决 DNS 的解析与负载**，这一块，官方已经封装了 gRPC SDK，用户可以通过简单升级 SDK 即可实现该功能。

**其次就是服务发现这一块了**。解决的方案也有两种：  
1、服务端实现：MaxConnectionAge。定期断开连接，从而触发客户端重解析。  
2、客户端实现：KubeResolver。客户端接入 k8s api 从而实现服务发现。   


:::note MaxConnectionAge
MaxConnectionAge 是 gRPC 服务端的参数，用于指定长连接最大保持时间。  
配置该参数会使得长连接变成“短”连接，故性能会有一定的降低。

该方案的原理是，通过定期释放连接，使得客户端重新解析 DNS 获取最新的服务地址。
:::


:::note KubeResolver
该方案的原理是通过监听 k8s 的 api 资源状态，实时获取 gRPC 服务资源信息，从而实现检测更新。
:::

综合考虑后，最终选择了 MaxConnectionAge 方案，因为此方案仅仅通过适配参数就可以完成预期功能，虽然略显僵硬，但实际上效果还不错。

<br/>

:::info 👇👇👇
**本文作者:** Czasg         
**版权声明:** 转载请注明出处哦~👮‍    
:::
