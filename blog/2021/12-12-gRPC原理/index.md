---
title: gRPC 原理及使用
authors: [czasg]
tags: [gRPC]
---

<!-- 
https://doc.oschina.net/grpc?t=58008
https://developers.google.com/protocol-buffers/docs/proto3
-->

gRPC 是一个高性能、跨平台的开源 RPC 框架。

由 Google 开源，支持多种编程语言。它使用 Protocol Buffers 作为接口定义语言，可以生成客户端和服务端的代码，
使得跨语言、跨平台的服务调用变得更加简单和高效。

<!--truncate-->

gRPC 是一个**基于HTTP2、支持`protocol buffers`序列化机制、支持多语言的、高性能的、面向服务端和移动端**的高级RPC框架。

## 在 Go 中使用 gRPC

### 1、安装 gRPC 库
```shell script
go get -u google.golang.org/grpc
```

### 2、定义 protobuf 文件
gRPC 使用 protobuf 来定义服务和消息的格式，因此需要先定义protobuf文件。
可以使用 protobuf3 语法，定义服务的方法和请求/响应消息的结构。
```shell script
syntax = "proto3";

package greeter;

service Greeter {
  rpc SayHello (HelloRequest) returns (HelloReply) {}
}

message HelloRequest {
  string name = 1;
}

message HelloReply {
  string message = 1;
}
```

### 3、生成代码
基于上述 protobuf 文件生成Go代码，可以使用 protoc 和 protoc-gen-go 插件来生成。

安装protoc和protoc-gen-go：
```shell script
# 安装protoc
brew install protobuf

# 安装protoc-gen-go
go get -u github.com/golang/protobuf/protoc-gen-go
```

生成Go代码：
```shell script
protoc --go_out=plugins=grpc:. *.proto
```

### 4、启动服务
实现定义的服务接口，实现具体的服务逻辑。

例如，实现SayHello方法：
```go
type server struct{}

func (s *server) SayHello(ctx context.Context, req *greeter.HelloRequest) (*greeter.HelloReply, error) {
    message := fmt.Sprintf("Hello, %s!", req.Name)
    return &greeter.HelloReply{Message: message}, nil
}
```

接着使用gRPC库提供的方法，启动服务并监听端口。
```go
s := grpc.NewServer()
greeter.RegisterGreeterServer(s, &server{})
if err := s.Serve(lis); err != nil {
    log.Fatalf("failed to serve: %v", err)
}
```

### 5、客户端调用
使用gRPC提供的客户端代码，调用定义的服务。

例如，调用SayHello方法：
```go
conn, err := grpc.Dial("localhost:50051", grpc.WithInsecure())
if err != nil {
    log.Fatalf("did not connect: %v", err)
}
defer conn.Close()

c := greeter.NewGreeterClient(conn)
resp, err := c.SayHello(context.Background(), &greeter.HelloRequest{Name: "world"})
if err != nil {
    log.Fatalf("could not greet: %v", err)
}
log.Printf("Greeting: %s", resp.Message)
```

## Protocol Buffers
Protocol Buffers (protobuf) 是一种高效、灵活、跨平台的序列化机制。   
它能够将结构化数据序列化成紧凑的二进制格式，以便在不同应用程序之间进行数据交换和存储。

其设计原理主要有：
- 二进制编码：protobuf 使用二进制编码，而不是文本编码，可以大大减小序列化后数据的大小。相比于 JSON 或 XML 等文本格式，protobuf 可以将数据压缩至原来的 1/3 到 1/10。
- 代码生成：protobuf 可以根据定义在 .proto 文件中的消息结构，自动生成对应的编解码代码，从而提高编解码的效率。生成的代码通常是直接使用底层的二进制序列化和反序列化函数，而不需要额外的解析或转换。
- 紧凑的消息格式：protobuf 的消息格式非常紧凑，消息中的每个字段都有一个固定的编码方式，编码后的数据长度非常短。同时，protobuf 中的消息格式是二进制的，每个字段的类型和长度都是固定的，所以在解码时，可以直接从二进制数据中读取每个字段的值，而不需要进行类型检查和解析。
- 可扩展的消息格式：protobuf 支持向后和向前兼容的消息格式，并支持在不破坏现有消息的前提下，向现有消息添加新的字段或删除旧的字段。这使得应用程序可以逐步升级其消息格式，而无需重写和重新编译现有的代码。

