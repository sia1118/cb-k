$(window).scroll(function (){
	$('.fadein').each(function(){
		var elemPos = $(this).offset().top,
		scroll = $(window).scrollTop(),
		windowHeight = $(window).height();

			if (scroll > elemPos - windowHeight + 150){
				$(this).addClass('scrollin');
			}
	});
});



var fade1 = function(){$('.mv .mv_inner .logo').addClass('mv-fadein')};
var fade2 = function(){$('.mv .mv_inner .statement').addClass('mv-fadein')};
var fade3 = function(){$('.mv .mv_inner .open').addClass('mv-fadein')};

$(document).ready(function(){
setTimeout(fade1, 500);
});

$(document).ready(function(){
setTimeout(fade2, 1500);
});

$(document).ready(function(){
setTimeout(fade3, 2500);
});


//スライダー
$(function () {
  $(".slide01").slick({
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
  });
  $(".slide02").slick({
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
  });
});
