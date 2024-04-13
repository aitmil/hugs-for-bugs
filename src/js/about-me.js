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
    header.addEventListener('click', function() {
        const accordionItem = this.closest('.about-me__item');
        const panel = accordionItem.querySelector('.about-me__panel');

        if (panel) {
            panel.classList.toggle('visually-hidden');
        }
    });
});

var aboutMeSwiper = new Swiper('.about-me__swiper-container', {
  direction: 'horizontal',
  loop: true,
  keyboard: {
      enabled: true,
      onlyInViewport: false,
  },
  mousewheel: true,
  touchEventsTarget: '.about-me__container',
  navigation: {
      nextEl: '.about-me__swiper-button-next',
      prevEl: '.about-me__swiper-button-prev',
  },
});