这些设计原则使得 protobuf 具有非常快的编解码速度和高效的数据压缩率，因为它们充分利用了底层的二进制编码和紧凑的消息格式。
相比于 JSON 或 XML 等文本格式，protobuf 在序列化和反序列化时的效率通常要高出数倍甚至数十倍，

## proto file

接下来主要介绍下一个完整 proto 文件的组成：

### 1、语法指令
使用 syntax 关键字指定 protobuf 使用的语法版本，目前最新版本为 proto3。
```shell script
syntax = "proto3";
```

### 2、package
使用 package 关键字指定 protobuf 文件所属的包名。
```shell script
package example;
```

### 3、message
使用 message 关键字定义一个消息类型，包含一组字段定义，每个字段由类型和字段名称组成。
1字段名称和字段类型之间用等号 = 分隔，字段编号和字段名称之间用空格分隔，每个字段定义结束后需要以分号 ; 结尾。
```shell script
message Person {
  string name = 1;
  int32 age = 2;
  repeated string email = 3;
}
```
其中，string、int32 等为 protobuf 内置类型，还可以自定义类型。

### 4、字段规则

#### optional 规则
使用可选规则的字段可以有零个或一个值。如果不设置该字段，它将不会在序列化后的数据中出现。
如果你的应用程序接收到一个缺少可选字段的消息，它可以使用默认值来代替缺失的数据。
```shell script
message OptionalExample {
  optional int32 id = 1;
}
```

#### required 规则
使用必选规则的字段必须设置一个值，否则序列化时将报错。
```shell script
message RequiredExample {
  required string name = 1;
}
```

#### repeated 规则
使用重复规则的字段可以有零个或多个值，序列化后会生成一个列表。
```shell script
message RepeatedExample {
  repeated string tags = 1;
}
```

### 5、字段类型
protobuf 内置类型包括：double、float、int32、int64、uint32、uint64、sint32、sint64、fixed32、fixed64、sfixed32、sfixed64、bool、string、bytes。
```shell script
message Example {
  double price = 1;
  int32 quantity = 2;
  string name = 3;
  bytes image = 4;
}
```

### 6、字段编号  
每个字段必须有一个唯一的编号，编号用于在消息中标识每个字段。编号必须是一个正整数。

```shell script
message Person {
  string name = 1;
  int32 age = 2;
  repeated string email = 3;
}
```
在上面的例子中，name 字段的编号是1，age 字段的编号是2，email 字段的编号是3。

字段编号的作用是在消息编码和解码时，用于标识每个字段的位置和类型。  
在消息编码时，每个字段都被分配一个唯一的标识号，用于在序列化后的二进制数据中标识该字段。  
在消息解码时，根据这些编号可以将二进制数据转换为消息对象，以及从消息对象中提取相应的字段数据。

在.proto文件中，字段编号的分配必须遵循以下规则：

同一个消息类型中，每个字段的编号必须唯一，不能重复。  
字段编号必须是一个正整数，且必须按照从小到大的顺序分配。  
字段编号不能超过2^29-1，因为其它位已经被用于类型和标记。  
需要注意的是，一旦定义了字段编号，就应该避免在.proto文件中对它进行修改，否则可能会导致已经编码的消息与代码不匹配，从而出现严重的错误。


<br/>

:::info 👇👇👇
**本文作者:** Czasg    
**版权声明:** 转载请注明出处哦~👮‍
:::










