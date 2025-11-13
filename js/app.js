var openMenu = document.querySelector("#openMenu");
var navBar = document.querySelector("header ul");


openMenu.addEventListener(
  "click",
  function () {
    navBar.classList.toggle('open');
    openMenu.classList.toggle("fa-square-xmark")
  }
)





$(document).ready(function () {
  $('.section5-mid').slick({
    dots: true,
    infinite: false,
    speed: 2000,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 1, infinite: true, dots: true }
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1, slidesToScroll: 1 }
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, slidesToScroll: 1 }
      }
    ]
  });
});
