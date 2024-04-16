import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const projectsSwiper = new Swiper('.projects-swiper', {
  modules: [Navigation],
  keyboard: {
    enabled: true,
  },
  mousewheel: {
    invert: true,
  },
  slidesPerView: 1,
  watchOverflow: true,
  navigation: {
    nextEl: '.project-btn-next',
    prevEl: '.project-btn-prev',
    disabledClass: 'swiper-button-projects-disabled',
  },
});
