---
title: 记一次关于文件IO的争执
authors: [czasg]
tags: [职场]
---

背景是有个需求需要下载文件并计算此文件的MD5。

然后同事开发的（Go）程序是先创建一个文件，然后写入下载数据。再没有关闭文件的前提下，重新又开启了一个新的文件流来计算MD5。

由此引发了一些争执...

<!--truncate-->

为此我据理力争：

文件IO在`write`的过程，是不保证落盘的，即有一部分数据会暂存在内存中。   
在这种情况下，重新创建一个只读的文件流，可能读不到在内存中的数据...

但是同事用实际证明了，这段代码再实际计算过程，并没有任何问题...

我自己也无法复现...

之后用`Python`测试了下，发现确实读不到，但`Go`就是可以读取到...

```python
with open("tmpfile", "w", encoding="utf-8) as w:
    w.write("hello world")
    
    with open("tmpfile", "r", encoding="utf-8") as r:
        assert r.read() == "hello world"
```

最后总结：   

Go 文件句柄调用 Write 时是直接调用的系统接口，故可以读取到未落盘。

Python 则是自己实现了缓存机制。在 Go 中也有 bufio 库可以实现类似的机制

<br/>

:::info 👇👇👇
**本文作者:** Czasg    
**版权声明:** 转载请注明出处哦~👮‍
:::
