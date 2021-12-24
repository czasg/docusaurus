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
```shell script title="新增用户，该指令无需 passwd 设置密码"
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
```shell script title="查看程序路径"
>>> whereis ls
```

```shell script title="创建和删除文件"
>>> mkdir               // 创建空目录
>>> touch               // 修改文件的时间属性，文件不存在则创建新文件
>>> rm -rf              // 递归删除
>>> cp -r               // 递归复制
```

```shell script title="查看文件"
>>> ls -al              //
>>> ls | cat -n         // 显示文件，并给每一个增加一个编号
>>> ls | wc -l          // 统计文件数量
```

```shell script title="查找文件"
>>> find ./path -type f -name "file_name"  // 查找文件
>>> find ./ -type f | wc -l                // 查找全部文件并统计数量
>>> find ./ -type f -name "*.tmp" -delete  // 查找到 tmp 结尾的文件并删除
```

```shell script title="修改文件权限"
>>> chmod 777 test.txt  // 4（读）2（写）1（执行）
>>> chmod -R            // 递归修改目录下所有文件
```

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

## 进程管理

## 网络管理
