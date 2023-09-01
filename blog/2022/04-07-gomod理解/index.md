---
title: go mod理解
authors: [czasg]
tags: [go]
---

如果你搭建过早期 Go 项目，应该会比较熟悉 GOPATH。   
在以前，项目依赖三方包时，我们需要通过`go get`将三方依赖库下载到 GOPATH。这就涉及到一个版本维护的问题。  

为了解决这个问题，引入了`go mod`。

<!--truncate-->

## go mod
`go mod` 是一个包依赖管理工具。


## git没法拉代码
go mod vendor拉取代码报错：
```text title=""
The project you were looking for could not be found
```
这种属于git未配置好导致的，可以再根目录下创建：
```text title=".git-credentials"
https://user:pwd@gitee.com
https://user:pwd@github.com
```

<br/>

:::info 👇👇👇
**本文作者:** Czasg    
**版权声明:** 转载请注明出处哦~👮‍
:::
