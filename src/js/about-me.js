import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';

function initAboutMeAccordion() {
  new Accordion('.about-me__accordion-container', {
    duration: 400,
    showMultiple: false,
    collapse: true,
  });
}

initAboutMeAccordion();

const accordionHeaders = document.querySelectorAll('.about-me__item--box');
accordionHeaders.forEach(header => {
  header.addEventListener('click', function () {
    const accordionItem = this.closest('.about-me__item');
    const panel = accordionItem.querySelector('.about-me__panel');

    if (panel) {
      panel.classList.toggle('visually-hidden');
    }
  });
});

document.querySelectorAll('.about-me__button').forEach(button => {
  button.addEventListener('click', function() {
    this.querySelector('.about-me__icon').classList.toggle('about-me__icon--rotate');
    this.nextElementSibling.classList.toggle('visually-hidden');
  });
});


// SWIPERJS

// const aboutMeSwiper = new Swiper('.about-me__swiper-container', {
//   loop: true,
//   loopSlides: 6,
//   spaceBetween: 0,
//   keyboard: {
//     enabled: true,
//   },
//   mousewheel: {
//     invert: true,
//   },
//   modules: [Navigation],
//   navigation: {
//     nextEl: '.about-me__swiper-button-next',
//   },
//   breakpoints: {
//     320: {
//       slidesPerView: 2,
//     },
//     768: {
//       slidesPerView: 3,
//     },
//     1440: {
//       slidesPerView: 6,
//     },
//   },
// });

// aboutMeSwiper.on('slideChange', function onSlideChange() {
//   aboutMeSwiper.slides.forEach(slide => {
//     slide.classList.add('color-slide');
//     slide.classList.remove('color-slide');
//   });
// });

// SWIPER

document.addEventListener('DOMContentLoaded', function () {
  const slides = document.querySelectorAll('.swiper-slide');
  let currentIndex = 0;

  function toggleBackgroundColor() {
    slides.forEach((slide, index) => {
      if (index === currentIndex) {
        slide.classList.add('color-slide');
      } else {
        slide.classList.remove('color-slide');
      }
    });
  }

  toggleBackgroundColor();

  function switchBackgroundColor() {
    slides[currentIndex].classList.remove('color-slide');
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].classList.add('color-slide');
  }

  const nextButton = document.querySelector('.swiper-button-next');
  nextButton.addEventListener('click', function () {
    switchBackgroundColor();
    setTimeout(toggleBackgroundColor, 1000);
  });

  slides.forEach((slide, index) => {
    slide.addEventListener('click', function () {
      currentIndex = index;
      toggleBackgroundColor();
    });
  });

  const swiperContainer = document.querySelector('.swiper');
  let startX = 0;
  let isSwiping = false;

  swiperContainer.addEventListener('touchstart', function (event) {
    startX = event.touches[0].clientX;
    isSwiping = true;
  });

  swiperContainer.addEventListener('touchmove', function (event) {
    if (!isSwiping) return;
    const currentX = event.touches[0].clientX;
    const diff = currentX - startX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        currentIndex =
          currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
      } else {
        currentIndex =
          currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
      }
      toggleBackgroundColor();
      isSwiping = false;
    }
  });
});
