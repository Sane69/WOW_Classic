$(document).ready(function() {
    $('.slider').slick({
      slidesToShow: 1,
      arrows: false,
      dots: true,
      adaptiveHeight: true,
    })


    $('.header__burger').click(function(e) {
        $('.header__burger, .header__mobile').toggleClass('active');
        $('body').toggleClass('lock')
   })
   $(window).scroll(function(){
    $('.header').toggleClass('header-active', $(this).scrollTop() > 0);
});
$('.header__lang--block').click(function(e) {
    $('.header__selectLang').toggleClass('active');
    $('.header__lang--blockImg').toggleClass('active');
  })
})