import Swiper from 'swiper';
import { Navigation, Keyboard, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const projectsSwiper = new Swiper('.projects-swiper', {
  modules: [Navigation, Keyboard, Mousewheel],
  keyboard: {
    enabled: true,
  },
  mousewheel: {
    invert: true,
  },
  slidesPerView: 1,
  watchOverflow: true,
  preloadImages: false,
  lazy: true,
  navigation: {
    nextEl: '.project-btn-next',
    prevEl: '.project-btn-prev',
    disabledClass: 'swiper-button-projects-disabled',
  },
});
