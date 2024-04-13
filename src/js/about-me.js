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

const accordionHeaders = document.querySelectorAll('.about-me__header');
accordionHeaders.forEach(header => {
  header.addEventListener('click', function () {
    const accordionItem = this.closest('.about-me__item');
    const panel = accordionItem.querySelector('.about-me__panel');

    if (panel) {
      panel.classList.toggle('visually-hidden');
    }
  });
});

const aboutMeSwiper = new Swiper('.about-me__swiper-container', {
  loop: true,
  loopSlides: 6,
  spaceBetween: 0,
  keyboard: {
    enabled: true,
  },
  mousewheel: {
    invert: true,
  },
  modules: [Navigation],
  navigation: {
    nextEl: '.about-me__swiper-button-next',
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1440: {
      slidesPerView: 6,
    },
  },
});

aboutMeSwiper.on('slideChange', function onSlideChange() {
  aboutMeSwiper.slides.forEach(slide => {
    slide.classList.add('color-slide');
    slide.classList.remove('color-slide');
  });
});
