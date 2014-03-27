---
layout: article_layout
title: 像黑客一样写博客
---

Hey，如果你想快速地开发一个够酷够独特的博客网站，但是不会用内容管理系统；或者不想使用免费的但是因各种限制而体验糟糕的博客托管平台；又或者像我一样是个专注于前端，对后端开发和数据库一头雾水的程序员，那么你一定要了解接下来我要介绍的这个简洁的，面向博客的静态页面生成引擎 [**Jekyll**](http://jekyllrb.com/) 以及 [**Github Pages**](http://pages.github.com/) 服务。

##什么是Jekyll

Jekyll是由Github创始人[Tom Preston-Werner](http://tom.preston-werner.com/) 在2008年发起的一个开源项目。这个项目的目的，引用作者的话"[Blogging Like a Hacker](http://tom.preston-werner.com/2008/11/17/blogging-like-a-hacker.html) (像黑客一样写博客)"。是不是酷极了？！

简单来说，Jekyll的作用是将页面布局，博客文章根据一定规则整合在一起生成一个静态的博客网站。她相比于WordPress之类的需要 通过后端PHP动态生成博客的系统来说有以下几个优势：

###加载速度快
后端无需执行代码，直接将静态文件返回客户端即可。

###容易部署和维护
由Jekyll生成的静态页面工程就是一个简单的文件目录系统，我们只需要把这些静态文件上传到任何web服务器即可，不需要在服务器上部署类似于LAMP这样笨重复杂的环境。

###Hacker一般的文本编辑
如果你像我一样烦透了那些体验糟糕的在线文本编辑器，那么在Jekyll下，无论是vim，sublime还是别的什么新玩意儿，你可以使用任何你喜欢和擅长的文本编辑器。不但如此，你还可以使用Markdown，Liquid和HTML来排版。

##安装Jekyll

由于Jekyll是用Ruby开发的，所以安装Jekyll需要Ruby环境才能像Jekyll官网说的 “Get up and running in seconds”。

在**Windows**下，下载并安装 [RubyInstaller](http://rubyinstaller.org/) 一键搭建Ruby环境  (注意在安装步骤里在 `Add Ruby executables to your PATH` 前面打钩，它会自动将ruby添加到系统变量PATH里) 。然后下载并解压 [Development Kit](http://rubyinstaller.org/downloads/)，在之前解压的路径下，运行 `ruby dk.rb init` 和 `ruby dk.rb install` 安装 Development-Kit。

如果是**Mac OS**或者**Linux**环境下，可以参考 [《如何快速正确的安装 Ruby, Rails 运行环境》](http://ruby-china.org/wiki/install_ruby_guide) 一文，里面介绍的很详细。

由于国内网络原因，需要更改Gem源。请参考 [《更改 Ruby Gem  镜像》](http://ruby.taobao.org/) 。

最后，打开控制台输入命令 `gem install jekyll` (Linux或者Mac OS可能需要在前面加 `sudo` 通过管理员权限安装)。
