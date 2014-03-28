---
layout: article_layout
title: 用够酷的Jekyll搭建够酷的博客
isCate: true
table: [what-is-jekyll$什么是Jekyll, install-jekyll$安装Jekyll, create-sample$用Jekyll搭建一个简单的博客]
---

Hey，如果你想快速地开发一个够酷够独特的博客网站，可是不会用内容管理系统；或者不想使用免费的但是因各种限制而体验糟糕的博客托管平台；又或者像我一样是个专注于前端，对后端开发和数据库一头雾水的程序员，那么你一定要了解接下来我要介绍的这个简洁的，面向博客的静态页面生成引擎 [**Jekyll**](http://jekyllrb.com/) 以及 [**Github Pages**](http://pages.github.com/) 服务。

##什么是Jekyll{:#what-is-jekyll}

Jekyll是由Github创始人[Tom Preston-Werner](http://tom.preston-werner.com/) 在2008年发起的一个开源项目。这个项目的目的，引用作者的话话来说，&quot;[Blogging Like a Hacker](http://tom.preston-werner.com/2008/11/17/blogging-like-a-hacker.html) (像黑客一样写博客)&quot;。有没有一种不明觉厉的酷毙了的感觉?!<!--more-->

简单来说，Jekyll的作用是将页面布局，博客文章根据一定规则整合在一起生成一个静态的博客网站。她相比于WordPress之类的需要 通过后端PHP动态生成博客的系统来说有以下几个优势：

###加载速度快
后端无需执行代码，直接将静态文件返回客户端即可。

###容易部署和维护
由Jekyll生成的静态页面工程就是一个简单的文件目录系统，我们只需要把这些静态文件上传到任何web服务器即可，不需要在服务器上部署类似于LAMP这样笨重复杂的环境。

###Hacker一般的文本编辑
如果你像我一样烦透了那些体验糟糕的在线文本编辑器，那么在Jekyll下，无论是vim，sublime还是别的什么新玩意儿，你可以使用任何你喜欢和擅长的文本编辑器。不但如此，你还可以使用Markdown，Liquid和HTML来排版。

##安装Jekyll{:#install-jekyll}

由于Jekyll是用Ruby开发的，所以安装Jekyll需要Ruby环境才能像Jekyll官网说的 “Get up and running in seconds”。

在**Windows**下，下载并安装 [RubyInstaller](http://rubyinstaller.org/) 一键搭建Ruby环境  (注意在安装步骤里在 `Add Ruby executables to your PATH` 前面打钩，它会自动将ruby添加到系统变量PATH里) 。然后下载并解压 [Development Kit](http://rubyinstaller.org/downloads/)，在之前解压的路径下，运行 `ruby dk.rb init` 和 `ruby dk.rb install` 安装 Development-Kit。

如果是**Mac OS**或者**Linux**环境下，可以参考 [《如何快速正确的安装 Ruby, Rails 运行环境》](http://ruby-china.org/wiki/install_ruby_guide) 一文，里面介绍的很详细。

由于国内网络原因，需要更改Gem源。请参考 [《更改 Ruby Gem  镜像》](http://ruby.taobao.org/) 。

最后，打开控制台输入命令 `gem install jekyll` (Linux或者Mac OS可能需要在前面加 `sudo` 通过管理员权限安装)。

##用Jekyll搭建一个简单的博客{:#create-sample}

打开终端，输入 `jekyll new myblog` 。这样Jekyll会在当前目录下生成一个*Hello World*式的简单Jekyll系统。输入`cd myblog` 和 `jekyll server` 启动这个系统。在浏览器地址栏输入 `localhost：4000` 来打开myblog网站，如下图所示：

![myblog-snipshot]({{site.baseurl}}image/snipshot/simple-blog.PNG)

没错，现在已经可以用这个简单的系统来开始写你的博客啦！查看这个Jekyll系统的目录结构：

```
——_layouts
 |——default.html
 |——post.html
——_posts
 |——2014-02-31-welcome-to-jekyll.markdown
——_site
——css
 |——main.css
 |——syntax.css
——.gitignore
——_config.yml
——index.html
```

###\_layouts目录正如它的名字一样，存放一些用于布局的HTML文件

在每个layout文件里都应该添加 `{{"{{"}} content }}` 占位符。这个占位符是[Liquid](https://github.com/Shopify/liquid) (一个Ruby支持的模板语言) 表达式。当你的某个页面引用这个layout时，这个页面就会填充到 `{{"{{"}} content }}` 当中。Jekyll所有的页面，无论是html还是markdown，都支持Liquid表达式。在 `default.html` 和 `post.html` 里面还可以看到类似于 `{{"{{"}} page.title }}` 的Liquid表达式，这些都是Jekyll预定义的一些变量，这些变量的具体描述可以参考 [Jekyll 预定义变量](http://jekyllrb.com/docs/variables/) 的具体描述。

###\_posts目录就是存放我们博客文章的地方

文章的文件名需要遵循 `年-月-日-文章简称` 的格式，否则Jekyll在build的时候会忽略那些非法命名的文件。

###\_site目录以及里面的内容由jekyll build时候生产，我们不用理会。

###css目录存放博客所需要的样式表

类似的我们也可以建立存放js，image等文件的文件夹。

###.gitignore存放git需要忽略的目录或文件，里面的默认值为_site。

###\_config.yml是当前博客项目的配置文件

里面可以配置一些全局变量和所需要的插件。在我们当前这个myblog项目的配置文件里面配置了博客的名字，markdown解析器 `redcarpet` 和语法高亮工具 `pygments`。

###index.html就是博客的首页了 \[TO BE CONTINUE\]