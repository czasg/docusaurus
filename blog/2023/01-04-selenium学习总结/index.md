---
title: selenium学习总结
authors: [czasg]
tags: [selenium]
---

<!--truncate-->

```python
from selenium import webdriver  # 提供WebDriver的实现
from selenium.webdriver.common.keys import Keys  # 提供键盘按键的支持

options = webdriver.ChromeOptions()
options.add_experimental_option('excludeSwitches', ['enable-automation'])  # 设置为开发者模式，避免被识别
options.add_argument('--headless')  # 无界面操作。效率应该高一些
options.add_argument("--proxy-server=http://39.97.240.222:5739")  # 使用代理

driver = webdriver.Chrome()
driver.add_cookie({})  # 添加cookie
driver.get("http://www.python.org")
elem = driver.find_element_by_name("q")
elem.clear()
elem.seWebDrivernd_keys("pycon")
elem.send_keys(Keys.RETURN)  # 在input中输入回车键
driver.close()  # 仅关闭一个标签页。quit将关闭整个浏览器。

element = driver.find_element_by_xpath("//select[@name='name']")  # 找到下拉框
all_options = element.find_elements_by_tag_name("option")  # 找到此元素中的option
for option in all_options:
    print("Value is: %s" % option.get_attribute("value"))  # 获取value属性值
    option.click()
```

```python
from selenium.webdriver import ActionChains  # 专门用于拖放的

element = driver.find_element_by_name("source")
target = driver.find_element_by_name("target")
action_chains = ActionChains(driver)
action_chains.drag_and_drop(element, target).perform()

driver.switch_to_window("windowName")  # 支持不同窗口之间的移动
driver.forward()
driver.back()  # 访问历史记录
driver.get_cookies()  # 获取昂前页面的Cookie
```

```python
from selenium.webdriver.common.by import By  # 用于查找元素

driver.find_element(By.XPATH, "//button[text()="something"]")  # find_element 方法用于查找单个元素
driver.find_elements(By.XPATH, '//button')  # find_elements 用于查找多个元素

# 这二者是等价的把
driver.find_element_by_id('loginForm')  # 第一个该 匹配 元素 会被匹配并返回
```

```python
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait  # 用于创建等待对象
from selenium.webdriver.support import expected_conditions as EC  # 提供了一组预定义的条件供WebDriverWait使用

driver = webdriver.Chrome()
driver.get("http://somedomain/url_that_delays_loading")

# 显式等待 - 等待满足一定条件之后再进一步执行
try:
    element = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.ID, "myDynamicElement"))
    )
finally:
    driver.quit()

# 隐式等待 - 去等待一定的时间后去查找元素。 默认等待时间是0秒，一旦设置该值，隐式等待是设置该WebDriver的实例的生命周期
driver.implicitly_wait(10) # seconds
```

