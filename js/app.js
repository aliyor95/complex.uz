// Slick slider
$(function () {
  $(".slick-slider").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    centerMode: true,
    variableWidth: true
  });
});

$(function () {
  $(".partner-slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    centerMode: true,
    variableWidth: true
  });
});

// Number function
$(document).ready(function () {
  $(".number").counterUp({
    delay: 10,
    time: 2000,
  });
});

// Video
function toggle() {
  let vid = document.querySelector(".vid");
  let video = document.querySelector("video");
  vid.classList.toggle("active");
  video.pause();
  video.currentTime = 0;
}

// To-top
const toTop = document.querySelector(".to-top");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("activ");
  } else {
    toTop.classList.remove("activ");
  }
});

// ! Fixed header
$(function () {
  let nav = $("#nav, #nav_toggle"),
    introH = $("#intro").innerHeight(),
    scrollOffset = $(window).scrollTop();

  checkScroll(scrollOffset);
  $(window).on("scroll", function () {
    scrollOffset = $(this).scrollTop();
    checkScroll(scrollOffset);
  });

  function checkScroll(scrollOffset) {
    if (scrollOffset >= introH) {
      nav.addClass("fixed");
    } else nav.removeClass("fixed");
  }
});

//  Menu nav toggle
$("#nav_toggle").on("click", function (event) {
  event.preventDefault();
  $(this).toggleClass("active");
  $("#nav").toggleClass("active");
});









