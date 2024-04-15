import { getData } from './api';
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
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
      return `<div class="swiper-slide review-carusel-list-item ">
        <div class="user-review-container">
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
      </div>`;
    })
    .join('');
  reviewsEl.insertAdjacentHTML('beforeend', markup);
}

const reviewsSwiper = new Swiper('.swiper-container', {
  modules: [Navigation],
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
  navigation: {
    nextEl: '.reviews-btn-next',
    prevEl: '.reviews-btn-prev',
  },
});

//=========================================================================

// function renderReviews(reviewsPromise) {
//   reviewsPromise
//     .then(arr => {
//       const markup = arr
//         .map(({ avatar_url, _id, author, review }) => {
//           const maxTextLength = 180;
//           const isTextOverflowing = review.length > maxTextLength;
//           const textClass = isTextOverflowing
//             ? 'review-user-comment-collapsed'
//             : '';
//           const trimmedReview = isTextOverflowing
//             ? review.slice(0, maxTextLength) + '...'
//             : review;
//           const buttonText = isTextOverflowing ? 'Розгорнути' : '';

//           return `<div class="review-carusel-list-item">
//                 <div class="user-review-container">
//                     <img class="review-user-photo" src="${avatar_url}" alt="${_id}">
//                     <div class="user-data-review-container" data-review="${review}">
//                         <h4 class="review-user-name">${author}</h4>
//                         <p class="review-user-comment ${textClass}">${trimmedReview}</p>
//                         ${
//                           isTextOverflowing
//                             ? '<button class="toggle-btn">Згорнути</button>'
//                             : ''
//                         }
//                     </div>
//                 </div>
//             </div>`;
//         })
//         .join('');

//       const reviewsContainer = document.querySelector('.reviews-carusel');

//       reviewsContainer.innerHTML = markup;

//       const buttons = document.querySelectorAll('.toggle-btn');
//       buttons.forEach(btn => {
//         btn.addEventListener('click', function () {
//           const commentContainer = this.closest('.user-data-review-container');
//           const comment = commentContainer.querySelector(
//             '.review-user-comment'
//           );
//           const originalReview = commentContainer.dataset.review;
//           comment.classList.toggle('review-user-comment-collapsed');
//           if (comment.classList.contains('review-user-comment-collapsed')) {
//             comment.textContent = originalReview.slice(0, 180) + '...';
//             this.textContent = 'Розгорнути';
//           } else {
//             comment.textContent = originalReview;
//             this.textContent = 'Згорнути';
//           }
//         });
//       });
//     })
//     .catch(error => {
//       console.error('Not found', error);
//     });
// }

// renderReviews(getReviews());
