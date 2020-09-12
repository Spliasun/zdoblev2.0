$(window).scroll(function () {
  if ($(this).scrollTop() > 50) {
    $('.header').addClass('fixed');
  } else {
    $('.header').removeClass('fixed');
  }
});
$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    $('.header_logo').addClass('logo_fixed');
  } else {
    $('.header_logo').removeClass('logo_fixed');
  }
});
$(window).scroll(function () {
  if ($(this).scrollTop() > 50) {
    $('.slider').addClass('slider_fixed');
  } else {
    $('.slider').removeClass('slider_fixed');
  }
});

function toggleMobileMenu() {
  document.querySelector("#menu").classList.toggle("active");
  document.querySelector(".header__burger").classList.toggle("active");
};