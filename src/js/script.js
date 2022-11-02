$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<button type="button" class="slick-prev"><img src="../img/arrows/prev_arrow.png"></button>',
        nextArrow:'<button type="button" class="slick-next"><img src="../img/arrows/next_arrow.png"></button>',
        responsive: [
            {
            breakpoint: 992,
            settings: {
            arrows: false,
            dots: true
            }
        }
        ]
      });
  });