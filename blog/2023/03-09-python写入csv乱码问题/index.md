---
title: python写入csv乱码问题
authors: [czasg]
tags: [python]
---

<!--truncate-->
正常的写入代码如下，但实际打开结果会是乱码！
```python
import csv

with open("file.csv", "w", encoding="utf-8", newline="") as w:
    csv_w = csv.write(w)
    csv_w.writerow(["中文乱码"])
```

通过排查，发现改变编码方式可以解决这个问题。即把`utf-8`变更为`utf-8-sig`编码。

```python
import csv

with open("file.csv", "w", encoding="utf-8-sig", newline="") as w:
    csv_w = csv.write(w)
    csv_w.writerow(["中文正常展示"])
```

原因分析：

uft-8-sig 中的 sig 表示 signature，也就是带有签名的 utf-8。

Excel 在读取 csv 文件的时候是通过读取文件头上的 BOM 来识别编码。如果文件头没有 BOM 信息，则默认按照 Unicode 编码读取。

当我们使用 utf-8 编码来生成 csv 文件的时候，由于并没有生成 BOM 信息，Excel 就会自动按照 Unicode 编码读取，从而导致了乱码问题。


<br/>

:::info 👇👇👇
**本文作者:** Czasg    
**版权声明:** 转载请注明出处哦~👮‍
:::
