import Accordion from 'accordion-js';

import Swiper from 'swiper';
import { Navigation, Keyboard, Mousewheel } from 'swiper/modules';
import 'swiper/css';

new Accordion('.accordion-container', {
  duration: 500,
  showMultiple: true,
  openOnInit: [0],
});

const acButtons = document.querySelectorAll('.ac-trigger');
const acS = document.querySelectorAll('.ac-icon');
acButtons.forEach(item =>
  item.addEventListener('click', () => {
    if (item.querySelector('svg.ac-icon').classList.contains('icon-first')) {
      if (
        item
          .querySelector('svg.ac-icon')
          .classList.contains('ac-icon-active-first')
      )
        item
          .querySelector('svg.ac-icon')
          .classList.remove('ac-icon-active-first');
      else {
        item.querySelector('svg.ac-icon').classList.add('ac-icon-active-first');
      }
    }
    if (
      item.querySelector('svg.ac-icon').classList.contains('ac-icon-active')
    ) {
      item.querySelector('svg.ac-icon').classList.remove('ac-icon-active');
    } else {
      item.querySelector('svg.ac-icon').classList.add('ac-icon-active');
    }
  })
);
//=========================================================================

const mySwiper = new Swiper('.swiper-skills-list-container', {
  modules: [Navigation, Keyboard, Mousewheel],
  spaceBetween: 0,
  loop: true,
  loopSlides: 6,
  keyboard: {
    enabled: true,
  },
  mousewheel: {
    invert: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    375: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 3,
    },
    1440: {
      slidesPerView: 6,
    },
  },
  navigation: {
    nextEl: '.swiper-skill-list-button',
  },
});
