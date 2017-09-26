!function() {
  var navContainer = document.querySelector(".article-nav-container"),
    content = document.querySelector(".content"),
    categoryButton = document.querySelector("#category-button")
    navPopup = document.querySelector(".article-nav-popup");

  document.addEventListener("scroll", function() {
    if(content.offsetTop - 10 < window.pageYOffset /*-document.body.getBoundingClientRect().top*/) {
      if(navContainer.classList) {
        navContainer.classList.add("article-nav-container-fixed");
      } else {
        /* for IE 9 */
        navContainer.className += " article-nav-container-fixed";
      }
    } else {
      if(navContainer.classList) {
        navContainer.classList.remove("article-nav-container-fixed");
      } else {
        /* for IE 9 */
        navContainer.className = navContainer.className.split(" ")[0];
      }
    }
  });

  /*DOMElement className has issue in the bottom case, top case is work well --> need research*/
  categoryButton.addEventListener("click", function() {
    if(navPopup.getAttribute("class").indexOf("show-article-nav-popup") > -1) {
      if(navPopup.classList) {
        navPopup.classList.remove("show-article-nav-popup");
      } else {
        /* for IE 9 */
        navPopup.setAttribute("class", navContainer.getAttribute("class").split(" ")[0]);
      }
    } else {
      if(navPopup.classList) {
        navPopup.classList.add("show-article-nav-popup");
      } else {
        /* for IE 9 */
        navPopup.setAttribute("class", navContainer.getAttribute("class") + " show-article-nav-popup");
      }
    }
  });

}();