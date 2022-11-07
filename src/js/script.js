const slider = tns({
    container: '.carousel_inner',
    controls: false,
    nav: true,
    navPosition: "bottom",
    autoplay: true,
    autoplayButtonOutput: false,
    speed: 600,
    controlsText: [
        '<img src="../img/arrows/prev_arrow.png">',
        '<img src="../img/arrows/next_arrow.png">'
    ]
  });

  document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
  });
  document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
  });

  // Tabs
  (function($) {
    $(function() {
      $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
      });
    });

    // Click button "MORE" or "BACK"
    function toggleSlide(item) {    
      $(item).each(function(i) {
      $(this).on('click', function(e) {
          e.preventDefault();
          $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
          $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
      })
    })
    };
    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');
  
      // Modal
    $('[data-modal=consultation]').on('click', function() {
      $('.overlay, #consultation').fadeIn('slow');
    });   
    $('.modal__close').on('click', function(){
      $('.overlay, #consultation, #order, #thanks').fadeOut('slow');
    });

    $('.button_mini').each(function(i){
        $(this).on('click', function(){
          $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
          $('.overlay, #order').fadeIn('slow');
        }); 
    });

    //Validation

    function valideForms(form){
      $(form).validate({
        rules: {
          name:"required",
          phone:"required",
          email:{
            required:true,
            email: true
          }   
        },
        messages: {
          name: "Пожалуйста, укажите ваше имя",
          phone: "Пожалуйста, введите свой номер телефона",
          email: {
            required: "Пожалуйста, введите свою почту",
            email: "Ваш адрес электронной почты должен быть в формате name@domain.com"
          }
        }
      });
    };

    valideForms('#consultation-form');
    valideForms('#consultation form');
    valideForms('#order form');

  })(jQuery);

      
  