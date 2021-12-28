---
title: Linux 常用指令
authors: [czasg]
tags: [linux]
---

<!-- 参考自 https://linuxtools-rst.readthedocs.io/zh_CN/latest/base/index.html -->

从使用维度划分 Linux 常用指令，便于梳理和总结。

* 帮助指令
* 用户管理
* 文件管理
* 磁盘管理
* 进程管理
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

### sshkey-gen

## 文件管理
### rm & cp
* rm -r：递归执行操作，操作对象可以是目录
* rm -f：（--force）强制执行删除且忽略文件不存在等错误
* cp -r：递归复制

```shell script title="创建和删除文件"
rm -rf              // 递归删除
cp -r               // 递归复制
```

### wc
`wc` 用于计算统计，默认统计文件中的行、字、大小

* -l：计算行数
* -w：计算字数
* -c：计算bytes

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
* -delete：找到文件后执行删除

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
`chmod` 修改文件读、写、执行权限。一个文件的调用权限可以分为 user、group、other 三级。

针对用户执行

* u：文件所有者
* g：文件所有者组
* o：其他所有用户
* a：所有用户
* -R：递归执行当前目录所有文件

```shell script title="修改文件权限"
>>> chmod u+r test.txt
>>> chmod g-r test.txt
>>> chmod o=r test.txt
>>> chmod a+r test.txt
```

```shell script title="修改文件权限"
chmod -R 777 test.txt    // 4（读r）2（写w）1（执行x），此时每个数据对应 u、g、o 的权限
```

### ln
`ln` 文件 软/硬 链接

* -s：软链接，仅生成一个镜像，不占用额外的磁盘空间（仅一个指针空间）。否则生成一个和源一样的文件，二者均实时保持同步。

```shell script
ln -s old new       // 符号软链接
ln old new          // 符号软链接
```

### xargs
`xargs` 是一个命名行参数生成器，可以将其他管道传递过来的数据作为参数执行命名行，其默认执行指令是 echo

```shell script title="多行文本转单行"
cat filename | xargs
```

```shell script title="统计源码文件行数"
find . -type f -name "*.py" -print0 | xargs -0 wc -l
```

```shell script title="查找并压缩目标文件"
find . -type f -name "*.jpg" | xargs tar -czvf images.tar.gz
```

```shell script title="下载文件"
cat url-list.txt | xargs wget -c
```

### grep
`grep` 用于查找文件中符合条件的字符串

* -n：计算并显示行号

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
`cat test.txt | tr a-z A-z`

### cut 切割
`cut` 用于显示每行从头开始算起的字符

* -b：以字节为单位进行切割
* -c：以字符为单位进行切割
* -d：自定义分隔符，默认为制表符

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

### zip

:::note linux 安装 zip
centos：
:::

### rar

:::note linux 安装 rar
centos：
:::

## 进程管理

### ps
`ps` 用于查看 linux 下的进程状态，即 Process Status

```shell script title="显示所有命名及其CMD"
ps -ef
ps -aux
```

### top
`top` 用于实时输出进程的状态信息

* -p：仅展示目标进程信息

### kill
`kill` 用于杀掉一个进程，如：`kill -9 pid`

* -l：显示信号
* -9：（SIGKILL）杀掉进程
* -15：（SIGTERM）正常停止一个进程

```text
 1) SIGHUP       2) SIGINT       3) SIGQUIT      4) SIGILL       5) SIGTRAP
 6) SIGABRT      7) SIGBUS       8) SIGFPE       9) SIGKILL     10) SIGUSR1
11) SIGSEGV     12) SIGUSR2     13) SIGPIPE     14) SIGALRM     15) SIGTERM
16) SIGSTKFLT   17) SIGCHLD     18) SIGCONT     19) SIGSTOP     20) SIGTSTP
21) SIGTTIN     22) SIGTTOU     23) SIGURG      24) SIGXCPU     25) SIGXFSZ
26) SIGVTALRM   27) SIGPROF     28) SIGWINCH    29) SIGIO       30) SIGPWR
31) SIGSYS      34) SIGRTMIN    35) SIGRTMIN+1  36) SIGRTMIN+2  37) SIGRTMIN+3
38) SIGRTMIN+4  39) SIGRTMIN+5  40) SIGRTMIN+6  41) SIGRTMIN+7  42) SIGRTMIN+8
43) SIGRTMIN+9  44) SIGRTMIN+10 45) SIGRTMIN+11 46) SIGRTMIN+12 47) SIGRTMIN+13
48) SIGRTMIN+14 49) SIGRTMIN+15 50) SIGRTMAX-14 51) SIGRTMAX-13 52) SIGRTMAX-12
53) SIGRTMAX-11 54) SIGRTMAX-10 55) SIGRTMAX-9  56) SIGRTMAX-8  57) SIGRTMAX-7
58) SIGRTMAX-6  59) SIGRTMAX-5  60) SIGRTMAX-4  61) SIGRTMAX-3  62) SIGRTMAX-2
63) SIGRTMAX-1  64) SIGRTMAX
```

## 网络管理

### dig
`dig` 用于查询域名映射的 DNS

:::note
centos: yum install -y bind-utils
:::

### netstat
`netstat` 用于显示网络状态

* -a：显示所有连线中的 socket
* -l：显示监控中的 socket

:::note linux 安装 netstat
centos：yum install -y net-tools
:::
