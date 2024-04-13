import{A as d,a as m,S as g}from"./assets/vendor-32dd1250.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))l(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function r(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(n){if(n.ep)return;n.ep=!0;const o=r(n);fetch(n.href,o)}})();document.addEventListener("DOMContentLoaded",function(){const t=document.querySelector(".mobile-menu-open-btn"),e=document.querySelector(".mobile-menu-wrapper");t.addEventListener("click",function(){e.classList.toggle("is-open")}),document.querySelectorAll(".dropdown").forEach(function(n){n.addEventListener("click",function(o){window.innerWidth>768&&n.nextElementSibling.classList.toggle("is-open")})}),document.querySelector(".mobile-menu-close-btn").addEventListener("click",function(){e.classList.remove("is-open")})});function v(){new d(".about-me__accordion-container",{duration:400,showMultiple:!1,collapse:!0})}v();const h=document.querySelectorAll(".about-me__header");h.forEach(t=>{t.addEventListener("click",function(){const r=this.closest(".about-me__item").querySelector(".about-me__panel");r&&r.classList.toggle("visually-hidden")})});document.addEventListener("DOMContentLoaded",function(){const t=document.querySelectorAll(".swiper-slide");let e=0;function r(){t.forEach((s,u)=>{u===e?s.classList.add("color-slide"):s.classList.remove("color-slide")})}r();function l(){t[e].classList.remove("color-slide"),e=(e+1)%t.length,t[e].classList.add("color-slide")}document.querySelector(".swiper-button-next").addEventListener("click",function(){l(),setTimeout(r,1e3)}),t.forEach((s,u)=>{s.addEventListener("click",function(){e=u,r()})});const o=document.querySelector(".swiper");let i=0,c=!1;o.addEventListener("touchstart",function(s){i=s.touches[0].clientX,c=!0}),o.addEventListener("touchmove",function(s){if(!c)return;const a=s.touches[0].clientX-i;Math.abs(a)>50&&(a>0?e=e===0?t.length-1:e-1:e=e===t.length-1?0:e+1,r(),c=!1)})});document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".faq-accordion").forEach(e=>{e.addEventListener("click",function(){const r=this.querySelector(".faq-arrow"),l=this.nextElementSibling;r.classList.toggle("rotate"),l.classList.toggle("visually-hidden")})}),new d(".faq-section",{duration:400,showFirstItem:!1})});const w=document.getElementById("covers");function L(){const t=document.querySelector(".rolling-images ul");t.style.animationPlayState="running"}const b=new IntersectionObserver(t=>{t.forEach(e=>{e.isIntersecting&&L()})});b.observe(w);m.defaults.baseURL="https://portfolio-js.b.goit.study/api";async function y(){return(await m.get("/reviews")).data}function E(t){t.then(e=>{const r=e.map(({avatar_url:o,_id:i,author:c,review:s})=>{const a=s.length>180,f=a?"review-user-comment-collapsed":"",p=a?s.slice(0,180)+"...":s;return`<li class="review-carusel-list-item">
                <div class="user-review-container">
                    <img class="review-user-photo" src="${o}" alt="${i}">
                    <div class="user-data-review-container" data-review="${s}">
                        <h4 class="review-user-name">${c}</h4>
                        <p class="review-user-comment ${f}">${p}</p>
                        ${a?'<button class="toggle-btn">Згорнути</button>':""}
                    </div>
                </div>
            </li>`}).join(""),l=document.querySelector(".reviews-carusel");l.innerHTML=r,document.querySelectorAll(".toggle-btn").forEach(o=>{o.addEventListener("click",function(){const i=this.closest(".user-data-review-container"),c=i.querySelector(".review-user-comment"),s=i.dataset.review;c.classList.toggle("review-user-comment-collapsed"),c.classList.contains("review-user-comment-collapsed")?(c.textContent=s.slice(0,180)+"...",this.textContent="Розгорнути"):(c.textContent=s,this.textContent="Згорнути")})})}).catch(e=>{console.error("Not found",e)})}E(y());document.addEventListener("DOMContentLoaded",function(){new g(".swiper-container",{direction:"horizontal",Pagination:{el:".swiper-pagination"},Navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},keyboard:!0,touch:!0,loop:!0})});
//# sourceMappingURL=commonHelpers.js.map
