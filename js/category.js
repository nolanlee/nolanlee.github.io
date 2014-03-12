!function() {
	var navContainer = document.querySelector(".article-nav-container"),
		offsetTop = navContainer.offsetTop;

	document.addEventListener("scroll", function() {
		if(offsetTop - 10 < /*document.body.scrollTop*/-document.body.getBoundingClientRect().top) {
			navContainer.classList.add("article-nav-container-fixed");
		} else {
			navContainer.classList.remove("article-nav-container-fixed");
		}
	});
}();