```python
from selenium.webdriver import ActionChains  # 专门用于拖放的

element = driver.find_element_by_name("source")
target = driver.find_element_by_name("target")
action_chains = ActionChains(driver)
action_chains.drag_and_drop(element, target).perform()

driver.switch_to_window("windowName")  # 支持不同窗口之间的移动
driver.forward()
driver.back()  # 访问历史记录
driver.get_cookies()  # 获取昂前页面的Cookie

------------------------------------------------------------------------------------------------------------------------------------

from selenium.webdriver.common.by import By  # 用于查找元素

driver.find_element(By.XPATH, "//button[text()="something"]")  # find_element 方法用于查找单个元素
driver.find_elements(By.XPATH, '//button')  # find_elements 用于查找多个元素

# 这二者是等价的把
driver.find_element_by_id('loginForm')  # 第一个该 匹配 元素 会被匹配并返回

------------------------------------------------------------------------------------------------------------------------------------

from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait  # 用于创建等待对象
from selenium.webdriver.support import expected_conditions as EC  # 提供了一组预定义的条件供WebDriverWait使用

driver = webdriver.Chrome()
driver.get("http://somedomain/url_that_delays_loading")

# 显式等待 - 等待满足一定条件之后再进一步执行
try:
    element = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.ID, "myDynamicElement"))
    )
finally:
    driver.quit()

# 隐式等待 - 去等待一定的时间后去查找元素。 默认等待时间是0秒，一旦设置该值，隐式等待是设置该WebDriver的实例的生命周期
driver.implicitly_wait(10) # seconds

------------------------------------------------------------------------------------------------------------------------------------

from selenium import webdriver
.get()
.get_cookie()
.get_cookies()
.get_screenshot_as_base64()  # 以base64编码的字符串获取当前窗口的屏幕快照
.get_screenshot_as_file(filename)  # 将当前窗口的屏幕快照保存到PNG图像文件中
.get_screenshot_as_png()  # 以二进制数据获取当前窗口的屏幕截图
.save_screenshot(filename)  # 将当前窗口的屏幕快照保存到PNG图像文件中
.get_window_position(windowHandle ='current' ) # 获取当前窗口的x，y位置
.get_window_rect()  # 获取窗口的x，y坐标以及当前窗口的高度和宽度
.get_window_size(windowHandle ='current')  # 获取当前窗口的宽度和高度。
.add_cookie({})  # 将cookie添加到当前会话
.delete_all_cookies()  # 删除会话范围内的所有cookie
.delete_cookie('name')  # 删除具有给定名称的单个cookie
.back()
.forward()
.close()  # 关闭当前窗口
.create_web_element(element_id)  # 使用指定的element_id创建一个Web元素
.execute()  # ?
.execute_async_script(script, * args)  # 在当前窗口/框架中异步执行JavaScript
.execute_script(script, * args)  # 在当前窗口/框架中同步执行JavaScript  # arguments[0] arguments[1] 这些是起传递参数的作用
.find_element()
.find_elements()
.find_element_by_id()
.find_element_by_class_name()
.find_element_by_name()
.find_element_by_xpath()
.maximize_window()  # 最大化
.minimize_window()  # “最小化”操作
.refresh()  # 刷新当前页面
.set_window_position(x，y，windowHandle ='current' )  # 设置当前窗口的x，y位置
.set_window_rect(x = None，y = None，width = None，height = None)  # 设置窗口的x，y坐标以及当前窗口的高度和宽度
.set_window_size(width，height，windowHandle ='current' )  # 设置当前窗口的宽度和高度
.name  # 返回此实例的基础浏览器的名称。
.title  # 返回当前页面的标题
```

```python
selenium.webdriver.remote.webelement.WebElement  # DOM元素
.get_attribute(name)  # 获取元素的给定属性或属性。
.get_property()  # 获取元素的给定属性
.is_displayed()  # 元素是否对用户可见
.is_enabled()  # 是否启用元素
.is_selected()  # 是否选择元素。
.screenshot()  # 将当前元素的屏幕快照保存到PNG图像文件中
.send_keys()  # 模拟输入到元素中
.submit()  # 提交表格
.clear()  # 清除文本
.click()  # 单击元素
.screenshot_as_base64()  # base64编码字符串的形式获取当前元素的屏幕快照
.screenshot_as_png()  # 以二进制数据获取当前元素的屏幕截图
.find_element()
.find_element_by_class_name()  # 该元素的子元素中查找元素
.find_element_by_id()  # 该元素的子元素中查找元素
.find_element_by_xpath()  # 该元素的子元素中查找元素
.id
.tag_name
.text
```

