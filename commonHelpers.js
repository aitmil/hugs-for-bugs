import{A as c}from"./assets/vendor-8f98089f.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".faq-accordion").forEach(o=>{o.addEventListener("click",function(){const n=this.querySelector(".faq-arrow"),r=this.nextElementSibling;n.classList.toggle("rotate"),r.classList.toggle("visually-hidden")})}),new c(".faq-section",{duration:400,showFirstItem:!1})});
//# sourceMappingURL=commonHelpers.js.map
