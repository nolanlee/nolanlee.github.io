---
layout: article_layout
title: HTTP 概要
isCate: false
---
HTTP是是互联网上应用最为广泛的一种网络协议,全称为 Hypertext Transfer Protocol (超文本传输协议).

## HTTP的相关元素

### 1. Web客户端和服务器

* Web 客户端`(浏览器)`发送 *HTTP请求*`(输入百度网址)`, 请求 Web 服务器存储的数据`(请求百度服务器的百度首页)`.
* Web 服务器`(百度的服务器)`接受 *HTTP 请求*`(接受到浏览器的请求)`, 在 *HTTP 响应*中回送所请求的数据`(将百度的 html 页面返回给浏览器进行渲染展示)`.

### 2. 资源

Web 服务器是 Web 资源的宿主,而 Web 资源是 Web 内容的源头.

* 静态资源 `(图片,视频,文本)`,此时的资源就是内容.
* 动态资源 `(由程序动态生成的内容,比如实时天气,股票交易,在线购物)`,此时的资源是生成内容的工具.
<!--more-->

#### 3. 媒体类型

Web 内容的类型成千上万,客户端需要通过从服务端请求回来的内容进行判断类型从而以正确的方式打开.

操作系统一般是通过文件名后缀来判断文件类型,而在 Web 客户端中,一般通过*HTTP 响应*结果中携带的 `MIME`类型来判断其内容的格式.

MIME(MultipurposeInternetMailExtension, 多用途因特网邮件扩展),最初设计于决电子邮件中,后来被 HTTP 采纳.

MIME 类型是一种文本标记,格式为 `抽象类型/子类型`, 比如 png 格式的图片为 `image/png`.

#### 4. URI

Web 资源会在服务器中暴露自己的名字从而让客户端可以访问到,该名称被称为 `URI(Uniform Resource Identifier, 统一资源标识符)`.


##### URL

`URL(统一资源定位符)`是 URI 最常见的形式.它描述了 Web 资源的位置.

URL 由网络协议,服务器地址和资源地址组成, 比如 `http://(协议)www.baidu.com(服务器地址)/example.png(资源地址)`.

##### URN

`URN(统一资源名)`指用名称作为唯一标识. 如 `urn:internet:china:tiananmen`.

由于缺乏一个支撑架构解析资源的位置,URN 仍处于试验阶段,还未大范围使用.


#### 5. 事务

一个 HTTP 事务有一个 HTTP 请求命令和 HTTP 响应结果组成.

请求和响应是以名为 HTTP message(报文)来格式化数据的.

如 HTTP 请求报文:

```
GET /example.png HTTP/1.0
Host: www.baidu.com

```
如 HTTP 响应报文:

```
HTTP/1.0 200 OK
Content-type: image/png
Content-length: 8529

(此处应该是 example.png 这个图片)

```

##### 方法

**待续**
