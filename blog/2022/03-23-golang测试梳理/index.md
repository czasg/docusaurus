---
title: golang测试梳理
authors: [czasg]
tags: [golang]
---

<!--truncate-->

## 单元测试 flag
#### -bench regexp
执行基准测试，后面可以接正则表达式，如果需要执行全部的基准测试，可以使用 `-bench=.`
```go
func Benchmark(b *testing.B) {
    b.ResetTimer()
    for i := 0; i < b.N; i++ {
    }
}
```


#### -benchtime t
基准测试的持续时间，默认是 1s，可以使用 `-benchtime=1h30s`

#### -count n
基准测试的执行次数，默认仅执行一次。

#### -cover
用于分析并输出单元测试覆盖率。

#### -covermode set,count,atomic
单元测试的覆盖率分析模式。默认分析模式是 set，当使用 -race 时，则分析模式变为 atomic。

set：哪一行代码被执行了。  
count：哪行代码被执行了，且被执行了多少次。   
atomic：类似 count，但是会多线程并发检测，存在并发冲突时会报错。  

#### -cpu
指定 GOMAXPROCS

#### -failfast
当测试失败时立即退出当前测试，而不是继续执行剩下的测试。

#### -timeout
单个单元测试执行的最长时间，默认是 10 分钟

#### -benchmem
输出基准测试过程中内存的分配与统计。

#### -coverprofile cover.out
测试过程覆盖率情况

```shell script title="可视化单元测试覆盖率"
go tool cover -html=cover.out
```

#### -cpuprofile cpu.out
测试过程 cpu 调度情况

#### -memprofile
测试过程内存使用情况


<br/>

:::info 👇👇👇
**本文作者:** Czasg    
**版权声明:** 转载请注明出处哦~👮‍
:::
