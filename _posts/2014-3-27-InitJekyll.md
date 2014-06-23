---
layout: article_layout
title: 用够酷的Jekyll搭建够酷的博客
isCate: true
table: [what-is-jekyll$什么是Jekyll, install-jekyll$安装Jekyll, create-sample$用Jekyll搭建一个简单的博客, new-artist$新建博文, configure-github-page$配置Github Page]
---

Hey，如果你想快速地开发一个够酷够独特的博客网站，可是不会用内容管理系统；或者不想使用免费的但是因各种限制而体验糟糕的博客托管平台；又或者像我一样是个专注于前端，对后端开发和数据库一头雾水的程序员，那么你一定要了解接下来我要介绍的这个简洁的，面向博客的静态页面生成引擎 [**Jekyll**](http://jekyllrb.com/) 以及 [**Github Pages**](http://pages.github.com/) 服务。

<h2 id="what-is-jekyll">什么是Jekyll</h2>

Jekyll是由Github创始人[Tom Preston-Werner](http://tom.preston-werner.com/) 在2008年发起的一个开源项目。这个项目的目的，引用作者的话话来说，&quot;[Blogging Like a Hacker](http://tom.preston-werner.com/2008/11/17/blogging-like-a-hacker.html) (像黑客一样写博客)&quot;。有没有一种不明觉厉的酷毙了的感觉?!

<!--more-->

简单来说，Jekyll的作用是将页面布局，博客文章根据一定规则整合在一起生成一个静态的博客网站。它相比于WordPress之类的需要通过后端PHP动态生成博客的系统来说有以下几个优势：

###加载速度快
后端无需执行代码，直接将静态文件返回客户端即可。

###容易部署和维护
由Jekyll生成的静态页面工程就是一个简单的文件目录系统，我们只需要把这些静态文件上传到任何web服务器即可，不需要在服务器上部署类似于LAMP这样笨重复杂的环境。

###Hacker一般的文本编辑
如果你像我一样烦透了那些体验糟糕的在线文本编辑器，那么在Jekyll下，无论是vim，sublime还是别的什么新玩意儿，你可以使用任何你喜欢和擅长的文本编辑器。不但如此，你还可以使用Markdown，Liquid和HTML来排版。

<h2 id="install-jekyll">安装Jekyll</h2>

由于Jekyll是用Ruby开发的，所以安装Jekyll需要Ruby环境才能像Jekyll官网说的 “Get up and running in seconds”。

在**Windows**下，下载并安装 [RubyInstaller](http://rubyinstaller.org/) 一键搭建Ruby环境  (注意在安装步骤里在 `Add Ruby executables to your PATH` 前面打钩，它会自动将ruby添加到系统变量PATH里) 。然后下载并解压 [Development Kit](http://rubyinstaller.org/downloads/)，在之前解压的路径下，运行 `ruby dk.rb init` 和 `ruby dk.rb install` 安装 Development-Kit。

如果是**Mac OS**或者**Linux**环境下，可以参考 [《如何快速正确的安装 Ruby, Rails 运行环境》](http://ruby-china.org/wiki/install_ruby_guide) 一文，里面介绍的很详细。

由于国内网络原因，需要更改Gem源。请参考 [《更改 Ruby Gem 镜像》](http://ruby.taobao.org/) 。

Ruby环境搭建完后，打开控制台输入命令 `gem install jekyll` (Linux或者Mac OS可能需要在前面加 `sudo` 通过管理员权限安装)。

(如果你到这里还没有搭建成功Jekyll环境，并且内心已经被一万头草泥马践踏而过，请在全部阅读完以后联系我！)

<h2 id="create-sample">用Jekyll搭建一个简单的博客</h2>

打开终端，输入 `jekyll new myblog` 。这样Jekyll会在当前目录下生成一个*Hello World*式的简单Jekyll系统。输入`cd myblog` 和 `jekyll server` 启动这个系统。在浏览器地址栏输入 `localhost：4000` 来打开myblog网站，如下图所示：

![myblog-snipshot]({{site.baseurl}}image/snipshot/simple-blog.PNG)

没错，现在已经可以用这个简单的系统来开始写你的博客啦！
下面是这个Jekyll系统的目录结构：

~~~
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
~~~

###\_layouts目录正如它的名字一样，存放一些用于布局的HTML文件

在每个layout文件里都应该添加 `{{"{{"}} content }}` 占位符。这个占位符是[Liquid](https://github.com/Shopify/liquid) (一个Ruby支持的模板语言) 表达式。当你的某个页面引用这个layout时，这个页面就会填充到 `{{"{{"}} content }}` 当中。Jekyll所有的页面，无论是html还是markdown，都支持Liquid表达式。在 `default.html` 和 `post.html` 里面还可以看到类似于 `{{"{{"}} page.title }}` 的Liquid表达式，这些都是Jekyll预定义的一些变量，这些变量的具体描述可以参考 [Jekyll 预定义变量](http://jekyllrb.com/docs/variables/) 的具体描述。

###\_posts目录就是存放我们博客文章的地方

文章的文件名需要遵循 `年-月-日-文章简称` 的格式，否则Jekyll在build的时候会忽略那些非法命名的文件甚至build失败。`_post`里的文件格式支持`html`和`markdown`。

###\_site目录以及里面的内容由jekyll build时候生产，我们不用理会。

###css目录存放博客所需要的样式表

类似的我们也可以建立存放js，image等文件的文件夹。

###.gitignore存放git需要忽略的目录或文件，里面的默认值为_site。

###\_config.yml是当前博客项目的配置文件

里面可以配置一些全局变量和所需要的插件。在我们当前这个myblog项目的配置文件里面配置了博客的名字，markdown解析器 `redcarpet` 和语法高亮工具 `pygments`。

###index.html就是博客的首页了

当我们在浏览器访问根域名时，Jekyll会帮我们自动跳转到index.html页面。

<h2 id="new-artist">新建博文</h2>

正如上文说的，新建的博文需要放在**\_post**目录里面，并且以`年-月-日-文章简称`的格式命名文件。这里给大家留个小问题，如果命名为`2013-2-30-ValidDate.md`，然后输入`jekyll build`会发生什么?如果命名为`2013-13-30-InvalidDate.md`又会怎样?

在每篇博文前面都有一个可选的[YAML](http://zh.wikipedia.org/zh-cn/YAML)(JSON的超集)格式的配置项，如下所示。

~~~
---
layout: post
title:  "Welcome to Jekyll!"
date:   2014-03-31 09:22:24
categories: jekyll update
---
~~~

其中Jekyll预定义了一些字段， 除了上面例子列举的`layout`，`date`，`categories`之外，还有比如`permalink`，`published`，`tags`等，具体描述请参考[官方文档](http://jekyllrb.com/docs/frontmatter/)。上面例子中`title`变量并不是Jekyll预定义的，所以用户也可以在其中自定义一些变量，然后通过Liquid表达式 `{{"{{"}} page.title }}` 来引用。
最后，在配置项下面可以尽情挥洒笔墨来撰写博文了。

<h2 id="configure-github-page">配置Github Page</h2>

上面介绍过搭建Jekyll运行环境的内容，但我猜懒懒的你一定还是嫌麻烦--怎么又是`Ruby`又是`Gem`的，还可能有什么网络问题，这不是坑爹嘛。莫急莫急，Github Page已经帮你搞定这一切啦，并且它还可以提供独立的二级域名，更重要的，它是免！费！的！

首先你需要在[Github](https://github.com/)注册一个账号。然后在[Create a new repository(新建仓库)](https://github.com/new)页面的Repository name(仓库名)一栏填写`账号名.github.io`。点击下面的按钮`Create repository`完成创建。

然后把本地的Jekyll工程利用本地Git或Github工具`push`到该repository里。大概十分钟的build时间，你就可以在`账号名.github.io`访问自己的博客了。(本文不作Git的用法介绍，具体使用方法可以参考[官方文档](http://git-scm.com/documentation))。

##最后

如果你还意犹未尽，并蠢蠢欲动的要搭建自己的博客，那就赶紧行动吧。也敬请期待后面Jekyll更多功能介绍的文章。

**明天太晚，只争朝夕**。

*借此感谢 **Jekyll** 和 **Github**，感谢Tom Preston-Werner。*
