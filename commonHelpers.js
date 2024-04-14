import{A as m,a as p,S as b}from"./assets/vendor-32dd1250.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function i(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(o){if(o.ep)return;o.ep=!0;const n=i(o);fetch(o.href,n)}})();document.addEventListener("DOMContentLoaded",function(){const t=document.querySelector(".mobile-menu-open-btn"),e=document.querySelector(".mobile-menu-wrapper");t.addEventListener("click",function(){e.classList.toggle("is-open")}),document.querySelectorAll(".dropdown").forEach(function(o){o.addEventListener("click",function(n){window.innerWidth>768&&o.nextElementSibling.classList.toggle("is-open")})}),document.querySelector(".mobile-menu-close-btn").addEventListener("click",function(){e.classList.remove("is-open")})});function _(){new m(".about-me__accordion-container",{duration:400,showMultiple:!1,collapse:!0})}_();const v=document.querySelectorAll(".about-me__item--box");v.forEach(t=>{t.addEventListener("click",function(){const i=this.closest(".about-me__item").querySelector(".about-me__panel");i&&i.classList.toggle("visually-hidden")})});document.querySelectorAll(".about-me__button").forEach(t=>{t.addEventListener("click",function(){this.querySelector(".about-me__icon").classList.toggle("about-me__icon--rotate"),this.nextElementSibling.classList.toggle("visually-hidden")})});document.addEventListener("DOMContentLoaded",function(){const t=document.querySelectorAll(".swiper-slide");let e=0;function i(){t.forEach((s,u)=>{u===e?s.classList.add("color-slide"):s.classList.remove("color-slide")})}i();function r(){t[e].classList.remove("color-slide"),e=(e+1)%t.length,t[e].classList.add("color-slide")}document.querySelector(".swiper-button-next").addEventListener("click",function(){r(),setTimeout(i,1e3)}),t.forEach((s,u)=>{s.addEventListener("click",function(){e=u,i()})});const n=document.querySelector(".swiper");let c=0,l=!1;n.addEventListener("touchstart",function(s){c=s.touches[0].clientX,l=!0}),n.addEventListener("touchmove",function(s){if(!l)return;const d=s.touches[0].clientX-c;Math.abs(d)>50&&(d>0?e=e===0?t.length-1:e-1:e=e===t.length-1?0:e+1,i(),l=!1)})});const h=document.querySelector(".swiper-wrapper");document.addEventListener("DOMContentLoaded",t=>{h.innerHTML=w(x)});const a="./img/project-section/",x=[{mobile_1x:"img_mob_1.jpg",mobile_2x:"img_mob_1@2x.jpg",tablet_1x:"img_tab_1.jpg",tablet_2x:"img_tab_1@2x.jpg",desctop_1x:"img_desc_1.jpg",desctop_2x:"img_desc_1@2x.jpg"},{mobile_1x:"img_mob_2.jpg",mobile_2x:"img_mob_2@2x.jpg",tablet_1x:"img_tab_2.jpg",tablet_2x:"img_tab_2@2x.jpg",desctop_1x:"img_desc_2.jpg",desctop_2x:"img_desc_2@2x.jpg"},{mobile_1x:"img_mob_3.jpg",mobile_2x:"img_mob_3@2x.jpg",tablet_1x:"img_tab_3.jpg",tablet_2x:"img_tab_3@2x.jpg",desctop_1x:"img_desc_3.jpg",desctop_2x:"img_desc_3@2x.jpg"}];function w(t){return t.map(({mobile_1x:e,mobile_2x:i,tablet_1x:r,tablet_2x:o,desctop_1x:n,desctop_2x:c})=>`      <!-- Upper "light" part -->
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
            srcset="
              ${a}${n} 1x,
              ${a}${c} 2x
            "
            media="(min-width: 1440px)"
          />

          <source
            srcset="
              ${a}${r} 1x,
              ${a}${o} 2x
            "
            media="(min-width: 768px)"
          />

          <source
            srcset="
              ${a}${e} 1x,
              ${a}${i} 2x
            "
            media="(min-width: 375px)"
          />

          <img
            class="project-section-img"
            src="${a}${e}"
            alt="Project example"
          />
        </picture>
      </div>`).join("")}document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".faq-accordion").forEach(e=>{e.addEventListener("click",function(){const i=this.querySelector(".faq-arrow"),r=this.nextElementSibling;i.classList.toggle("rotate"),r.classList.toggle("visually-hidden")})}),new m(".faq-section",{duration:400,showFirstItem:!1})});const L=document.getElementById("covers");function j(){const t=document.querySelector(".rolling-images ul");t.style.animationPlayState="running"}const y=new IntersectionObserver(t=>{t.forEach(e=>{e.isIntersecting&&j()})});y.observe(L);p.defaults.baseURL="https://portfolio-js.b.goit.study/api";async function E(){return(await p.get("/reviews")).data}function S(t){t.then(e=>{const i=e.map(({avatar_url:n,_id:c,author:l,review:s})=>{const d=s.length>180,g=d?"review-user-comment-collapsed":"",f=d?s.slice(0,180)+"...":s;return`<li class="review-carusel-list-item">
                <div class="user-review-container">
                    <img class="review-user-photo" src="${n}" alt="${c}">
                    <div class="user-data-review-container" data-review="${s}">
                        <h4 class="review-user-name">${l}</h4>
                        <p class="review-user-comment ${g}">${f}</p>
                        ${d?'<button class="toggle-btn">Згорнути</button>':""}
                    </div>
                </div>
            </li>`}).join(""),r=document.querySelector(".reviews-carusel");r.innerHTML=i,document.querySelectorAll(".toggle-btn").forEach(n=>{n.addEventListener("click",function(){const c=this.closest(".user-data-review-container"),l=c.querySelector(".review-user-comment"),s=c.dataset.review;l.classList.toggle("review-user-comment-collapsed"),l.classList.contains("review-user-comment-collapsed")?(l.textContent=s.slice(0,180)+"...",this.textContent="Розгорнути"):(l.textContent=s,this.textContent="Згорнути")})})}).catch(e=>{console.error("Not found",e)})}S(E());document.addEventListener("DOMContentLoaded",function(){new b(".swiper-container",{direction:"horizontal",Pagination:{el:".swiper-pagination"},Navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},keyboard:!0,touch:!0,loop:!0})});
//# sourceMappingURL=commonHelpers.js.map
