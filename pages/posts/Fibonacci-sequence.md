---
title: 斐波那契数列的推广
date: 2024-05-01 13:00:00
updated: 2024-05-02 16:30:00
categories: 数学笔记
tags:
  - 数学
  - 数列
# top: 1
---

# 别看了, 还没写完

## 前言

我们已经知道[斐波那契数列](https://baike.baidu.com/item/%E6%96%90%E6%B3%A2%E9%82%A3%E5%A5%91%E6%95%B0%E5%88%97)是什么了

::: details 什么? 你不知道? 没事, 点此展开查看简要说明

在数学上, 斐波那契数是以递归的方法来定义:

$F_0=0$

$F_1=1$

$F_n = F_{n-1} + F_{n-2} \left( n \geqq{2} \right)$

用文字来说, 就是斐波那契数列由0和1开始, 之后的斐波那契数就是由之前的两数相加而得出.

所以斐波那契数列的前几项分别是1、 1、 2、 3、 5、 8、 13、 21、 34、 55、 89 ......

:::warning

特别指出: 0不是第一项, 而是第零项.

:::

并且, 我们知道了斐波那契数列的通项公式.

$$
F_n = \frac{
  \left(
    \frac{ {1} + \sqrt{5} }{2}
  \right) ^ {n}
  +
  \left(
    \frac{ {1} - \sqrt{5} }{2}
  \right) ^ {n}
}{ \sqrt{5} }
$$

由此, 我们就有了一个大胆的猜想, 我们为何仅仅局限于斐波那契数列的形式呢

## 正文

我们猜想, 对于一个数列 $a_n (n \geqq {0})$ 如果满足以下形式, 是否能推导出其通项公式

$a_0 = 0$

$a_1 = 1$

$a_n = k a_{n-1} + t a_{n-2} (k, t \in R, n \geqq 2)$

---

我们尝试使用初等代数求解(~~才不是因为我不会线性代数呢~~)

### 构造等比数列

对于 $a_n = k a_{n-1} + t a_{n-2}$ 这种递推形式, 我们不太好求解, 于是我们构造以下这个数列

设 $a_n + m a_{n-1} = n \left( a_{n-1} + m a_{n-2} \right)$

化简得 $a_n = \left( {n-m} \right) a_{n-1} + {mn} a_{n-2}$

与 $a_n = k a_{n-1} + t a_{n-2}$ 联立得

$$\begin{cases}
   n - m = k
   \\
   mn = t
\end{cases}$$

解得

$$\begin{cases}
   m = \frac{-k \pm \sqrt{ k^2 + 4t} }{2}
   \\
   n = \frac{k \pm \sqrt{ k^2 + 4t} }{2}
\end{cases}$$

我们发现, 如果 ${k^2 + 4t} \ngeqq {0}$ , 那么我们将无法把它构造成这个形式, 我们这时候该怎么办呢?

我们稍后再讨论 ${k^2 + 4t} \ngeqq {0}$ 的情况, 这里我们规定 ${k^2 + 4t} \geqq {0}$

那么我们最初的形式 ( $a_n = k a_{n-1} + t a_{n-2}$ ) 就可以化为如下形式

$$
a_n + \frac{-k \pm \sqrt{ k^2 + 4t} }{2} a_{n-1}
= \frac{k \pm \sqrt{ k^2 + 4t} }{2}
\left(
  a_{n-1} + \frac{-k \pm \sqrt{ k^2 + 4t} }{2} a_{n-2}
\right)
$$

### 求出构造的数列的通项公式

我们令 $b_n = a_n + \frac{-k \pm \sqrt{ k^2 + 4t} }{2} a_{n-1} \left( n \geqq 1 \right)$

那么就有 $b_n = \frac{k \pm \sqrt{ k^2 + 4t} }{2} b_{n-1}$

我们又知道 $b_1 = a_1 + \frac{-k \pm \sqrt{ k^2 + 4t} }{2} a_0 = 1$

由累乘法得 $b_n = { \left( \frac{k \pm \sqrt{ k^2 + 4t} }{2} \right) }^{n-1} b_1 = { \left( \frac{k \pm \sqrt{ k^2 + 4t} }{2} \right) }^{n-1}$

我们就得出了构造的等比数列的通项公式, 即

$$
b_n = { \left( \frac{k \pm \sqrt{ k^2 + 4t} }{2} \right) }^{n-1}
$$

### 求出原数列的通项公式

在上一步中, 我们已经求得了 $b_n$ 的通项公式, 接下来我们继续求 $a_n$ 的通项公式

将 $b_n$ 的通项带入已转化的形式,即可得到如下形式

$$
a_n + \frac{-k \pm \sqrt{ k^2 + 4t} }{2} a_{n-1}
= { \left( \frac{k \pm \sqrt{ k^2 + 4t} }{2} \right) }^{n-1}
\left( n \geqq 1 \right)
$$

即

$$
a_n = - \frac{-k \pm \sqrt{ k^2 + 4t} }{2} a_{n-1} +
{ \left( \frac{k \pm \sqrt{ k^2 + 4t} }{2} \right) }^{n-1}
\left( n \geqq 1 \right)
$$

我们设如下形式

$$
a_n + \lambda = - \frac{-k \pm \sqrt{ k^2 + 4t} }{2} \left( a_{n-1} + \lambda \right)
\left( n \geqq 1 \right)
$$

化简后带入原式解得
$$
\lambda
= \frac{ { \left( \frac{k \pm \sqrt{ k^2 + 4t} }{2} \right) }^{n-1} }
{ - \frac{-k \pm \sqrt{ k^2 + 4t} }{2} - 1}
$$

我们再令 $c_n = a_n + \lambda$ , 所以有

$$
c_n = - \frac{-k \pm \sqrt{ k^2 + 4t} }{2} c_{n-1}
\left( n \geqq 1 \right)
$$

又因为 $c_1 = a_1 + \lambda = 1 + \lambda$ , 由累乘法可得

$$
c_n = \left( - \frac{-k \pm \sqrt{ k^2 + 4t} }{2} \right) ^ {n-1} c_1
= \left( - \frac{-k \pm \sqrt{ k^2 + 4t} }{2} \right) ^ {n-1}
\left( 1 + \lambda \right)
$$

所以

$$
a_n = c_n - \lambda
= \left( - \frac{-k \pm \sqrt{ k^2 + 4t} }{2} \right) ^ {n-1}
\left( 1 + \lambda \right) - \lambda
$$

将 $\lambda$ 的值带入并化简可得

<!-- $$
a_n =
\left(
  \left(
    - \frac{-k \pm \sqrt{ k^2 + 4t} }{2}
  \right) ^ {n} -1
\right)

\frac{ {
  \left( \frac{k \pm \sqrt{ k^2 + 4t} }{2} \right)
}^{n-1} }

{ - \frac{-k \pm \sqrt{ k^2 + 4t} }{2} - 1}
$$ -->

$$
a_n =
\frac{
  \frac{
    \left( k \pm \sqrt{ k^2 + 4t} \right) ^ {n-1}
  }{ 2^{n-3} } -
  \left( k \pm \sqrt{ k^2 + 4t} \right)
  \left( -t \right) ^{n-1}
}{
  2 - k \pm \sqrt{ k^2 + 4t}
}
$$

~~我是不是哪里写错了, 怎么那么难化简的, 而且这个形式好奇怪~~

等我捋清楚思路再写一次
