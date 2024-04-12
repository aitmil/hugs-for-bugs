import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
import Swiper from 'swiper';
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

const swiper = new Swiper('.swiper-container', {
    direction: 'horizontal', 
    loop: true, 
    navigation: {
      nextEl: '.swiper-button-next', 
      prevEl: '.swiper-button-prev',
    },
    keyboard: {
      enabled: true, 
    },
    slidesPerView: 'auto', 
    spaceBetween: 20, 
    breakpoints: {
      600: {
        slidesPerView: 2,
        navigation: {
          nextEl: null,
          prevEl: null,
        },
      },
     
      992: {
        slidesPerView: 3,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
      
      1200: {
        slidesPerView: 2,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
    },
  });