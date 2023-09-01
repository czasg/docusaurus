---
title: 初步了解 k8s 资源配额
authors: [czasg]
tags: [k8s]
---

<!--
https://www.freesion.com/article/3935476617/
https://kubernetes.io/zh/docs/concepts/policy/resource-quotas/
https://kubernetes.io/zh/docs/tasks/administer-cluster/manage-resources/quota-memory-cpu-namespace/
-->

用一台服务器同时跑多个任务时，最常发生的事故就是资源抢占问题。比如端口、cpu、内存、存储等都可能会发生冲突。   
而 k8s 作为容器编排工具，则提供了资源配额来避免这类问题。

<!--truncate-->

## 资源配额 ResourceQuota
资源配额用于声明命名空间中所有 pod 的最终资源情况，一旦命名空间中启用了 ResourceQuota，则部署 pod 时必须设定请求值（request）和约束值（limit），否则配额系统将拒绝 pod 的创建。  
资源配额在 k8s 集群中默认是支持的，当一个命名空间中存在一个 ResourceQuota 对象时，该命名空间的资源配额就是开启的。   
```yaml title="资源配额：ResourceQuota.yaml"
apiVersion: v1
kind: ResourceQuota
metadata:
  name: demo
spec:
  hard:
    requests.cpu: "1"
    requests.memory: 1Gi
    limits.cpu: "2"
    limits.memory: 2Gi
```
此配置表示： 
* 每个容器必须有 memory、cpu 的请求和限制。
* 所有容器的 memory 请求总和不能超过 1 GiB。
* 所有容器的 memory 限制总和不能超过 2 GiB。
* 所有容器的 cpu 请求总和不能超过 1 cpu。
* 所有容器的 cpu 限制总和不能超过 2 cpu。

```yaml title="部署示例：pod.yaml"
apiVersion: v1
kind: Pod
metadata:
  name: demo
spec:
  containers:
  - name: nginx
    image: nginx
    resources:
      limits:
        cpu: "200m"
        memory: "400Mi"
      requests:
        cpu: "100m"
        memory: "200Mi"
```

## requests/limits
requests 表示请求值，而 limits 则表示约束值。    
一般情况下 requests 是小于 limits 的，这里涉及到服务质量等级概念：

|服务质量等级|说明|
|---|---|
|Guaranteed（完全可靠的）| pod 中全部容器配置了资源配额，且 requests == limits，或者只设置了 limits，此时默认 requests 等于 limits。|
|Burstable（弹性波动、较可靠的）| pod 中部分容器配置了 requests 和 limits。|
|BestEffort（尽力而为、不太可靠的）| pod 中容器未配置 requests 和 limits。|

当我们配置了 requests 请求值，那么部署时，目标节点需要拥有多余该请求值的空闲资源，才可以部署此服务。如果没有符合条件的节点，那么该服务将无法部署。    
当我们未配置 limits 约束值时，limits 默认就是当前节点的资源上限。   

## 常使用的配额类型
资源配额的种类有很多，最常使用的配额主要有三类：
* cpu：中央处理器
* memory：内存
* ephemeral-storage：存储

大部分资源类型都可以通过标准的模板进行配额设置，如：  
* `count/<resource>.<group>`：用于非核心 core 组的资源
* `count/<resource>`：用于核心组的资源

|配额|说明|
|---|---|
|count/pods|在该命名空间中允许存在的非终止状态的 pod 总数上限。|
|count/services|在该命名空间中允许存在的 service 总数上限。|
|count/configmaps|在该命名空间中允许存在的 configmaps 总数上限。|


<br/>

:::info 👇👇👇
**本文作者:** Czasg         
**版权声明:** 转载请注明出处哦~👮‍    
:::
