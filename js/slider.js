$(document).ready(function(){
    $('.slider').slick({
    nextArrow: '<div type="button" class="slick-next"><img src="arrow/s2.png"></img></div>',
    prevArrow: '<div type="button" class="slick-prev"><img src="arrow/s1.png"></img></div>',
    });
    
    $('[data-modal=rabota]').on('click', function(){
        $('.overlay, #rabota').fadeIn('slow');
        })
        $('.modal__close').on('click', function() {
        $('.overlay, #rabota').fadeOut('slow');
        })
});
