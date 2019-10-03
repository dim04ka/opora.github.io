
window.jQuery = require("jquery");
var $ = require("jquery");
var jQuery = require("jquery");


 

//burder меню
$(function(){
  $('.topline__burger').on('click', function(){
    $('.topline__menu').toggleClass('topline__menu-mobile');
  })
})
 
//плавный скролл к тегу
$(function(){
  var $page = $('html, body');
  $('a[href*="#"]').click(function() {
      $page.animate({
          scrollTop: $($.attr(this, 'href')).offset().top
      }, 400);
      return false;
  });
})


//btn__up arrow
$(window).scroll(function () {
  if ($(this).scrollTop() > 500) {
    $(".arrowup").fadeIn();
  } else {
    $(".arrowup").fadeOut();
  }
});
$(function ($) {
  $(".arrowup").click(function () {
    $("body,html").animate({
      scrollTop: 0
    }, 400);
    return false;
  });
});

//hover tarif
$(function(){
  $('.tarif__item').mouseover(function(){
    $(this).addClass('tarif__item-active');
  })

  $('.tarif__item').mouseout(function(){
    $(this).removeClass('tarif__item-active');
  })
})

// jq validate

$(function(){

  //alert(1);
  // $('.form').validate();
})


