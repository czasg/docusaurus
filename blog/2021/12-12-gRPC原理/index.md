---
title: gRPC 原理及使用
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

## protocol buffers
`protocol buffers` 是一种序列化机制，类似 JSON，只是它更小更快，并且与生成的本地代码绑定。

在学习 `protocol buffers` 之前，必须要先学习并了解 proto 的相关规范。

### 定义 message
所谓消息类型，即 message 类型。
```proto
syntax = "proto3";

message ConstantRequest {
  string one = 1;
  int32 two = 2;
  float three = 3;
}
```
在上面代码中可以看到：
* 文件第一行指定 `proto3` 语法，没有则默认使用 `proto2`语法。
* 文件后面定义了一个 `ConstantRequest` 的消息，该消息指定了三个字段，每个字段包括：类型、名称、值，这三个字段都是**标量字段**（int、float、bool等）。

在定义字段模块，我们可以看到一些很特殊的地方，就是这些数字编号（1、2、3）。      
在 proto 的一个消息中，每一个字段都应该被**分配一个唯一的编号**，这些编号，用于在二进制消息中标识并区分对应字段，可以理解为编码关键字。
者对于那些有着很长字段的消息来说，是减小体积的一种方式。

所以字段编号在proto中很重要，1-15 编码占据一个字节，这15个字段应该尽可能的分配给出现较频繁的消息元素。    
除此之外，一旦涉及到字段编码的变更，需要尤其小心，不然会引起意想不到的坑，包括数据损坏、隐私错误等。   

一般尽可能的避免变更字段编码，如果真的需要变更，可以采用 `reserved` 关键字来处理。
```go
message Foo {
  reserved 2, 15, 9 to 11;
  reserved "foo", "bar";
}
```

### 定义 service
```go
syntax = "proto3";

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

服务类型即 `service` 类型。同时，gRPC 允许你定义四类服务方法：

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

### 定义 enum
在定义消息时，有时希望某字段，是属于预定义值之一。这时枚举字段可以起到很好的作用。
```go {2,6}
message SearchRequest {
  enum Corpus {
    UNIVERSAL = 0;
    WEB = 1;
    LOCAL = 2;
  }
  Corpus corpus = 1;
}
```

### 定义嵌套类型
字段类型可以是其他消息类型。
```go {2}
message SearchResponse {
  repeated Result results = 1;
}

message Result {
  string url = 1;
  string title = 2;
  repeated string snippets = 3;
}
```

### 定义 repeated
在此处 `repeated` 字段表示此处接收一个数组类型。
```go {2}
message SearchResponse {
  repeated Result results = 1;
}

message Result {
  string url = 1;
  string title = 2;
  repeated string snippets = 3;
}
```

### 定义 any
任意类型比较特殊，需要导入其他包：`google/protobuf/any.proto`。
```go {1，5}
import "google/protobuf/any.proto";

message ErrorStatus {
  string message = 1;
  repeated google.protobuf.Any details = 2;
}
```

### 定义 oneof
当存在包含多个字段的消息，并且最多同时设置其中某一个字段时，可以使用 oneof 节省内存。
```go {2}
message SampleMessage {
  oneof test_oneof {
    string name = 4;
    string sub_message = 9;
  }
}
```

### 定义 map
```go {2}
message SampleMessage {
  map<string, Project> projects = 3;
}

message Project {
  string message = 1;
}
```

### 定义 package
```go
option go_package = "pb";
```

## 生成代码
```shell script
protoc --proto_path=IMPORT_PATH --python_out=DST_DIR --go_out=DST_DIR file.proto
```
* IMPORT_PATH指定.proto解析import指令时在其中查找文件的目录。如果省略，则使用当前目录。
* --proto_path：多次传递该选项可以指定多个导入目录。他们将被按顺序搜索。
    * `-I=IMPORT_PATH` 是 `--proto_path` 的简写形式。
    * IMPORT_PATH 是指定.proto解析import指令时在其中查找文件的目录。
* --go_out：生成 Go 代码DST_DIR。
* --python_out：生成 Python 代码DST_DIR。
* file.proto：必须提供一个或多个.proto文件作为输入。.proto可以一次指定多个文件。尽管文件是相对于当前目录命名的，但每个文件必须位于其中一个IMPORT_PATHs 中，以便编译器可以确定其规范名称。

<br/>

:::info 👇👇👇
**本文作者:** Czasg
**版权声明:** 转载请注明出处哦~👮‍
:::