```python
from selenium.webdriver import ActionChains

# 移动到元素 menu 然后点击 hidden_submenu 按钮
menu = driver.find_element_by_css_selector(".nav")
hidden_submenu = driver.find_element_by_css_selector(".nav #submenu1")
ActionChains(driver).move_to_element(menu).click(hidden_submenu).perform()

# 与上面你是等价的
menu = driver.find_element_by_css_selector(".nav")
hidden_submenu = driver.find_element_by_css_selector(".nav #submenu1")
actions = ActionChains(driver)
actions.move_to_element(menu)
actions.click(hidden_submenu)
actions.perform()  # 这句话是执行的意思

.click(on_element=None)  # 点击某个元素。点完就松开了
.click_and_hold(on_element=None)  # 左键点击某个元素并且不松手
.context_click(on_element=None)  # 右键点击某个元素
.double_click(on_element=None)  # 双击某个元素
.drag_and_drop(source, target)  # 按住源元素上的鼠标左键, 然后移动到目标元素并释放鼠标按钮
.drag_and_drop_by_offset(source, xoffset, yoffset)  # 按住源元素上的鼠标左键，然后移动到目标偏移量并释放鼠标按钮。
.key_down(value, element=None)  # 只发送一个按键，不释放它。比如使用 Control, Alt and Shift 的时候
.key_up(value, element=None)  # 释放修改键
.move_by_offset(xoffset, yoffset)  # 将鼠标移动到当前鼠标位置的偏移量。
.move_to_element(to_element)  # 将鼠标移动到元素的中间。
.move_to_element_with_offset(to_element, xoffset, yoffset)  # 将鼠标移动指定元素的偏移量
.pause(s)  # 暂停所有输入达指定的持续时间（以秒为单位）
.perform()  # 执行所有存储的操作
.release(on_element = None )  # 释放元素上按住的鼠标键
.reset_actions()  # 清除已存储在远端的操作。
.send_keys(* keys_to_send )  # 将键发送到当前的焦点元素
.send_keys_to_element(element，* keys_to_send )  # 将键发送到元素
```

```python
from selenium.webdriver.support import expected_conditions as EC  # 提供了一组预定义的条件供WebDriverWait使用
.alert_is_present()  # 希望有警报出现
.element_located_selection_state_to_be(locator,is_selected)  # 期望找到一个元素并检查指定的选择状态是否处于该状态. is_selected的元组是布尔值
.element_located_to_be_selected()  # 选择对要定位的元素的期望。定位符是（按路径）的元组
.element_selection_state_to_be()  # 用于检查是否选择了给定元素的期望。元素是WebElement对象is_selected是布尔值
.element_to_be_clickable()  # 用于检查元素的期望是可见的并且已启用，因此您可以单击它
.element_to_be_selected()  # 选择检查选择的期望
.frame_to_be_available_and_switch_to_it()  # 用于检查给定帧是否可切换到的期望。如果该框架可用，它将给定的驱动程序切换到指定的框架
.invisibility_of_element_located()  # 用于检查元素在DOM上不可见或不存在的期望. 用于查找元素的定位器
.new_window_is_opened()  # 期望将打开一个新窗口并增加窗口句柄的数量
.number_of_windows_to_be()  # 期望窗口数为一定值
.presence_of_all_elements_located()  # 期望检查网页上是否存在至少一个元素。定位器用于查找元素，找到后返回
.presence_of_element_located()  # 期望检查页面的DOM上是否存在元素。这并不一定意味着该元素是可见的。定位器-用于查找元素，找到后返回
.staleness_of()  # 等待直到元素不再附加到DOM。element是要等待的元素。如果该元素仍附加在DOM上，则返回False，否则返回true
.text_to_be_present_in_element()  # 用于检查指定元素中是否存在给定文本的期望。文字定位器
.text_to_be_present_in_element_value()  # 用于检查给定文本是否存在于元素的定位器中的期望
.title_contains()  # 当前URL是否包含区分大小写的子字符串
.url_changes(url)  # 期望检查当前URL. url是期望的url，如果不相同，则不能完全匹配，否则返回True，否则返回false. 改变了就行
.url_contains()
.url_to_be()  # 期望检查当前URL。url是预期的url，必须完全匹配，如果标题匹配，则返回True，否则返回false。这个就是要完全变为这样
.visibility_of()  # 期望检查已知在页面DOM上存在的元素是否可见
.visibility_of_any_elements_located()  # 期望检查网页上是否存在至少一个元素。定位器用于查找元素，找到后返回WebElement列表
.visibility_of_element_located()  # 期望检查元素是否存在于页面的DOM上并且可见。可见性意味着不仅显示元素，而且其高度和宽度都大于0
```


<br/>

:::info 👇👇👇
**本文作者:** Czasg
**版权声明:** 转载请注明出处哦~👮‍
:::