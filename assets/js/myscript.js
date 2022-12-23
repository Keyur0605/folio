let section_2_index = 2;
let section_4_index = 1;
$(document).ready(function (){
$("#prev").click(function () {
    $("#prev").attr("src", "assets/images/13.png");
    $("#next").attr("src", "assets/images/18.png");
    $('.slider-for').slick('slickPrev');
    if(section_4_index > 1) {
        $(".img_and_line-"+section_4_index).children("div").css("display", "none");
        $(".img_and_line-"+section_4_index).children("img").css("display", "none");
        section_4_index--;
        $(".img_and_line-"+section_4_index).children("div").css("display", "block");
        $(".img_and_line-"+section_4_index).children("img").css("display", "block");
      } 
});

$("#next").click(function () {
    $("#next").attr("src", "assets/images/14.png");
    $("#prev").attr("src", "assets/images/17.png");
    $('.slider-for').slick('slickNext');
    if(section_4_index < 5) {
        $(".img_and_line-"+section_4_index).children("div").css("display", "none");
        $(".img_and_line-"+section_4_index).children("img").css("display", "none");
        section_4_index++;
        $(".img_and_line-"+section_4_index).children("div").css("display", "block");
        $(".img_and_line-"+section_4_index).children("img").css("display", "block");
      } 
});
$("#prev1").click(function () {
  $("#prev1").attr("src", "assets/images/13.png");
  $("#next1").attr("src", "assets/images/15.png");
  if(section_2_index > 1) {
    $("#card-"+section_2_index).removeClass("card-current");
    section_2_index--;
    $("#card-"+section_2_index).addClass("card-current");
  } 
});

$("#next1").click(function () {
  $("#next1").attr("src", "assets/images/14.png");
  $("#prev1").attr("src", "assets/images/12.png");
  if(section_2_index < 4) {
    $("#card-"+section_2_index).removeClass("card-current");
    section_2_index++;
    $("#card-"+section_2_index).addClass("card-current");
  } 
});

   $('.slider-for').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
    vertical: true,
    verticalSwiping: false,
    adaptiveHeight: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    arrows: false,
});

$('.autoplay-mob').slick({
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});
window.addEventListener('scroll', Scrollfn)

function Scrollfn() {
 
  if (window.scrollY > 25) {
    $("nav").addClass('active_nav');
  } else {
    $("nav").removeClass('active_nav');
  }
}
});