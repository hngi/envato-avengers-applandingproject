$(() => {
  AOS.init();
  // Activate slider
  let slider = tns({
    container: ".my-slider",
    items: 1,
    speed: 1000,
    slideBy: "page",
    autoplay: true,
    autoplayButtonOutput: false,
    loop: true,
    mouseDrag: true,
    controlsContainer: ".my-slider-controls",
  });
  // Active section
  (() => {
    $(window).scroll(function () {
      // Says this function is preformed continuisly while scrolling.
      var Scroll = $(window).scrollTop() + 105, // This variable finds the distance you have scrolled from the top.
        SectionOneOffset = $("#section-home").offset().top - 105,
        SectionTwoOffset = $("#section-works").offset().top - 105,
        SectionThreeOffset = $("#section-features").offset().top - 105,
        SectionFourOffset = $("#section-review").offset().top - 105,
        SectionFiveOffset = $("#section-contact").offset().top - 105;
      $("nav li").removeClass("active");
      if (Scroll >= SectionFiveOffset)
        $(".menu-item-5").parent().addClass("active");
      else if (Scroll >= SectionFourOffset)
        $(".menu-item-4").parent().addClass("active");
      else if (Scroll >= SectionThreeOffset)
        $(".menu-item-3").parent().addClass("active");
      else if (Scroll >= SectionTwoOffset)
        $(".menu-item-2").parent().addClass("active");
      else if (Scroll >= SectionOneOffset)
        $(".menu-item-1").parent().addClass("active");
    });
  })();
  (() => {
    var headerHeight = $("nav.navbar").outerHeight();

    $("[href]").click(function (e) {
      $(".collapse").collapse("hide");
      var targetHref = $(this).attr("href");
      if (targetHref.length <= 1) {
        return;
      }
      targetHref = "#section-" + targetHref.slice(1, targetHref.length);
      $("html, body").animate(
        {
          scrollTop: $(targetHref).offset().top - headerHeight + 1,
        },
        1000
      );
    });
  })();
});
