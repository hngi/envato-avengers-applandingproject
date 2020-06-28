const topScroll = document.querySelector(".top-scroll");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    topScroll.classList.add("activescroll");
  } else {
    topScroll.classList.remove("activescroll");
  }
});
