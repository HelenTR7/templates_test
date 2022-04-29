const swiper = new Swiper('.swiper-first', {
    loop: true,
    slidesPerView: 1,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});

const swiper2 = new Swiper('.swiper-third', {
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 30,
  centeredSlides: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});