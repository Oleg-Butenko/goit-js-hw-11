import{S as m,a as f,i as p}from"./assets/vendor-Dy2ZTtfi.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const a=document.querySelector(".gallery"),n=document.querySelector(".loader");function y(s){a.innerHTML=s.map(({webformatURL:o,largeImageURL:l,tags:e,likes:t,views:i,comments:u,downloads:d})=>`
    <li class="gallery-item">
    <a class="gallery-link" href="${l}">
        <img class="gallery-img" src="${o}" alt="${e}"/>
        </a>
            <ul class="descr-list">
                <li class="descr-list-item">
                <h2>Likes</h2>
                <p>${t}</p>
                </li>
                <li class="descr-list-item">
                <h2>Views</h2>
                <p>${i}</p>
                </li>
                <li class="descr-list-item">
                <h2>Comments</h2>
                <p>${u}</p>
                </li>
                <li class="descr-list-item">
                <h2>Downloads</h2>
                <p>${d}</p>
                </li>
            </ul>
        </li>
        `).join(""),new m(".gallery a",{}).refresh()}function h(){a.innerHTML=""}function g(){n.style.display="block"}function b(){n.style.display="none"}const L="51380879-d62d23ff75e6f86b6b9ab3020";document.querySelector(".gallery");function S(s){f.get("https://pixabay.com/api/",{params:{key:L,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>{r.data.hits.length===0?p.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",backgroundColor:"red",maxWidth:"432px",close:!0,position:"topRight"}):y(r.data.hits),b()})}const c=document.querySelector(".form");c.addEventListener("submit",q);function q(s){s.preventDefault(),h(),g();const[r]=s.target.elements;S(r.value),c.reset()}
//# sourceMappingURL=index.js.map
