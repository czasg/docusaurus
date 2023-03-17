---
title: golang
---

## linux 下安装
```shell script title="下载指定版本的go压缩包，解压并迁移至指定目录"
wget https://studygolang.com/dl/golang/go1.13.1.linux-amd64.tar.gz

tar -zxvf go1.13.1.linux-amd64.tar.gz

mv go/ /usr/local/
```

```shell script title="配置环境变量"
vi /etc/profile

export GOROOT=/usr/local/go
export PATH=$PATH:$GOROOT/bin

source /etc/profile
```

```shell script title="查看go版本"
go version
```