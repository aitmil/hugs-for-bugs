import { getReviews } from './api';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function renderReviews(reviewsPromise) {
  reviewsPromise
    .then(arr => {
      const markup = arr
        .map(({ avatar_url, _id, author, review }) => {
          const maxTextLength = 180;
          const isTextOverflowing = review.length > maxTextLength;
          const textClass = isTextOverflowing
            ? 'review-user-comment-collapsed'
            : '';
          const trimmedReview = isTextOverflowing
            ? review.slice(0, maxTextLength) + '...'
            : review;
          const buttonText = isTextOverflowing ? 'Розгорнути' : '';

          return `<li class="review-carusel-list-item">
                <div class="user-review-container">
                    <img class="review-user-photo" src="${avatar_url}" alt="${_id}">
                    <div class="user-data-review-container" data-review="${review}">
                        <h4 class="review-user-name">${author}</h4>
                        <p class="review-user-comment ${textClass}">${trimmedReview}</p>
                        ${
                          isTextOverflowing
                            ? '<button class="toggle-btn">Згорнути</button>'
                            : ''
                        }
                    </div>
                </div>
            </li>`;
        })
        .join('');

      const reviewsContainer = document.querySelector('.reviews-carusel');

      reviewsContainer.innerHTML = markup;

      const buttons = document.querySelectorAll('.toggle-btn');
      buttons.forEach(btn => {
        btn.addEventListener('click', function () {
          const commentContainer = this.closest('.user-data-review-container');
          const comment = commentContainer.querySelector(
            '.review-user-comment'
          );
          const originalReview = commentContainer.dataset.review;
          comment.classList.toggle('review-user-comment-collapsed');
          if (comment.classList.contains('review-user-comment-collapsed')) {
            comment.textContent = originalReview.slice(0, 180) + '...';
            this.textContent = 'Розгорнути';
          } else {
            comment.textContent = originalReview;
            this.textContent = 'Згорнути';
          }
        });
      });
    })
    .catch(error => {
      console.error('Not found', error);
    });
}

renderReviews(getReviews());

document.addEventListener('DOMContentLoaded', function () {
  var mySwiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    Pagination: {
      el: '.swiper-pagination',
    },
    Navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    keyboard: true,
    touch: true,
    loop: true,
  });
});
