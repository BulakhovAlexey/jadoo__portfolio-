/*
Документація по роботі у шаблоні: 
Документація слайдера: https://swiperjs.com/
Сніппет(HTML): swiper
*/

// Мы подключаем Swider Slider с node_modules
// При необходимости подключите дополнительные модули слайдера, указав на них в {} черезКому
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation, Pagination, EffectCreative } from "swiper"
/*
Основные модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Посмотрите больше https://swiperjs.com/
*/

// Стили Swiper
// Основные стили
import "../../scss/base/swiper.scss"
// Полный набор стилей с scss/libs/swiper.scss
import "../../scss/libs/swiper.scss"
// Полный набор стилей с node_modules
// import 'swiper/css';

// Инициализация ползунков
function initSliders() {
  // Список ползунков
  // Проверьте, находится ли слайдер на странице
  if (document.querySelector(".testimonials__slider")) {
    new Swiper(".testimonials__slider", {
      modules: [Navigation, Pagination, EffectCreative],
      effect: "creative",
      creativeEffect: {
        prev: {
          translate: [0, "-100%", 0],
        },
        next: {
          translate: [58, 57, 0],
        },
      },
      observer: true,
      observeParents: true,
      spaceBetween: 0,
      autoHeight: true,
      speed: 800,
      pagination: {
        el: ".testimonials__pagination",
        clickable: true,
      },
      navigation: {
        prevEl: ".testimonials__button-prev",
        nextEl: ".testimonials__button-next",
      },
      breakpoints: {
        319: {
          creativeEffect: {
            prev: {
              translate: ["100%", 0, 0],
            },
            next: {
              translate: ["-100%", 0, 0],
            },
          },
        },
        768: {},
      },
      on: {},
    })
  }
}
// Свиток на основе слайдера (по классу swiper scroll дляОболонкиСлайдера)
function initSlidersScroll() {
  let sliderScrollItems = document.querySelectorAll(".swiper_scroll")
  if (sliderScrollItems.length > 0) {
    for (let index = 0; index < sliderScrollItems.length; index++) {
      const sliderScrollItem = sliderScrollItems[index]
      const sliderScrollBar =
        sliderScrollItem.querySelector(".swiper-scrollbar")
      const sliderScroll = new Swiper(sliderScrollItem, {
        observer: true,
        observeParents: true,
        direction: "vertical",
        slidesPerView: "auto",
        freeMode: {
          enabled: true,
        },
        scrollbar: {
          el: sliderScrollBar,
          draggable: true,
          snapOnRelease: false,
        },
        mousewheel: {
          releaseOnEdges: true,
        },
      })
      sliderScroll.scrollbar.updateSize()
    }
  }
}

window.addEventListener("load", function (e) {
  // Запуск ползунков инициализации
  initSliders()
  // Запуск инициализации прокрутки на слайдере (по классу swiper_scroll)
  //initSlidersScroll();
})
