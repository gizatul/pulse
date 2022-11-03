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
  