---
title: Linux 常用指令
authors: [czasg]
tags: [linux]
---

<!-- 参考自 https://linuxtools-rst.readthedocs.io/zh_CN/latest/base/index.html -->

从使用维度划分 Linux 常用指令，便于梳理和总结。

* 帮助指令
* 用户管理
* 文件操作
* 文件管理
* 磁盘管理
* 网络管理

<!--truncate-->

## 帮助指令
```shell script title="获取帮助"
>>> man ls
```

```shell script title="获取帮助"
>>> ls --help
```

## 用户管理
```shell script title="新增用户，ubuntu 下该指令无需 passwd 设置密码"
>>> adduser cza
```

```shell script title="切换用户"
>>> su root
```

```shell script title="显示当前用户"
>>> whoami
```

```shell script title="查看用户及权限"
>>> cat /etc/passwd
```

## 文件操作和管理
### 复制和删除
* -r：递归执行操作，操作对象可以是目录

```shell script title="创建和删除文件"
>>> mkdir               // 创建空目录
>>> touch               // 修改文件的时间属性，文件不存在则创建新文件
>>> rm -rf              // 递归删除
>>> cp -r               // 递归复制
```

### wc
`wc` 用于计算数字，可以计算行数，大小等，默认输出行数、字数、大小

* -l：计算行数
* -w：计算字数
- -c：计算bytes

```shell script title="查看文件"
>>> wc test.txt              // 输出文件行数、字数、大小
1  4 17 test.txt
>>> ls | wc -l               // 统计文件数量
>>> ls | cat -n              // 显示文件，并给每一个增加一个编号
```

### find
`find` 用于查找文件

* -type：指定查找类型
    * f：文件
    * d：目录
* -name：指定查找名字
* atime：在 n 天内被访问过的文件（access time）
* ctime：在 n 天内被修改过的文件（change time）

```shell script title="查找文件"
find ./path -type f -name "file_name"
```

```shell script title="查找当前目录下全部文件并统计数量"
find ./ -type f | wc -l
```

```shell script title="查找到 tmp 结尾的文件并删除"
find ./ -type f -name "*.tmp" -delete
```

### chmod
`chmod` 修改文件

```shell script title="修改文件权限"
>>> chmod 777 test.txt  // 4（读）2（写）1（执行）
>>> chmod -R            // 递归修改目录下所有文件
```

### ln
`ln` 符号软链接

```shell script title="软链接" 
>>> ln -s old new       // 符号软链接
```

```shell script title="文本转化与搜索" 
>>> cat "filename" | tr a-z A-Z                           // tr 将小写转化为大写
>>> cat "filename" | grep "match_rule" -c                 // grep 指定匹配规则，-c 匹配次数
>>> cat "filename" | grep "match_rule" -n                 // grep 指定匹配规则，-n 匹配行号
>>> cat "filename" | xargs                                // 多行转单行
>>> find . -type f -name "*.py" -print0 | xargs -0 wc -l  // 统计源码文件行数
>>> find . -type f -name "*.jpg" | xargs tar -czvf images.tar.gz
>>> cat url-list.txt | xargs wget -c  // 下载文件
```

### xargs

### sort 排序
* -n 按数字进行排序 
* -d 按字典序进行排序
* -r 逆序排序
* -k N 指定按第N列排序
```shell script
sort -nrk 1 data.txt
sort -bd data                // 忽略像空格之类的前导空白字符

sort unsort.txt | uniq       // 消除重复行
sort unsort.txt | uniq -c    // 统计各行出现次数
sort unsort.txt | uniq -d    // 找出重复行
```

### tr 转化

### cut 切割

### paste 按列拼接文本

### sed 文本替换

### awk 数据流处理

## 磁盘管理

### df
`df` 用于查看当前系统磁盘使用率  

* -h：优化显示

### du
`du` 用于查看当前目录占用磁盘率

* -h：优化显示

### tar
`tar` 用于压缩和解压

* -z：（--gzip）使用 zgip 来压缩或者解压
* -x：（--extract）解压
* -c：（--create）打包
* -v：（--verbose）显示执行过程，具体操作的文件
* -f：（--file）指定备份文件名

```shell script title="压缩文件"
tar -cvf 压缩文件.zip 单个文件或者目录
tar -zcvf gzip压缩文件.tar.gz 单个文件或者目录
```

## 进程管理

### ps

### top

### lsof

### kill

## 网络管理

### netstat
`netstat` 用于显示网络状态

* -a：显示所有连线中的 socket
* -l：显示监控中的 socket

:::note linux 安装 netstat
centos：yum install -y net-tools
:::

### dig
`dig` 用于查询域名映射的 DNS

:::note
centos: yum install -y bind-utils
:::
