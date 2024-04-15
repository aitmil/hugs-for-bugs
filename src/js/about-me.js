import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
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
  button.addEventListener('click', function () {
    this.querySelector('.about-me__icon').classList.toggle(
      'about-me__icon--rotate'
    );
  });
});

//=========================================================================

const mySwiper = new Swiper('.swiper', {
  modules: [Navigation],
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
