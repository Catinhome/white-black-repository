'use strict';
// for header

$(document).ready(function() {
	$('.header__burger').click(function(event) {
      $('.header__burger,.header__menu').toggleClass('active');
      $('body').toggleClass('lock');
	});
});

$(window).scroll(function() {
  if ($(this).scrollTop() > 1) {
    $('.header, .header__burger, .header__logo, .clockNow').addClass("sticky");
} else {
    $('.header, .header__burger, .header__logo, .clockNow').removeClass("sticky");
}});

// for slider

function nextSlide() {
    if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
        $('#slidewrapper').css('transform', 'translate(0, 0)');
        slideNow = 1;
    } else {
        translateWidth = -$('#viewport').width() * (slideNow);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow++;
    }
}

let slideNow = 1;
let slideCount = $('#slidewrapper').children().length;
let translateWidth = 0;
let slideInterval = 2000;

$(document).ready(function () {
    setInterval(nextSlide, slideInterval);
    
    $('#viewport').hover(function(){
        clearInterval(switchInterval);
},function() {
        switchInterval = setInterval(nextSlide, slideInterval);
});
});