!function() {
	
	if(window.navigator.appVersion.substring(0,3) < 5) {
		var warning, linkName, html;

		if((window.navigator.browserLanguage || window.navigator.language) === 'zh-CN') {
			linkName = "更新浏览器";
			warning = "您在使用过时的浏览器. 如果想正常浏览本站, 请从点击下面的链接免费下载并更新现代浏览器."
		} else {
			linkName = "Update browser";
			warning = "Your browser is out-of-date. Please download one of these up-to-date, free and excellent browsers from the below link";
		}

		html = "<div id='update-container'><p id='update-warning'>" + warning + "</p><a id='update-browser' href='http://www.browser-update.org/update.html'>" + linkName + "</a></div>";

		document.body.innerHTML = html;
	}

}();