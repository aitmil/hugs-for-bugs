import { getReviews } from './api';


function renderReviews(reviewsPromise) {
    reviewsPromise.then(arr => {
        const markup = arr.map(({ avatar_url, _id, author, review }) => {
            return `<li class="review-carusel-list-item">
                <div class="user-review-container">
                    <img class="review-user-photo" src="${avatar_url}" alt="${_id}">
                    <div class="user-data-review-container">
                        <h4 class="review-user-name">${author}</h4>
                        <p class="review-user-comment">${review}</p>
                    </div>
                </div>
            </li>`;
        }).join(""); 

        const reviewsContainer = document.querySelector('.reviews-carusel');
        
        reviewsContainer.innerHTML = markup;
    }).catch(error => {
        console.error('Not found', error);
    });
}

renderReviews(getReviews());




