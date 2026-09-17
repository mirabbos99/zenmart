document.addEventListener('DOMContentLoaded', function () {
 
  new Swiper('.selling_product_frame .mySwiper', {
    slidesPerView: 4,
    spaceBetween: 20,
    grabCursor: true,
    breakpoints: {
          769: {
           slidesPerView: 4,
            slidesPerGroup: 1,
          },
        },
        scrollbar: {
          el: '.swiper-scrollbar',
        },
   
   
    navigation: {
      nextEl: '.selling_product_frame .swiper-button-next',
      prevEl: '.selling_product_frame .swiper-button-prev',
    },
    pagination: {
      el: '.selling_product_frame .swiper-pagination',
      clickable: true,
    },
  });

  new Swiper('.tv_frame .mySwiper', {
    slidesPerView: 4,
    spaceBetween: 20,
    grabCursor: true,
    observer: true,
    observeParents: true,
    breakpoints: {
          769: {
           slidesPerView: 4,
            slidesPerGroup: 1,
          },
        },
        scrollbar: {
          el: '.swiper-scrollbar',
        },
    navigation: {
      nextEl: '.tv_frame .swiper-button-next',
      prevEl: '.tv_frame .swiper-button-prev',
    },
    pagination: {
      el: '.tv_frame .swiper-pagination',
      clickable: true,
    },
  });
});
       