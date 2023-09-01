---
title: python打包说明
authors: [czasg]
tags: [python]
---

<!--truncate-->

## 通用流程
- 检测
```shell script
python setup.py check
```
- 构建
```shell script
python setup.py sdist
```
- 上传
```shell script
pip install twine
twine upload dist/__packages__-__version__.tar.gz
```

## 文件管理
在正常构建过程中，打包程序可能会索引到一些测试、缓存文件，比如：
- __pycache__
- *.pyc
- *_test.py

此时，我们可以通过引入`MANIFEST.in`文件，来对构建过程中的文件进行简单管理。相关指令有：

|指令|说明|
|---|---|
|include file-pattern ...|添加指定文件，非根目录文件需要指定路径|
|exclude file-pattern ...|排除指定文件，非根目录文件需要指定路径|
|recursive-include dir-pattern file-pattern ...|递归添加指定目录下的指定文件|
|recursive-exclude dir-pattern file-pattern ...|递归排除指定目录下的指定文件|
|global-include file-or-dir-pattern ...|全局添加指定目录或者文件|
|global-exclude file-or-dir-pattern ...|全局排除指定目录或者文件|
|graft dir-pattern|添加指定目录下所有文件|
|prune dir-pattern|排除指定目录下所有文件|

文件或者目录，可以提供精确名字，也可以提供正则匹配。如：

```text title="MANIFEST.in"
include LICENSE
include MANIFEST.in
include requirements.txt

exclude README.md

global-exclude __pycache__
global-exclude *.py[cod]
global-exclude *_test.py
global-exclude test_*.py

prune test
prune demo
```


<br/>

:::info 👇👇👇
**本文作者:** Czasg    
**版权声明:** 转载请注明出处哦~👮‍
:::
