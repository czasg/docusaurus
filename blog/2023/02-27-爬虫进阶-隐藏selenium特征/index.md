---
title: 爬虫进阶-隐藏selenium特征
authors: [czasg]
tags: [爬虫, selenium]
---

这是一场反爬与反反爬技术人员之间的斗争~

爬虫服务能够在网络上不知疲倦的获取信息，所以一般会带有某些易于常人的特征

反爬则基于这些特征进行拦截，而反反爬有两个思路：   
1、消除爬虫特征，使得自己像正常人一样。比如降低爬取频率就是一个不错的方案~     
2、破解反爬技术，即使被识别仍然可以获取   

在反反爬的技术领域，有这么一类偏方，就是自动化。  
它完全模拟常人操作，从而达到"一力破万法"的效果。

<!--truncate-->

但随着反爬技术的进一步完善，自动化工具也逐渐的被识别并拦截，随之而来的就是一波反反爬技术的升级~

## CDP
CDP 全称为 [Chrome Devtools-Protocol](https://chromedevtools.github.io/devtools-protocol/)

通过执行 CDP 命令，可以在网页加载前运行一段代码，进而改变甚至屏蔽部分浏览器的指纹特征。

由于浏览器特征种类过多，所以可以直接使用现成的工具，直接屏蔽大部分特征。参考：
[stealth.min.js](https://github.com/berstend/puppeteer-extra/blob/stealth-js/stealth.min.js)

```python
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
import time

chrome_options = Options()

# 无头模式
# chrome_options.add_argument("--headless")

# 添加请求头
chrome_options.add_argument(
    'user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36')

s = Service(r"chromedriver.exe路径")

driver = webdriver.Chrome(service=s, options=chrome_options)

# 利用stealth.min.js隐藏浏览器指纹特征
# stealth.min.js下载地址：https://github.com/berstend/puppeteer-extra/tree/stealth-js
with open('./stealth.min.js') as f:
    driver.execute_cdp_cmd("Page.addScriptToEvaluateOnNewDocument", {
        "source": f.read()
    })

driver.get(url='URL')
# driver.get(url='https://bot.sannysoft.com/')

# 保存图片
driver.save_screenshot('result.png')

time.sleep(200)
```

## undetected_chromedriver
这是一个防止浏览器指纹特征被识别的依赖库，可以自动下载驱动配置再运行

```python title="安装依赖"
pip install undetected-chromedriver
```

```python title="undetected-chromedriver用例参考"
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service
import time
import undetected_chromedriver as uc

chrome_options = Options()
# chrome_options.add_argument("--headless")

s = Service(r"chromedriver.exe")

driver = uc.Chrome(service=s, options=chrome_options)

driver.get(url='URL')
# driver.get(url='https://bot.sannysoft.com/')

driver.save_screenshot('result.png')
time.sleep(100)
```

## 操作已开启的浏览器
操作的原理是先单独开启一个浏览器，并开启远程调试能力，如：
```
import subprocess

# 1、打开浏览器
# 指定端口号为：1234
# 配置用户数据路径：--user-data-dir
cmd = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe --remote-debugging-port=1234 --user-data-dir="C:\\selenum\\user_data"'

subprocess.run(cmd)
```

然后调整代码，远程加入调试：
```
import time
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service

# 操作上面已经打开的浏览器，进行百度搜索
chrome_options = Options()

# 指定已经打开浏览器的地址及端口号
chrome_options.add_experimental_option("debuggerAddress", "127.0.0.1:1234")

# 注意：chrome版本与chromedirver驱动要保持一致
# 下载地址：http://chromedriver.storage.googleapis.com/index.html
s = Service(r"chromedriver.exe")

driver = webdriver.Chrome(service=s, options=chrome_options)

# 打开目标网站
driver.get(url="URL")

time.sleep(200)
```


<br/>

:::info 👇👇👇
**本文作者:** Czasg    
**版权声明:** 转载请注明出处哦~👮‍
:::
