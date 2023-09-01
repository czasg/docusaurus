---
title: 记一次 golang 升级导致的 goland 不可用
authors: [czasg]
tags: [golang,bug]
---

go1.14.1 升级至 go1.17.7，导致 goland 打开后显示无法找到 GOROOT。

错误显示：
```text
The selected directory is not a valid home for Go SDK
```

<!--truncate-->

通过 go env 查看后发现相关配置无问题，环境变量也无问题。

最后找的解决方案：  
**1、**go version 查看自己当前版本  
**2、**编辑 {GOROOT}/src/runtime/internal/sys/zversion.go 文件，写入以下变量
```go
const TheVersion = `go1.17.4`
```
**3、**重启 goland，然后点击 setroot 即可。  


<br/>

:::info 👇👇👇
**本文作者:** Czasg        
**版权声明:** 转载请注明出处哦~👮‍
:::
