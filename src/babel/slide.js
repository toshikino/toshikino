window.addEventListener('DOMContentLoaded', function() {
  var swiper03 = new Swiper('.sample03 .swiper-container', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    loop: true,
    slidesPerView: 3,
    loopedSlides: 3,
    centeredSlides : true,
    slideToClickedSlide: true,
    spaceBetween: 10,
    breakpoints: {
      543: {
        slidesPerView: 2,
      }
    }
  });
}, false);