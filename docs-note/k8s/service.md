# Service

Service 定义了一种抽象：一个 Pod 的逻辑分组，一种可以访问它们的策略。

主要功能：
* 服务实例间的负载均衡。
* 不同服务之间的服务发现。

## 负载均衡

## 服务发现
k8s 支持两种服务发现：环境变量 & DNS

* ClusterIP
* NodePort
* LoadBalance
* ExternalName


我们总结下 Service 访问方式：
* DNS
* NodePort
* LoadBalance
* externalIPs

## 特殊 Service
### No Selector Service

### Headless Service
`Service` 能力包括服务发现和负载均衡，有时我们通过类似 `gRPC` 的方式，并不直接需要负载均衡的能力，而仅需要提供 DNS 暴露服务的能力。

此时，我们可以通过将 `spec.ClusterIP` 的值配置为 `None` 来创建 `Headless Service`，
这类服务并不会分配IP，k8s也不会为其提供负载均衡能力，此时的 `Service` 仅仅提供DNS暴露目标 `PodIP` 的能力。

## 代理模式

### userspace 代理模式
![](./static/service/services-userspace-overview.jpg)

### iptables 代理模式
![](./static/service/services-iptables-overview.jpg)

### ipvs 代理模式
![](./static/service/services-ipvs-overview.png)
