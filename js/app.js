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

// Init AOS
(function ($) {
  "use strict";

  function aos_init() {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }
  $(window).on("load", function () {
    aos_init();
  });
})(jQuery);



function browser_name(){
  var browser_id = navigator.userAgent;    
  // перечень условий
  if (browser_id.search(/Chrome/) != -1) return 'Google Chrome';
  if (browser_id.search(/Firefox/) != -1) return 'Firefox';
  if (browser_id.search(/Opera/) != -1) return 'Opera';
  if (browser_id.search(/Safari/) != -1) return 'Safari';
  if (browser_id.search(/MSIE/) != -1) return 'Internet Explorer';
  return 'Не определен';
}

let browser = browser_name();
    let carouselLength = $('.main-item').length

    if(carouselLength <= 4) {
        carouselLength = 2
    } else {
        carouselLength = 3
    }



setTimeout(() => {
  $('.preloader video').css('opacity', '1')

    if (browser=="Safari") {
      setTimeout(() => {
        $('.preloader').fadeOut(500);


    }, 3500)

  }
  
  else {	
    setTimeout(() => {
      $('.preloader video')[0].play()
      $('.preloader__logo').fadeOut(500)
    }, 500)
  }
      


  $('.preloader video')[0].onended = () => {
    $('.preloader').fadeOut(500);

  }
}, 500)