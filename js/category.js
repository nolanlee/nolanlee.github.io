!function() {
	var navContainer = document.querySelector(".article-nav-container"),
		offsetTop = navContainer.offsetTop;

	window.addEventListener("scroll", function() {
		if(offsetTop < document.body.scrollTop) {
			navContainer.classList.add("article-nav-container-fixed");
		} else {
			navContainer.classList.remove("article-nav-container-fixed");
		}
	});
}();