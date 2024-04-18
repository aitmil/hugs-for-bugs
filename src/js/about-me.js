import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
import Swiper from 'swiper';
import { Navigation, Keyboard, Mousewheel } from 'swiper/modules';
import 'swiper/css';

function initAboutMeAccordion() {
  const accordions = Array.from(document.querySelectorAll('.about-me__accordion-container'));

  new Accordion(accordions, {
    duration: 400,
    showMultiple: true,
    collapse: true,
    elementClass: 'about-me__item',
    triggerClass: 'about-me__button',
    panelClass: 'about-me__panel-text',
    headerClass: "about-me__header",
    
    open(currElement) {
      const panelContent = currElement.querySelector('.about-me__panel-text');
      panelContent.open(0)
    },
    beforeOpen: (currElement) => {
      const panelContent = currElement.querySelector('.about-me__panel-text');
      panelContent.style.display = 'block';
    },
    beforeClose: (currElement) => {
      const panelContent = currElement.querySelector('.about-me__panel-text');
      panelContent.style.display = 'none';
    },
  });

  
}

initAboutMeAccordion();


document.querySelectorAll('.about-me__button').forEach(button => {
  button.addEventListener('click', function () {
    this.querySelector('.about-me__icon').classList.toggle(
      'about-me__icon--rotate'
    );
  });
});

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
