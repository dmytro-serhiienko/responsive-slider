/*=============== TESTIMONIAL SWIPER ===============*/
const swiperTestimonial = new Swiper(".testimonial__swiper", {
  // Optional parameters
  loop: true,
  slidesPerView: "auto",
  spaceBetween: 16,
  centeredSlides: "auto",
  grabCursor: true,
  speed: 600,
  effect: "coverflow",
  coverflowEffect: {
    rotate: -90,
    depth: 600,
    modifier: 0.5,
    slideShadows: false,
  },

  // If need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  //   autoplay: {
  //     delay: 3000,
  //     disableOnInteraction: false,
  //   },
});
