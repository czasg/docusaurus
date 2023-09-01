---
title: Github 搭建 Docusaurus 站点
authors: [czasg]
tags: [docusaurus]
---

本文章记录基于 Docusaurus 搭建静态站点，并通过 Github-Actions 实现自动部署。

再整个自动化部署的过程中，最核心的步骤就是初始化并配置公钥、密钥、workflow.yml。

<!--truncate-->

## 1、新建 Github 仓库
首先，登录[Github仓库创建页面](https://github.com/new)，我们创建一个全新的空白仓库，项目名命名为 `testDocusaurus`。

然后通过 `git` 将仓库拉取到本地，至此，我们拥有了一个全新的空白仓库 `testDocusaurus`。  

![](gitindex.png)

## 2、初始化 Docusaurus 项目
> [Docusaurus项目初始化细节请参考官方文档](https://docusaurus.io/zh-CN/docs/installation)

进入到仓库 `testDocusaurus` 所在的空白目录，并在此目录打开终端界面。

为了更好的完成接下来的步骤，你可能需要预先安装**nodejs**。在此，假设你已经准备完毕。  
那我们接下来通过以下指令初始化一个 `Docusaurus` 项目。
```shell script
>>> npx create-docusaurus@latest website classic
...
...
Successfully created "website".
Inside that directory, you can run several commands:

  npm start
    Starts the development server.

  npm run build
    Bundles your website into static files for production.

  npm run serve
    Serves the built website locally.

  npm deploy
    Publishes the website to GitHub pages.

We recommend that you begin by typing:

  cd website
  npm start

Happy building awesome websites!
```

该指令运行完后，会输出一些简单的运行指令，而且我们应该可以看到一个 `website` 的目录，我们先将里面的内容剪贴出来，放到我们空白仓库目录下面。

此时，我们按照提示，运行 `npm start` 指令，我们就可以运行此项目。

通常启动端口为3000，则默认路径为：http://localhost:3000/  

![](websiteindex.png)

## 3、搭建 Github Actions
> Github Actions部署细节参考[官方文档](https://docusaurus.io/zh-CN/docs/deployment#deploying-to-github-pages)

接入 `Github Actions` 需要创建一对新的 **SSH Key**，并将公钥和密钥均配置到 Github，我们来具体看下操作。

### 创建公钥密钥对
首先通过`ssh-keygen`指令创建公钥密钥对，通过改指令，我们可以获取到公钥（id_rsa.pub）和私钥（id_rsa）
```shell script
>>> ssh-keygen -t rsa -C "email"
...
...
The key's randomart image is:
+---[RSA 3072]----+
| .=oo*=o=o.      |
| o+.=o==.o       |
|  .O.O=+o        |
|  ..=o@.oo       |
| . o +.+S+..     |
|  . + . E.o      |
|   o . .         |
|  .              |
|                 |
+----[SHA256]-----+
```

### 配置公钥密钥

我们打开仓库的 `deploy keys`，选择新增，其中，title 命名为 `GH_PAGES_DEPLOY`，
内容则是公钥 `id_rsa.pub` 中的内容，记住选中 `Allow write access` 框，表示赋予部署写权限。
![](deploykey.png)

此时部署公钥已经完成，接着我们再将私钥也配置上。打开同级配置下的 Secret，选择新增仓库密钥，
同样，Name 命名为 `GH_PAGES_DEPLOY`，内容则是密钥 `id_rsa` 中的内容。
![](deploykey1.png)

### workflow配置
最后，我们创建 `Github Actions`，将模板复制进去，则整个流水线就已经配置好了。模板参考如下：
```yaml
name: Node.js CI

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  checks:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v1
      - uses: actions/setup-node@v1
        with:
          node-version: '18.x'
      - name: Test Build
        run: |
          if [ -e yarn.lock ]; then
            yarn install --frozen-lockfile
          elif [ -e package-lock.json ]; then
            npm ci
          else
            npm i
          fi
          npm run build
  gh-release:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v1
      - uses: actions/setup-node@v1
        with:
          node-version: '18.x'
      - uses: webfactory/ssh-agent@v0.5.0
        with:
          ssh-private-key: ${{ secrets.GH_PAGES_DEPLOY }}
      - name: Release to GitHub Pages
        env:
          USE_SSH: true
          GIT_USER: czasg
        run: |
          git config --global user.email "your email"
          git config --global user.name "you name"
          if [ -e yarn.lock ]; then
            yarn install --frozen-lockfile
          elif [ -e package-lock.json ]; then
            npm ci
          else
            npm i
          fi
          npm run deploy
```

复制模板时，对应的 git 配置记得修改下，如下：
```shell script
git config --global user.email "注册公钥使用到的邮箱"
git config --global user.name "github用户名"
```

## 4、更新仓库，尝试自动部署

确保 Github Pages 已经初始化好，那么我们往仓库推送修改时，就可以触发自动部署了。


<br/>

:::info 👇👇👇
**本文作者:** Czasg         
**版权声明:** 转载请注明出处哦~👮‍    
:::
