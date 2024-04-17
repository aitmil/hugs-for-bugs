import { getData } from './api';
import Swiper from 'swiper';
import { Navigation, Keyboard, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const reviewsEl = document.querySelector('.reviews-swiper');

async function getReviews() {
  try {
    const data = await getData();
    renderReviews(data);
  } catch (error) {
    console.error(error);
    renderReviews([]);
  }
}
getReviews();

//=========================================================================

function renderReviews(reviews) {
  if (reviews.length === 0) {
    reviewsEl.innerHTML = '<p>Not found</p>';
    return;
  }

  const markup = reviews
    .map(review => {
      return `<div class="swiper-slide review-carusel-list-item">
  <div class="user-review-outer-wrapper">
    <div class="user-review-inner-wrapper">
      <img
        src="${review.avatar_url}"
        alt="${review.author}"
        width="48"
        height="48"
        loading="lazy"
        class="reviews-item-img"
      />
      <div class="user-data-review-container">
        <h3 class="secondary-title review-user-name">${review.author}</h3>
        <p class="transparent-text review-user-comment">${review.review}</p>
      </div>
    </div>
  </div>
</div>`;
    })
    .join('');
  reviewsEl.insertAdjacentHTML('beforeend', markup);
}

const reviewsSwiper = new Swiper('.reviews-swiper-container', {
  modules: [Navigation, Keyboard, Mousewheel],
  keyboard: {
    enabled: true,
  },
  mousewheel: {
    invert: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 16,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    1440: {
      slidesPerView: 4,
      spaceBetween: 16,
    },
  },
  watchOverflow: true,
  preloadImages: false,
  lazy: true,
  navigation: {
    nextEl: '.reviews-btn-next',
    prevEl: '.reviews-btn-prev',
    disabledClass: 'swiper-button-reviews-disabled',
  },
});
