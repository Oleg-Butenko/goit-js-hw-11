import{a as f,S as p,i as n}from"./assets/vendor-DqB7j7Ix.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const h="51380879-d62d23ff75e6f86b6b9ab3020";document.querySelector(".gallery");function y(s){return f.get("https://pixabay.com/api/",{params:{key:h,q:s.trim(),image_type:"photo",orientation:"horizontal",safesearch:!0}})}const u=document.querySelector(".gallery"),d=document.querySelector(".loader"),g=new p(".gallery a",{});function b(s){u.innerHTML=s.map(({webformatURL:r,largeImageURL:o,tags:l,likes:e,views:t,comments:i,downloads:m})=>`<li class="gallery-item">
            <a class="gallery-link" href="${o}">
                <img class="gallery-img" src="${r}" alt="${l}"/>
            </a>
            <ul class="descr-list">
                <li class="descr-list-item">
                    <h2>Likes</h2>
                    <p>${e}</p>
                </li>
                <li class="descr-list-item">
                    <h2>Views</h2>
                    <p>${t}</p>
                </li>
                <li class="descr-list-item">
                    <h2>Comments</h2>
                    <p>${i}</p>
                </li>
                <li class="descr-list-item">
                    <h2>Downloads</h2>
                    <p>${m}</p>
                </li>
            </ul>
        </li>`).join(""),g.refresh()}function L(){u.innerHTML=""}function w(){d.style.display="block"}function c(){d.style.display="none"}const a=document.querySelector(".form");a.addEventListener("submit",S);function S(s){s.preventDefault(),L(),w();const[r]=s.target.elements;if(!r.value.trim()){n.show({message:"Please enter a valid search query",messageColor:"white",backgroundColor:"red",maxWidth:"432px",close:!0,position:"topRight"}),c(),a.reset();return}y(r.value).then(o=>{o.data.hits.length===0?n.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",backgroundColor:"red",maxWidth:"432px",close:!0,position:"topRight"}):b(o.data.hits),c()}),a.reset()}
//# sourceMappingURL=index.js.map
