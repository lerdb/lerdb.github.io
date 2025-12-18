---
title: 极限与双阶乘
date: 2024-10-11 10:13:00
updated: 2024-10-11 11:27:00
categories: 数学笔记
tags:
  - 数学
  - 极限
# top: 1
---

## [双阶乘](https://baike.baidu.com/item/%E5%8F%8C%E9%98%B6%E4%B9%98)的定义

$n!!=\displaystyle\prod^{[\frac{n}{2}]-1}_{k=0}(n-2k)$

当n为偶数时 $n!!=\displaystyle\prod^{\frac{n}{2}}_{k=1}(2k)=n*(n-2)*\dotsi*4*2$  
当n为奇数时 $n!!=\displaystyle\prod^{\frac{n+1}{2}}_{k=1}(2k-1)=n*(n-2)*\dotsi*3*1$

其实我们可以用我们学过的阶乘表示

当n为偶数时 $n!!=\frac{n!}{\sqrt{2^{n-1}}(\frac{n-1}{2})!}$  
当n为奇数时 $n!!=\frac{n!}{\sqrt{2^n}(\frac{n}{2})!}$

## 极限与双阶乘

我们有一道题，题目如下  
证明 $\lim\limits_{n\to\infin}\frac{(2n-1)!!}{(2n)!!}=0$

我们令 $x_n=\frac{(2n-1)!!}{(2n)!!}=\frac{1*3*\dotsi*(2n-1)}{2*4*\dotsi*(2n)}$  
$y_n=\frac{2*4*\dotsi*(2n)}{3*5*\dotsi*(2n+1)}$  
则由[糖水不等式](https://baike.baidu.com/item/%E7%B3%96%E6%B0%B4%E4%B8%8D%E7%AD%89%E5%BC%8F)有 $x_n<y_n$  
即 $x_n^2<x_n*y_n=\frac{1}{2n+1}$  
$\therefore0<x_n<\frac{1}{\sqrt{2n+1}}$  
$\because\lim\limits_{n\to\infin}\frac{1}{\sqrt{2n+1}}=0$  
由[夹逼定理](https://baike.baidu.com/item/%E5%A4%B9%E9%80%BC%E5%AE%9A%E7%90%86)得 $\lim\limits_{n\to\infin}x_n=0$

## 拓展

求 $\lim\limits_{n\to\infin}\sqrt[n]{\frac{(2n-1)!!}{(2n)!!}}$

令 $x_n=\frac{(2n-1)!!}{(2n)!!}=1*\frac{3}{2}*\frac{5}{4}*\dotsi*\frac{2n-1}{2n-2}*\frac{1}{2n}$  
$\because1*\frac{3}{2}*\frac{5}{4}*\dotsi*\frac{2n-1}{2n-2}>1$  
$\therefore\frac{1}{2n}<x_n<\frac{1}{\sqrt{2n+1}}$  
$\therefore\frac{1}{\sqrt[n]{2n}}<\sqrt[n]{\frac{(2n-1)!!}{(2n)!!}}<\frac{1}{\sqrt[2n]{2n+1}}$  
$\because\lim\limits_{n\to\infin}\frac{1}{\sqrt[n]{n}}=1$  
$\therefore\lim\limits_{n\to\infin}\frac{1}{\sqrt[n]{2n}}=1,\lim\limits_{n\to\infin}\frac{1}{\sqrt[2n]{2n+1}}=1$  
由[夹逼定理](https://baike.baidu.com/item/%E5%A4%B9%E9%80%BC%E5%AE%9A%E7%90%86)得 $\lim\limits_{n\to\infin}\sqrt[n]{\frac{(2n-1)!!}{(2n)!!}}=1$

下证 $\lim\limits_{n\to\infin}\frac{1}{\sqrt[n]{n}}=1$  
$\lim\limits_{n\to\infin}\frac{1}{\sqrt[n]{n}}=\lim\limits_{n\to\infin}n^{-\frac{1}{n}}=\lim\limits_{n\to\infin}e^{-\frac{\ln n}{n}}$  
由[洛必达法则](https://baike.baidu.com/item/%E6%B4%9B%E5%BF%85%E8%BE%BE%E6%B3%95%E5%88%99)得 $\lim\limits_{n\to\infin}\frac{\ln n}{n}=\lim\limits_{n\to\infin}\frac{1}{n}=0$  
$\therefore\lim\limits_{n\to\infin}e^{-\frac{\ln n}{n}}=e^0=1$

即证毕.
