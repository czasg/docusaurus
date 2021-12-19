---
title: Controller
---

# Controller

控制器相当于状态机，主要用于创建和管理 `Pod` 的生命周期。

常用的状态机有：
* Deployment
* StatefulSet
* DaemonSet
* ReplicaSet & ReplicationController
* Job
* CronJob
* Horizontal Pod Autoscaling

## Deployment
Deployment 是无状态集合控制器，它为 Pod 和 ReplicaSet 提供了一个声明式的方法，用来替代以前的 ReplicationController 控制器。

一个正常的工作流程看起来应该像这样：首先创建 Deployment，再由 Deployment 创建 ReplicaSet，然后由 ReplicaSet 创建 Pod。

ReplicaSet 和 ReplicationController 也是控制器，但是更推荐使用 Deployment 来创建和管理应用。

也就是通过 Deployment 维护 ReplicaSet，ReplicaSet 维护 Pod 的这种方式，可以兼容的拓展许多其他的能力，主要包括：
* 滚动升级
* 回滚
* 扩容和缩容

## StatefulSet
StatefulSet 是有状态集合控制器。

## DaemonSet
DaemonSet 是守护进程控制器。它为集群声明一个守护进程的概念，即每个集群节点上，有且理应仅有一个 Pod。

可以保证集群中每一个节点都运行一个副本，常用于日志收集，节点监控等场景。

如果功能是节点级，有且仅能有一个

特点就是当集群新增一个节点时，会自动创建Pod
当节点移除时，会回收Pod

## ReplicaSet & ReplicationController
ReplicationController 用于确保容器应用的副本数量，始终维持在用户定义的副本数量。
也就是当容器应用的副本数量不足时，会创建新的副本，对应的，当容器应用副本数多出用户定义的副本数，多出的副本也会被回收。
特别是当已经稳定的容器应用中，因为某些原因异常退出时，也会自动创建新的副本来替代。

在新版本的 k8s 中推荐使用 ReplicaSet 代替 ReplicationController，他们本质上时一样的，只是 ReplicaSet 支持集合式的 selector。

ReplicaSet 和 ReplicationController 都可以独立使用，但是一般还是推荐使用 Deployment 来自动管理 ReplicaSet。

## Job
Job 常用于批处理任务，即仅执行一次的任务。

## CronJob
CronJob 是定时调度器，用于定时生成 Job 批处理任务。

## Horizontal Pod Autoscaling
HPA 是副本水平自动缩放。

以 Deployment 控制器为例，虽然 Deployment 可以实现扩缩容、滚动升级等能力，但是需要运维介入，无法实现自动扩缩容。

而 Horizontal Pod Autoscaling（HPA）则实现了这个能力，可以根据自定义指标实现自动扩缩容。常用的监控指标是 cpu 和 memory 的利用率。
