let $imageModal=document.getElementById("imageModal");if($imageModal){let e=document.getElementById("imageModalImg"),t=document.getElementById("imageModalClose"),l=document.getElementsByClassName("modal__img");for(let t of l)t.addEventListener("click",(function(){let l=t.getAttribute("src");e.setAttribute("src",l),$imageModal.style.display="flex"}));t.onclick=function(){$imageModal.style.display="none"},window.onclick=function(e){e.target==$imageModal&&($imageModal.style.display="none")}}