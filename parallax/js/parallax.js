$(document).ready(function() {
  $(window).bind('scroll',function(e) {
    parallaxScroll();
  });
});

function parallaxScroll() {
  var scrolledY = $(window).scrollTop();
  $(".parallax-bg").css("top", (scrolledY * 0.4) + "px");
}
