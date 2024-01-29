---
title: erros
---

在Go中，error是一个interface类型，只要实现了`Error() string`方法，都可以作为错误使用。

对于错误的处理，很多编程语言都是通过抛出异常，然后通过在最外层捕获异常来处理。

在正常的Go编程中，并不推荐这样。对于错误的处理，我们都是通过返回err来处理。
因此在一个深度嵌套的调用链中，当发生一个错误的时候，就可能会产生一个错误链。
因此为了更好的管理错误链，go标准库提供了`Is/As`等方法去管理error。

### errors.Is
用于检查错误链中是否存在特定的错误
```go
if errors.Is(err, targetErr) {
    // 处理目标错误
}
```

### errors.As
用于将错误链中的错误转换为特定的错误类型
```go
var customErr *CustomError
if errors.As(err, &customErr) {
    // 处理 customErr
}
```
