import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const projectsSwiper = new Swiper('.project-lists', {
  modules: [Navigation],
  keyboard: {
    enabled: true,
  },
  mousewheel: {
    invert: true,
  },
  watchOverflow: true,
  navigation: {
    nextEl: '.swipe-btn-next',
    prevEl: '.swipe-btn-prev',
  },
});
