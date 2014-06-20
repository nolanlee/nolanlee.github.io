---
layout: article_layout
title: 流线型移动交互
isCate: true
table: [Task-Oriented-Design$任务导向是式设计, Memery$记忆, Routing$路由, Perceived-Speed$可观测的速度, Focus-On-What-Matters$专注于真正重要的东西]
---
# 流线型移动交互 (Streamlining Mobile Interactions)

移动网络是一个非常残酷(harsh)环境：移动处理器要比桌面处理器慢；网络连接脆弱(flaky)；带宽(bandwidth)低；延迟(latency)高；触摸屏键盘反应慢。最好的移动网络应用擅长于处理这些挑战。

这篇文章中，我们将看到流线型移动交互的四个核心方式：
1. 确定(identify)用户想要在移动设备所实现的任务。
2. 记住(memorize)尽可能多的用户的情景。
3. 相信(presume)用户行为会成功并把他们带到下一个任务中。
4. 预测(predict)用户的下一个行为并且做好相应准备。<!--more-->

<h2 id="Task-Oriented-Design">任务导向式设计(Task-Oriented Design)</h2>

首当其冲的：为什么你的用户在这里？

桌面用户在很长的时间周期中保持了大量的web应用的开放，导致所有他们需要的有用的信息都唾手可得。但是，当一个任务需要完成的时候**移动设备偶尔才被使用**。用户可能查看下Twitter当他们无聊并且想看下朋友发的文章的时候。也许他们正在登机的时候给朋友发送一个晚餐计划或者查看下公交的时间表。他们有一项任务正在尝试完成，当他们完成以后他们的手机便会放回口袋。

让我们说一说你负责的Mobile Air的移动体验。在桌面版，Mobile Air首页的所有内容都是关于交易的。
在最前列(forefront)有票价折扣(fare discount)广告，迷人的旅游景点和一个旅行规划师。在角落里有个选择航班的选项框，用来查看你的航班状态和奖励大纲(rewards program)。

