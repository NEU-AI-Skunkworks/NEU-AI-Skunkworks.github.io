$(document).ready(function () {

  var slickOpts = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    adaptiveHeight: true,
  };
  var huskyStarter = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    adaptiveHeight: true
  };
  $('.testimonials').slick(slickOpts);
  $('.husky-starter-images').slick(huskyStarter);
  var slickEnabled = true;
});