---
title: 前端元素自动铺满换行
authors: [czasg]
tags: [前端]
---

主要有三种方式：
- inline-block
- flex + flex-wrap
- grid

<!--truncate-->

## inline-block
在子元素中增加`inline-block`属性
```css
.block {
    display: inline-block;
}
```

## flex
在父元素中使用，此时不能设置高度。
```css
.block {
    display: flex;
    flex-wrap: wrap;
}
```
因为`flex-wrap`属性指定`flex`元素单行显示还是多行显示，设置了高度将会平铺。

## grid
在父元素中使用，此时不根据大小平铺，而是强制平铺
```css
.block {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr; /*横向排布时，宽度均分为三等分*/
}
```

<br/>

:::info 👇👇👇
**本文作者:** Czasg
**版权声明:** 转载请注明出处哦~👮‍
:::
