---
title: Go Http模块坑点
authors: [czasg]
tags: [go]
---
记录原生库 `net/http` 中可能遇到的坑点。

<!--truncate-->

## 默认 HttpClient 未配置超时
默认的 `http.DefaultClient` 不包含请求超时时间。在某些场景会造成程序异常阻塞。

```go title="增加超时时间"
client := &http.Client{
    Timeout: 60 * time.Second,
}
``` 


<br/>

:::info 👇👇👇
**本文作者:** Czasg
**版权声明:** 转载请注明出处哦~👮‍
:::
