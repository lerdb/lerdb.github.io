---
title: 搭建博客踩的坑
date: 2024-05-02 17:00:00
updated: 2024-05-05 17:00:00
categories: 博客记录
tags:
  - Blog
  - 踩坑
---

这篇博客用来记录一下我在用 valaxy 和 GitHub Pages 搭建博客时踩过的坑

## GitHub Actions 权限

在第一次提交后触发了 GitHub Actions, 但是 GitHub Actions 并没有新建 gh-pages 分支, 需要手动给 GitHub Actions 加上权限才行

```yml
# Sets permissions of the GITHUB_TOKEN to allow deployment to GitHub Pages
permissions:
  contents: write // [!code warning]
  pages: write
  id-token: write
```

尤其要注意 permissions 下的 contents 要为 `write` 才能新建分支

在 GitHub Actions 构建并推送完成后, 还需要去仓库的 `Settings` -> `Pages` -> `Build and deployment` -> `Source` 里改成 `Deploy from a branch` , 并在下方的 `Branch` 里面选择 `gh-pages` 分支, 文件夹默认 `/(root)`

走到这一步, 博客才算是搭建完成

## 布局覆盖

当前主题的404界面过于单调, 想着不如美化一下, 我就动手修改了 `/pages` 目录下的 `404.md` 文件

不料, 所有的修改均不生效, 随后我把 `layout: 404` 注释之后, 却被识别成了一篇文章, 而不是 404 界面

在询问了一下 ~~开发者~~ 好群友后, 我得知应该修改 `/layouts` 下的 `404.vue` 文件, 使其替代主题的布局

`404.vue` 的示例文件可在 [valaxy 主题橱窗](https://valaxy.site/themes/gallery) 里找到

[点我直达](https://github.com/YunYouJun/valaxy/blob/main/packages/valaxy-theme-yun/layouts/404.vue)

## 其他

没啥其他的了, 也就写 KaTeX 公式的时候发现不能两个`{` 或者 `}` 一起写, 中间要有空格, 不然会报错
