import{S as f,i as p}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const g=r=>{const s="https://pixabay.com/api/",a=new URLSearchParams({key:"45547752-43a0cb06c467be16aeef39c83",q:`${r}`,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`${s}?${a}`).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()}).catch(o=>console.log(o))},d=(r,s)=>{const a=s.map(({webformatURL:o,largeImageURL:e,tags:t,likes:n,views:c,comments:m,downloads:u})=>`<li class="gallery-item">
        <a class="gallery-link" href="${e}">
          <img class="gallery-image" src="${o}" alt="${t}" />
        
        <ul class="info-list">
          <li class="info-item"><b>Likes</b>
          <span>${n}</span></li>
          <li class="info-item"><b>Views</b>
          <span>${c}</span></li>
          <li class="info-item"><b>Comments</b>
          <span>${m}</span></li>
          <li class="info-item"><b>Downloads
          <span></b>${u}</span></li>
        </ul>
        </a>
      </li>`).join("");r.innerHTML=a},h=r=>{const s='<span class="loader visible"></span>';r.insertAdjacentHTML("afterend",s)},y=r=>r.innerHTML="",i={form:document.querySelector(".search-form"),gallery:document.querySelector(".gallery")},l=r=>p.warning({message:r,position:"topRight",backgroundColor:"#EF4040",messageColor:"#FAFAFB",iconUrl:"./img/error.png",messageSize:"16px",messageLineHeight:"24px",maxWidth:"432px",theme:"dark"}),b=new f(".gallery a",{captionsData:"alt",captionDelay:250}),L=r=>{r.preventDefault();const s=r.currentTarget,a=s.input.value;if(!a)return l("There's nothing to search. Please, type the query target first!");h(i.form);const o=document.querySelector(".loader");y(i.gallery),g(a).then(({hits:e})=>{e.length>0?(d(i.gallery,e),b.refresh()):l("Sorry, there are no images matching your search query. Please try again!")}).catch(e=>l("Ooops... Something go wrong. Please, try again later")).finally(()=>{o.classList.remove("visible"),s.reset()})};i.form.addEventListener("submit",L);
//# sourceMappingURL=commonHelpers.js.map
