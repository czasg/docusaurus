---
title: golang 切片坑点
authors: [czasg]
tags: [golang]
---

切片是 golang 中的一种特殊结构，由指向数组首位的指针、长度、容量组成。

<!--truncate-->

## 坑点：切片之间可以相互影响
切片底层使用了数组结构，再没有触发扩容机制前，多切片之间是可能相互影响的。

```go
package main

import "fmt"

func main() {
	base := []int{1, 2, 3, 4, 5}
	base01 := base[0:1]
	base02 := base[0:2]
	fmt.Println(base01, base02)
	base01[0] = 11
	fmt.Println(base01, base02)
}
```
此时修改 base01 的值，会直接影响 base02 的值。     
这是因为他们此时公用的底层数组。

:::note 扩容机制
```goalng title="src/runtime/slice.go"
func growslice(et *_type, old slice, cap int) slice {
    ...
    newcap := old.cap
    doublecap := newcap + newcap
    if cap > doublecap {
        newcap = cap
    } else {
        if old.len < 1024 {
            newcap = doublecap
        } else {
            // Check 0 < newcap to detect overflow
            // and prevent an infinite loop.
            for 0 < newcap && newcap < cap {
                newcap += newcap / 4
            }
            // Set newcap to the requested cap when
            // the newcap calculation overflowed.
            if newcap <= 0 {
                newcap = cap
            }
        }
    }
    ...
}
```
看源码可以看到，当切片长度小于 1024 时，扩容时直接 double，当切片长度大于 1024 后，每次扩容为之前的 1/4。
:::


<br/>

:::info 👇👇👇
**本文作者:** Czasg     
**版权声明:** 转载请注明出处哦~👮‍    
:::
