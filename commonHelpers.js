import{S as l,N as d,A as g,a as u,i as c}from"./assets/vendor-f778ff99.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".mobile-menu-open-btn"),t=document.querySelector(".mobile-menu-wrapper");function n(){t.classList.add("is-open"),e.removeEventListener("click",n)}function o(){t.classList.remove("is-open"),e.addEventListener("click",n)}e.addEventListener("click",n);const r=document.querySelector(".mobile-menu-close-btn"),s=document.querySelectorAll(".mobile-menu-link"),i=document.querySelector(".form-submit-button"),b=document.querySelector(".header-link-mobile");r.addEventListener("click",o),s.forEach(function(E){E.addEventListener("click",o)}),i.addEventListener("click",o),b.addEventListener("click",o)});document.querySelectorAll('a[href^="#"]').forEach(e=>{e.addEventListener("click",function(t){t.preventDefault();const n=document.querySelector(this.getAttribute("href"));n&&window.scrollTo({top:n.offsetTop,behavior:"smooth"})})});function L(){new g(".about-me__accordion-container",{duration:400,showMultiple:!1,collapse:!0})}L();const k=document.querySelectorAll(".about-me__item--box");k.forEach(e=>{e.addEventListener("click",function(){const n=this.closest(".about-me__item").querySelector(".about-me__panel");n&&n.classList.toggle("visually-hidden")})});document.querySelectorAll(".about-me__button").forEach(e=>{e.addEventListener("click",function(){this.querySelector(".about-me__icon").classList.toggle("about-me__icon--rotate")})});new l(".swiper-skills-list-container",{modules:[d],spaceBetween:0,loop:!0,loopSlides:6,keyboard:{enabled:!0},mousewheel:{invert:!0},breakpoints:{320:{slidesPerView:1,spaceBetween:0},375:{slidesPerView:2,spaceBetween:0},768:{slidesPerView:3},1440:{slidesPerView:6}},navigation:{nextEl:".swiper-skill-list-button"}});new l(".projects-swiper",{modules:[d],keyboard:{enabled:!0},mousewheel:{invert:!0},slidesPerView:1,watchOverflow:!0,navigation:{nextEl:".project-btn-next",prevEl:".project-btn-prev",disabledClass:"swiper-button-projects-disabled"}});document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".faq-sector").forEach(t=>{t.addEventListener("click",function(){const n=this.querySelector(".faq-arrow"),o=this.querySelector(".faq-sector-description");n.classList.toggle("rotate"),o.classList.toggle("visually-hidden")})}),new g(".faq-section",{duration:400,showFirstItem:!1})});const q=document.getElementById("covers");function S(){const e=document.querySelector(" .covers-list");e.style.animationPlayState="running"}const I=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting&&S()})});I.observe(q);u.defaults.baseURL="https://portfolio-js.b.goit.study/api";async function P(){try{return(await u.get("/reviews")).data}catch{throw new Error("Not found")}}const p=document.querySelector(".reviews-swiper");async function A(){try{const e=await P();v(e)}catch(e){console.error(e),v([])}}A();function v(e){if(e.length===0){p.innerHTML="<p>Not found</p>";return}const t=e.map(n=>`<div class="swiper-slide review-carusel-list-item">
  <div class="user-review-outer-wrapper">
    <div class="user-review-inner-wrapper">
      <img
        src="${n.avatar_url}"
        alt="${n.author}"
        width="48"
        height="48"
        loading="lazy"
        class="reviews-item-img"
      />
      <div class="user-data-review-container">
        <h3 class="secondary-title review-user-name">${n.author}</h3>
        <p class="transparent-text review-user-comment">${n.review}</p>
      </div>
    </div>
  </div>
</div>`).join("");p.insertAdjacentHTML("beforeend",t)}new l(".reviews-swiper-container",{modules:[d],keyboard:{enabled:!0},mousewheel:{invert:!0},breakpoints:{320:{slidesPerView:1,spaceBetween:16},768:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:4,spaceBetween:16}},watchOverflow:!0,navigation:{nextEl:".reviews-btn-next",prevEl:".reviews-btn-prev",disabledClass:"swiper-button-reviews-disabled"}});function a(e){const t=e.target,n=50;t.value.length>n&&(t.value=t.value.substring(0,n)+"...")}function B(e){const t=e.target,n=50;t.value.length>n?t.value=t.value.substring(0,n)+"...":t.dataset.prevValue=t.value}function M(e){const t=e.target;if((e.keyCode===8||e.keyCode===46)&&t.value.endsWith("..."))t.value=t.value.slice(0,-3);else if(e.keyCode===8||e.keyCode===46){const n=t.dataset.prevValue||"";t.value=n.slice(0,-1),t.dataset.prevValue=t.value}}document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("client-comment");e.addEventListener("input",a),e.addEventListener("input",B),e.addEventListener("keydown",M)});const f=document.getElementById("client-email"),w=document.getElementById("client-comment");f&&w&&(f.addEventListener("input",a),w.addEventListener("input",a));function _(){const e=document.getElementById("client-email"),t=document.getElementById("client-comment");e&&t&&(e.value="",t.value="")}function O(e){return/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(e)}function V(e,t){const n={email:e,comment:t};u.post("https://portfolio-js.b.goit.study/api/requests",n).then(o=>{if(console.log("Response from server:",o),o.status===201)x(),_();else throw new Error("Unexpected response from server")}).catch(o=>{console.error("Error sending request:",o),o.response?o.response.status===400?c.error({title:"Error",message:"Bad request. Please check your input and try again.",position:"topRight"}):c.error({title:"Error",message:"Server error. Please try again later.",position:"topRight"}):o.request?c.error({title:"Error",message:"No response from server. Please check your internet connection and try again.",position:"topRight"}):c.error({title:"Error",message:"Failed to send request. Please try again.",position:"topRight"})})}function x(){const e=document.querySelector(".backdrop"),t=document.querySelector(".modal");e&&t&&(e.classList.add("active"),t.classList.add("active"),document.addEventListener("keydown",h),e.addEventListener("click",m))}function m(){const e=document.querySelector(".backdrop"),t=document.querySelector(".modal");e&&t&&(e.classList.remove("active"),t.classList.remove("active"),document.removeEventListener("keydown",h),e.removeEventListener("click",m))}function h(e){e.key==="Escape"&&m()}const y=document.querySelector(".work-together-form");y&&y.addEventListener("submit",function(e){e.preventDefault();const t=document.getElementById("client-email"),n=document.getElementById("client-comment");t&&n&&O(t.value)&&n.value.trim()!==""?(V(t.value,n.value),t.classList.remove("invalid"),t.classList.add("valid")):(t.classList.remove("valid"),t.classList.add("invalid"),c.error({title:"Error",message:"Invalid email or comment. Please try again.",position:"topRight"}))});document.addEventListener("DOMContentLoaded",function(){function e(t){document.querySelector(t).scrollIntoView({behavior:"smooth"})}document.querySelectorAll(".dropdown-link a").forEach(t=>{t.addEventListener("click",function(n){n.preventDefault();const o=this.getAttribute("href");e(o)})})});
//# sourceMappingURL=commonHelpers.js.map
