---
title: golang 的 CSP&GMP 模型
authors: [czasg]
tags: [golang]
---


<!--truncate-->

## CSP
在 go 中有一种推崇的并发模式， 叫 CSP（communicating sequential processes）并发模式。比较经典的一句话是：  
**不要以共享内存的方式来通信，相反，以通信的方式来共享内存。**

在常见的多线程共享内存的模式中，当涉及到多线程操作共享数据时，一般需要通过加锁来保证数据和线程安全。  

go 则引入了 chan 信道，可以用于多 goroutine 之间的通信。

## GMP 
GMP 类似一种生产者消费者模式。

* G：goroutine，此处指协程。
* M：machine，此处指内核线程。
* P：processor，此处指调度器。


<br/>

:::info 👇👇👇
**本文作者:** Czasg
**版权声明:** 转载请注明出处哦~👮‍
:::