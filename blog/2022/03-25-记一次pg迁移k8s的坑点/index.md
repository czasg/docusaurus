---
title: 记一次pg迁移k8s的坑点
authors: [czasg]
tags: [数据库]
---

<!--truncate-->

## 坑点：字符集不兼容
有台物理机部署了 postgres 数据库，现在要把这个数据库迁移至 k8s。

第一次迁移，我们首先关闭了数据库，把文件直接挪到了 k8s 上，配上对应的 pg 镜像。    
测试时，服务正常运行了，但是没有办法提供数据服务，甚至连数据库也连接不上。
```text title="连接报错"
zh_CN.UTF-8:initdb: error: locale “zh_CN.UTF-8“ requires unsupported encoding "en_CN.UTF-8"
```
我们没有深究，就感觉可能是数据库文件不兼容，不能直接暴力迁移文件。

第二次迁移，我们使用 pg_dumps 和 pg_restore 工具进行迁移。数据量有点大，等待迁移完成后，我们再次进行了测试。
```text title="连接报错"
zh_CN.UTF-8:initdb: error: locale “zh_CN.UTF-8“ requires unsupported encoding "en_CN.UTF-8"
```
仍然报字符集不兼容的问题。这着实有点让人费解。

咨询了运维大佬后，给的建议是安装下依赖，即：
```shell script
yum install -y langpacks-zh_CN
```
这种方式需要在编译镜像时安装，影响比较小。

后面又查询到一种方式，在编译镜像时，使用 `localedef` 指定编码并设置环境变量为 LANG 为 zh_CN.utf8：
```dockerfile
FROM postgres
RUN localedef -i zh_CN -c -f UTF-8 -A /usr/share/locale/locale.alias zh_CN.UTF-8
ENV LANG zh_CN.utf8
```
但是用了这种方法，日志似乎会变成中文😂😂😂

![参考文档](https://serverfault.com/questions/1074738/docker-postgresql-change-database-encoding-to-utf-8/1074756)

<br/>

:::info 👇👇👇
**本文作者:** Czasg    
**版权声明:** 转载请注明出处哦~👮‍
:::