对于桌面用户，我们专注于花更长时间和精力(预订机票)的交互，因为[桌面用户比起移动用户愿意花更多的时间在页面上并且不太可能离开](http://www.webperformancetoday.com/2012/01/20/interesting-new-findings-about-page-views-time-on-site-and-bounce-rate-across-browsers-and-platforms/)，然而移动用户希望(is looking to)完成一个小任务而且他们也没有足够的耐心(patience)。另外，由于在机场的时候用手机上检查航班状态是一个很普遍的用例，我们将把它列到最前列。
![desktop-prototype-image]({{site.baseurl}}image/2014-5-30/01-desktop-opt.png)

(*对于桌面用户，我们将专注于更长时间和精力的交互*)

![mobile-prototype-image]({{site.baseurl}}image/2014-5-30/02-mobile-opt.png)

(*用户访问Mobile Air移动网页将远离首页。最突出(prominent)和最接近的任务应该是飞机状态和查票*)。

如果你在家并且想访问Mobile Air，而且有一个很棒的笔记本在咖啡桌上，你是不会把手机掏出你的口袋然后去访问它的。Mobile Air的手机网页访问者一定不是在家里的。而且很可能，他们正在旅行当中。最突出(prominent)和最接近的任务应该是航班状态和查票。预订应该是有可能的，但它不是高优先级的。先前，我们已经翻转了头部的全部体验，因为关于我们的用户为什么来我们知道得更多。

<h2 id="Memery">记忆 (Memory)</h2>

有一次一个用户已经访问过我们的网站并且查询了一个航班，我们将会知道的更多。首先，我们知道他们有一个航班激将到来。并且我们也知道他们是谁，我们会保存更多的信息在数据库中，比如过去和未来的航班。通过这些信息，我们会通过预测(anticipating)他们的行为来自定义首页。

举个例子，比如我们知道了Ann已经检票离开纽约前往旧金山。我们也知道她一些天以后将返回纽约；并且两周以后，她会到巴哈马旅行。这里是我们如何展示她的首页：
![ann-home]({{site.baseurl}}image/2014-5-30/03-memory-opt.png)

所以，我们该如何保存这些数据？我们可以保存在服务器的数据库里，然后使用客户端的cookie。这是一些常用的方式保存这样的东西。然而，这真的仅仅是移动端的交互，而且它会是一个很短的生命周期；用户只要完成了他们的飞行，他们将不再需要这些交互了。此外(additionally)，如果网络断开（当Ann在坐船或者她的手机处于飞行模式），在服务端保存这些数据意味着它不会再生效了。这里用HTML5的localStorage实现的航班信息缓存：

~~~js
// After we fetch from the server, store it:
localStorage.setItem("flights", JSON.stringify([
  { from: "NYC", to: "SFO", at: "Sun Jan 1 2012 07:45:00" },
  { from: "SFO", to: "NYC", at: "Tue Jan 3 2012 16:00:00" }
]));

// When we first open the page but before fetching from server, retrieve the data:
flights = localStorage.getItem("flights")
if (flights) {
  flights = JSON.parse(flights);
  restoreFlights(flights);
}
~~~

这里将在手机上保存航班信息，但是Ann在没有Wi-Fi的情况下是不能打开这个应用的。这就是为什么HTML5应用要缓存清单(cache manifest)的原因。一个缓存清单告诉手机那些文件需要下载并离线使用。当手机回复(regain)互联网连接，它将会更新这些文件。下面是一个简单的我们的应用的缓存。
首先是在`html`标签上添加清单：

~~~html
<html manifest="/application.manifest">
~~~

然后添加清单：

~~~
CACHE MANIFEST
  # 2013-02-14
  # v1

  # Primary assets
  /favicon.ico
  index.html
  application.css
  application.js
  images/mobile-air.jpg

  NETWORK:
  /api
~~~

这个清单告诉浏览器要缓存我们的核心应用资源(assets)但是在访问API方法时需要网络连接。这样，我们的API数据将不会被缓存。注意最上面我们有一个时间戳和版本号。任何对清单的改变将会触发缓存更新；所以，每当(whenever)你要发布一个新版本(ship a new version)， 只要更新时间戳和（或）相应的（accordingly）版本号，这样下一次用户在线的时候，他们将会获得一个新的版本。
关于这点，你可能会对浏览器是否支持这些新功能产生疑问。在移动设备上的所有约束(constraint)中，对HTML5的支持是个受欢迎的解救(relief)。HTML的本地存储(localStorage)和离线支持在Android2.1和iOS3.2+是可用的。(iOS3.2+的使用大约站97%的苹果移动设备)[http://chitika.com/ios-version-distribution]，(在Android 2.1+的移动设备上上占99%。)[http://chitika.com/insights/2013/jelly-bean-claims-14-of-android-web-usage-in-six-months]。添加对本地保存的检查是响应式的，这样我们的应用在它不可用的时候不会崩溃；但是我们不需要添加对缓存清单的检查因为我们不需要用Javascript去访问这个功能——浏览器会自动检查。

<h2 id="Routing">路由 (Routing)</h2>

关于这点，我们有一个可以离线工作的快速的应用，但是我们没有处理(tacke)关于用户刷新或者当用户重启浏览器的行为。假设(suppose)Ann正在检查她的航班状态同时在不断地(constantly)刷新。我们可以提供一个按钮去做这件事，但是如果她休眠了她的手机然后放回口袋呢？浏览器将会在一段时间后(或者在选择其他应用的时候)销毁页面状态，所以你的应用应该可以恢复状态。这便是路由的由来。

任何独立的页面应该有自己的路由，而且它应该能够在打开路由的情况下被完全载入——意味着我们必须能重新建立我们的应用状态而不用强迫Ann重新开始从首页跳转回她曾在的那个地方。为了这么做，我们需要路由。你应该自己建立一个，但是很多不同框架的好用的Javascript路由可以用。这里是Backbone.js的路由。

~~~js
// Define the router
var MobileAirRouter = Backbone.Router.extend({
  routes: {
    "": "dashboard",
    "flights/:id": "flight"
  },
  dashboard: function() {
    // Display the main dashboard
  },
  flight: function(id) {
    // Fetch flight with ID: id
    // Display flight info
  }
});

// Instantiate it
var router = new MobileAirRouter();

// Start Backbone's history tracking
Backbone.history.start()
// That will trigger whichever route matches the current url
~~~

你可以通过整合路由和本地存储系统得到一个可快速恢复的应用，甚至在没有网络的情况下。

<h2 id="Perceived-Speed">可观测的速度(Perceived Speed)</h2>

一个残酷的事实是在移动设备上以桌面版的速度发布内容是难以置信的难(**delivering content at desktop speeds is incredibly diffcult**)。大多数的移动数据提供商看连接时间都是数百毫秒。这意味着，假设(assuming)你的应用花0毫秒处理(process)请求然后手机花0毫秒出处理和渲染它，你将会有300到500毫秒的延迟等待信号穿越网络。唯一剩下的选项是作弊(cheat)。

Instagrame的用户体验被人们所称颂，其中的一个核心策略(tactic)是[乐观的性能动作(perform actions optimistically)](https://speakerdeck.com/mikeyk/secrets-to-lightning-fast-mobile-design)。这意味着当用户说，“提交更新的状态”，系统立即(immediately)说，“完成！”，然后让用户返回时间线，去添加新的照片。从来没有意识到这个数据甚至还没有离开手机。事实是(In reality)，你的照片已经在Instagram的服务器上了在你点击OK之前，并且在服务器确认以后它已经出现在你的时间线上了。可观测速度的一石二鸟！

让我们应用这样的概念(concept)在我们的移动预订(reservation)系统上。我们打算有五个页面：

1. 提交航班和日期，
2. 选择第一个地点(leg)，
3. 选择第二个地点,
4. 支付，
5. 得到确认信息


![speed-reservation]({{site.baseurl}}image/2014-5-30/04-speed-opt.png)
有次Ann选择了她的航班和日期——但是之前她已经点击了“寻找航班”的按钮——我们将为第一个地点更新信息。这样的话(this way)，如果她要(were to)更改这些值几次，我们可能承担额外的数据消耗(incur an extra data cost)，但是下个页面将会几乎瞬间显示。这里是我们如何提前更新页面:

~~~js
// Function to fetch flight legs
var fetchFlightLegs = function() {
  // Inside a closure, we keep some internal variables
  var key, deferred;

  // Return the actual fetchFlightLegs function
  return function(from, to, on, until) {
    // Make a key from the arguments, so that different
    // invocations restart the process
    var newKey = [arguments].join("-");

    // If request is not redundant, make a new request
    if (newKey !== key) {
      // Set the key
      key = newKey
      // And set the deferred to the new request
      deferred = $.get("/legs", {
        from: from,
        to: to,
        on: on,
        until: until
      });
    }
    // Return the deferred
    return deferred;
  }
}();

// Now, every time they change a field, we run:
fetchFlightLegs(from, to, on, until);

// Then, when they hit "next", we run it again
// But this time we use the results to render the page
fetchFlightLegs(from, to, on, until).done(function() {
  // render the legs page
});

// If the fields haven't changed, we piggyback on the current request,
// which has been in progress since they updated the fields
~~~

为了不积累(rack up)大量的数据，我们可能想包装我们的调用用类似Underscore.js的`_.debounce`方法，它会延迟一个特定毫秒后再执行，然后新建一个新的延迟如果这个函数被重新调用。基本上，它会让应用的获取行为(performing the fetch)“安定下来”(settle down)。

在我们的实际里，第一个地点和第二个地点的选择是在不同的屏幕上，但是这不意味着它们不得不分割(separate)请求。我们可以更新我们的`fetchFlightlegs`方法让第一个地点和第二个点的请求合并(lump)为一个。因此(thus)，从第一个到第二个会瞬间(instantaneous)过渡(transition)。支付的提交(submission of payment)信息请求不需要获取。

当支付被提交到服务器，我们将会同步地(synchronously)通知到加载中的屏幕。我们不想在这一步假设成功。另外(plus)，一个异常快速的响应真的会让Ann感到不安(uneasy)！这里是我们的有数据提前获取和没有数据提前获取的请求链：
![data-prefetched]({{site.baseurl}}image/2014-5-30/05-speed-opt.png)

正如你看到的，我们已经让应用和用户的行为并行(parallelize)。用户可以做他们需要做的(选日期，选航班，等等)，同时应用预言性的(predictively)加载下个页面的信息。这需要花很多等待的方程(waiting out of the equation)。

<h2 id="Focus-On-What-Matters">专注于真正重要的事情 (Focus On What Matters)</h2>

移动交互是一个不同的世界，不同的约束(constrains)和不同的预期。简单的添加响应式样式不能满足你的用户基于他们使用的情境所改变的需求(demand)。在建立移动应用的时候请记住下面的步骤：

1. 确定(identify)用户想要在移动设备所实现的任务。
2. 记住(memorize)尽可能多的用户的情景。
3. 相信(presume)用户行为会成功并把他们带到下一个任务中。
4. 预测(predict)用户的下一个行为并且做好相应准备。

移动网络是个残酷的(harsh)环境，但是简单的专注于真正重要的事情上，你会发现这些新的约束为优秀的体验(superior experience)提供了一条清晰的道路。

*(翻译[Streamlining Mobile Interactions](http://www.smashingmagazine.com/2014/05/28/streamline-mobile-interactions/))*
