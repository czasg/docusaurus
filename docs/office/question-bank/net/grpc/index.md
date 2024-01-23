---
title: gRPC
---

### 什么是gRPC
gRPC是google开源的高性能RPC框架。同时他也是一种支持跨语言、跨平台之间调用的RPC框架。

想比于传统的RPC框架，gRPC是基于HTTP2和protobuf实现的，因此在性能和兼容性上会比较优秀。


### 什么是HTTP2
HTTP2是在HTTP1.1的基础上实现了颠覆性的重构。

传统的HTTP是超文本传输协议。而HTTP2：
- 由文本改用二进制帧传输，因此可以解决阻塞问题，同时支持并发传输
- 头部压缩，关键字改映射，减少头部体积

### 什么是protobuf
protobuf是google开源的高性能序列化和反序列化机制。
它定义了独立于编程语言的数据格式，并支持通过gRPC模板一键自动生成代码。因此在兼容性和跨平台性上有较好的表现。

同时它通过二进制序列化格式和一些关键字映射，可以大幅减少数据传输体积，提升效率。

### 为什么需要gRPC


### 什么是gRPC负载均衡

gRPC是一个长连接，因此gRPC负载均衡本质就是长连接的负载均衡。

不管是长连接还是无状态请求的负载均衡，最常用的策略就是`round_robin`轮询。也就是在长连接中，假设客户端建立了两个长连接，那么轮询策略就是每个长连接各请求一次，从而实现负载均衡。

在这里有一个难点，就是如何实现服务发现和负载均衡。因此gRPC是长连接，连接建立后，正常情况下是不会去重新建立连接的。

因此，在无状态请求中，横向扩容和服务发现是很简单的，只需要更改网关配置结论。但在gRPC长连接中，则需要一些特殊的处理。

最常见的方式就是通过中间件实现

#### 中间件发现
我们可以通过一些类似etcd中间件来实现服务注册与发现。这样，当新的服务器加入或离开时，etcd会通知gRPC客户端更新服务器列表。
```go
package main

import (
	"context"
	"fmt"
	"log"
	"time"

	"google.golang.org/grpc"
	"google.golang.org/grpc/balancer/roundrobin"
	"google.golang.org/grpc/resolver"
	pb "path/to/your/grpc/proto"
	etcdresolver "github.com/grpc-ecosystem/grpc-resolvers/etcd"
)

func main() {
	etcdAddress := "your-etcd-address"
	r := etcdresolver.NewBuilder([]string{etcdAddress})

	resolver.Register(r) // 注册 etcd resolver

	conn, err := grpc.Dial(
		"etcd:///kvdb",
		grpc.WithInsecure(),
		grpc.WithBalancerName(roundrobin.Name), // "round_robin"
	)
	if err != nil {
		log.Fatalf("Failed to dial: %v", err)
	}
	defer conn.Close()
}
```

#### 服务端超时
通过指定服务端最大存活时间，从而触发客户端连接断开重接。这样通过最简单的方式就实现了服务发现和负载均衡。
```go
func main() {
	option := []grpc.ServerOption{
	    grpc.KeepaliveParams(keepalive.ServerParameters{
            MaxConnectionAge: time.Second * 60,
        }),
	}
	gRPCServer := grpc.NewServer(option...)
}
```

### gRPC状态码
在gRPC中，状态码是指在调用远程过程时返回的一个数字，用于表示调用的结果或错误状态。

gRPC状态码按照一定的规范定义，不同的状态码代表不同的意义。以下是一些常见的gRPC状态码及其含义：

- **OK (0):** 表示调用成功完成。
- **CANCELLED (1):** 表示调用因为被调用方取消而失败。
- **UNKNOWN (2):** 表示调用因为未知的错误而失败。
- **INVALID_ARGUMENT (3):** 表示调用因为提供的参数无效而失败。
- **DEADLINE_EXCEEDED (4):** 表示调用因为超过了截止时间而失败。
- **NOT_FOUND (5):** 表示请求的资源未找到。
- **ALREADY_EXISTS (6):** 表示请求的资源已经存在，通常用于创建资源。
- **PERMISSION_DENIED (7):** 表示没有足够的权限执行指定的操作。
- **RESOURCE_EXHAUSTED (8):** 表示资源已经用尽，例如在服务器上的并发连接数超过了限制。
- **FAILED_PRECONDITION (9):** 表示调用的先决条件不满足，通常是由于资源状态不匹配。
- **ABORTED (10):** 表示调用由于并发冲突而中止，例如在事务中。
- **OUT_OF_RANGE (11):** 表示调用的参数超出了有效范围。
- **UNIMPLEMENTED (12):** 表示调用尚未实现。
- **INTERNAL (13):** 表示调用由于内部服务器错误而失败。
- **UNAVAILABLE (14):** 表示服务不可用，通常是由于服务器暂时过载或维护。
- **DATA_LOSS (15):** 表示由于不可恢复的数据丢失或损坏而失败。
- **UNAUTHENTICATED (16):** 表示调用方未经过身份验证，而要求身份验证。

