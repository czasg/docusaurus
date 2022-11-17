---
title: Go实现非跳转的http请求
authors: [czasg]
tags: [goalng]
---

<!--truncate-->

Go http 发起请求时，一旦存在302等跳转请求的场景，会默认帮你跳转过去。

比如你只是想简单的 Head 请求，但当对方响应 302 时，实际最后获取到的就是 Location 的结果。

实际我们可以通过自定义 http client 实现非跳转请求：
```go
var client = http.Client{
	CheckRedirect: func(req *http.Request, via []*http.Request) error {
		return http.ErrUseLastResponse
	},
}
```


<br/>

:::info 👇👇👇
**本文作者:** Czasg
**版权声明:** 转载请注明出处哦~👮‍
:::
