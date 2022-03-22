---
title: 记一次关于 httpClient 的坑点
authors: [czasg]
tags: [golang]
---

<!--truncate-->

## 坑点：DefaultClient 无超时
go 默认的 httpClient 不包含超时时间，不像其他语言可能会有默认的超时时间。   
一般尽量少用默认的 http.DefaultClient，未每一个请求加上默认超时时间。
```golang title="配置超时时间"
client := &http.Client{
    Timeout: time.Second * 10,
}
```

## 坑点：DefaultClient 长连接受限
```go
var DefaultTransport RoundTripper = &Transport{
	Proxy: ProxyFromEnvironment,
	DialContext: (&net.Dialer{
		Timeout:   30 * time.Second,
		KeepAlive: 30 * time.Second,
	}).DialContext,
	ForceAttemptHTTP2:     true,
	MaxIdleConns:          100,
	IdleConnTimeout:       90 * time.Second,
	TLSHandshakeTimeout:   10 * time.Second,
	ExpectContinueTimeout: 1 * time.Second,
}

// DefaultMaxIdleConnsPerHost is the default value of Transport's
// MaxIdleConnsPerHost.
const DefaultMaxIdleConnsPerHost = 2
```
#### DefaultMaxIdleConnsPerHost
DefaultMaxIdleConnsPerHost 表示客户端对每个主机服务保留的最大空闲连接数。  

在这里可以看到，http.DefaultClient 配置有 DefaultMaxIdleConnsPerHost，值为 2。   
表示客户端对每个主机服务保留的最大空闲连接数为 2，所以当我们有较多长连接场景时，http.DefaultClient 可能会干掉其他长连接，仅保留两个。

#### KeepAlive
KeepAlive 表示长连接存活时间。  

此处默认为 30s，在某些压力测试场景下可能会导致 socket 连接被耗尽。
```go title="配置存活时间 24h 案例"
client := &http.Client{
    Transport: &http.Transport{
        DialContext: (&net.Dialer{
            KeepAlive: time.Hour * 24,
        }).DialContext,
    },
}
```
