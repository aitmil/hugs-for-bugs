// import Swiper from 'swiper';
// import { Navigation } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';

// const projectsSwiper = new Swiper('.projects-swiper', {
//   modules: [Navigation],
//   keyboard: {
//     enabled: true,
//   },
//   mousewheel: {
//     invert: true,
//   },
//   watchOverflow: true,
//   navigation: {
//     nextEl: '.swiper-btn-next',
//     prevEl: '.swiper-btn-prev',
//   },
// });

const swiperContainer = document.querySelector('.swiper-wrapper');
document.addEventListener('DOMContentLoaded', event => {
  const markup = createMarkup(images);
  swiperContainer.innerHTML = markup;
  console.log(markup);
});

const imgStorage = './img/project-section/';
const myProjectLink = 'https://github.com/aitmil/hugs-for-bugs/';
const images = [
  {
    mobile_1x: 'img_mob_1.jpg',
    mobile_2x: 'img_mob_1@2x.jpg',
    tablet_1x: 'img_tab_1.jpg',
    tablet_2x: 'img_tab_1@2x.jpg',
    desctop_1x: 'img_desc_1.jpg',
    desctop_2x: 'img_desc_1@2x.jpg',
  },
  {
    mobile_1x: 'img_mob_2.jpg',
    mobile_2x: 'img_mob_2@2x.jpg',
    tablet_1x: 'img_tab_2.jpg',
    tablet_2x: 'img_tab_2@2x.jpg',
    desctop_1x: 'img_desc_2.jpg',
    desctop_2x: 'img_desc_2@2x.jpg',
  },
  {
    mobile_1x: 'img_mob_3.jpg',
    mobile_2x: 'img_mob_3@2x.jpg',
    tablet_1x: 'img_tab_3.jpg',
    tablet_2x: 'img_tab_3@2x.jpg',
    desctop_1x: 'img_desc_3.jpg',
    desctop_2x: 'img_desc_3@2x.jpg',
  },
];

function createMarkup(arr) {
  return arr
    .map(
      ({
        mobile_1x,
        mobile_2x,
        tablet_1x,
        tablet_2x,
        desctop_1x,
        desctop_2x,
      }) =>
        `      <!-- Upper "light" part -->
<div class="swiper-slide projects-slide">
  <div class="project-section-light-part">
    <!-- <div class = "project-section-skills"> -->
    <ul class="project-section-skills-list list">
      <li class="project-section-list-skills-item">#react</li>
      <li class="project-section-list-skills-item">#js</li>
      <li class="project-section-list-skills-item">#node js</li>
      <li class="project-section-list-skills-item">#git</li>
    </ul>
    <!-- </div> -->

    <h3 class="project-section-title">
      Programming Across Borders: Ideas, Technologies, Innovations
    </h3>

    <a
      href="${myProjectLink}"
      class="see-project-ref"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="See project link"
      >See project</a
    >
  </div>

  <!-- Lower "dark" part -->
  <div class="project-section-dark-part">
    <picture class="project-section-pic">
      <source
        srcset="${imgStorage}${desctop_1x} 1x, ${imgStorage}${desctop_2x} 2x"
        media="(min-width: 1440px)"
      />

      <source
        srcset="${imgStorage}${tablet_1x} 1x, ${imgStorage}${tablet_2x} 2x"
        media="(min-width: 768px)"
      />

      <source
        srcset="${imgStorage}${mobile_1x} 1x, ${imgStorage}${mobile_2x} 2x"
        media="(min-width: 375px)"
      />

      <img
        class="project-section-img"
        src="${imgStorage}${mobile_1x}"
        alt="Project example"
      />
    </picture>
  </div>
  <div class="project-section-light-part">
    <!-- <div class = "project-section-skills"> -->
    <ul class="project-section-skills-list list">
      <li class="project-section-list-skills-item">#react</li>
      <li class="project-section-list-skills-item">#js</li>
      <li class="project-section-list-skills-item">#node js</li>
      <li class="project-section-list-skills-item">#git</li>
    </ul>
    <!-- </div> -->

    <h3 class="project-section-title">
      Programming Across Borders: Ideas, Technologies, Innovations
    </h3>

    <a
      href="https://github.com/aitmil/hugs-for-bugs/"
      class="see-project-ref"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="See project link"
      >See project</a
    >
  </div>

  <!-- Lower "dark" part -->
  <div class="project-section-dark-part">
    <picture class="project-section-pic">
      <source
        srcset="${imgStorage}${desctop_1x} 1x, ${imgStorage}${desctop_2x} 2x"
        media="(min-width: 1440px)"
      />

      <source
        srcset="${imgStorage}${tablet_1x} 1x, ${imgStorage}${tablet_2x} 2x"
        media="(min-width: 768px)"
      />

      <source
        srcset="${imgStorage}${mobile_1x} 1x, ${imgStorage}${mobile_2x} 2x"
        media="(min-width: 375px)"
      />

      <img
        class="project-section-img"
        src="${imgStorage}${mobile_1x}"
        alt="Project example"
      />
    </picture>
  </div>
</div>
`
    )
    .join('');
}
