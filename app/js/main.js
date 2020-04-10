$(function () {
 
    $('.burger__menu').on('click', function () {
        $('.burger__menu,.header__menu ul').toggleClass('active')
    });

    $('.articles__category-form').on('click', function () {
        $('.jq-selectbox__trigger').toggleClass('active')
    });



    $('.header__btn').on('click', function (event) {
        event.preventDefault();
        $('.header__form input,.header__btn').toggleClass('active')
    });


    $('.slider__inner').slick({
        vertical: true,
        dots: true,
        arrows: false,
        dotsClass: 'slider-dots',
      });

      $().fancybox({
        selector : '.follow__inner a:visible',
        thumbs   : {
          autoStart : true,
        }
        
      });

      $('select').styler();

      var mixer = mixitup('.articles__post');
});






































