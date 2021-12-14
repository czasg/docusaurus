---
title: Controller
---

# Controller

控制器相当于状态机，主要用于控制和管理 `Pod` 的具体状态。

常用的状态机有：
* Deployment
* StatefulSet
* DaemonSet
* ReplicaSet & ReplicationController
* Job
* CronJob
* Horizontal Pod Autoscaling

## Deployment
Deployment 为 Pod 和 ReplicaSet 提供了一个声明式的方法，用来替代以前的 ReplicationController 来管理 Pod 应用。

一个正常的创建流程：首先创建 Deployment，再由 Deployment 创建 ReplicaSet，然后由 ReplicaSet 创建 Pod。

主要使用场景有：
* 定义 Deployment 来创建 ReplicaSet 和 Pod
* 滚动升级和历史回滚
* 扩容和缩容

## StatefulSet
一般来说，Deployment 和 ReplicaSet 是为了无状态服务而设计。而 StatefulSet 是为了解决有状态服务问题。

## DaemonSet
Daemon 我们称之为守护进程。在 k8s 的概念中，DaemonSet 表示一个集群节点中仅运行一个 Pod 应用。

## ReplicaSet & ReplicationController
ReplicationController 用于确保容器应用的副本数量，始终维持在用户定义的副本数量。
也就是当容器应用的副本数量不足时，会创建新的副本，对应的，当容器应用副本数多余用户定义副本数，多出的副本也会被回收。
特别是当已经符合用户定义副本数的容器应用中，因为某些原因异常退出时，也会自动创建新的副本来替代。

在新版本的 k8s 中推荐使用 ReplicaSet 代替 ReplicationController，他们本质上时一样的，只是 ReplicaSet 支持集合式的 selector。

ReplicaSet 和 ReplicationController 都可以独立使用，但是一般还是推荐使用 Deployment 来自动管理 ReplicaSet。
因为一些特殊能力，如滚动升级、历史回滚等功能，Deployment 直接支持使用且不用担心兼容问题。

## Job
Job 常用于批处理任务，即仅执行一次的任务。

## CronJob
CronJob 是定时调度器，用于定时生成 Job 批处理任务。

## Horizontal Pod Autoscaling
Pod 水平自动缩放。以 Deployment 控制器为例，虽然 Deployment 可以实现扩缩容、滚动升级等能力，但是需要运维介入，无法实现自动扩缩容。

而 Horizontal Pod Autoscaling（HPA）则实现了这个能力，可以根据自定义指标实现自动扩缩容。常用的监控指标是 cpu 和 memory 的利用率。
