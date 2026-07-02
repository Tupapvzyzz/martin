/*=========================================
MECAMOTOR
JavaScript Premium
==========================================*/


//==============================
// LOADER
//==============================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";
        loader.style.visibility = "hidden";

    },1200);

});




//==============================
// CURSOR PERSONALIZADO
//==============================

const cursor = document.getElementById("cursor");

document.addEventListener("mousemove",(e)=>{

    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

});




//==============================
// BOTÓN SUBIR
//==============================

const topButton = document.getElementById("topButton");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 400){

        topButton.style.display="flex";

    }

    else{

        topButton.style.display="none";

    }

});

topButton.addEventListener("click",()=>{

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

});




//==============================
// NAVBAR
//==============================

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY>60){

        header.style.background="rgba(0,0,0,.92)";
        header.style.backdropFilter="blur(18px)";
        header.style.boxShadow="0 8px 30px rgba(0,0,0,.4)";

    }

    else{

        header.style.background="transparent";
        header.style.boxShadow="none";

    }

});




//==============================
// ANIMACIÓN SCROLL
//==============================

const reveal=()=>{

const reveals=document.querySelectorAll("section");

reveals.forEach(sec=>{

const top=sec.getBoundingClientRect().top;

const windowHeight=window.innerHeight;

if(top<windowHeight-120){

sec.classList.add("active");
sec.classList.add("reveal");

}

});

}

window.addEventListener("scroll",reveal);

reveal();




//==============================
// CONTADOR
//==============================

const counters=document.querySelectorAll(".stat h2");

const speed=120;

counters.forEach(counter=>{

const update=()=>{

let target=counter.innerText.replace(/\D/g,"");

target=parseInt(target);

let count=parseInt(counter.getAttribute("data-count"))||0;

const increment=Math.ceil(target/speed);

if(count<target){

count+=increment;

counter.setAttribute("data-count",count);

if(counter.innerText.includes("%")){

counter.innerText=count+"%";

}

else if(counter.innerText.includes("+")){

counter.innerText="+"+count;

}

else{

counter.innerText=count;

}

requestAnimationFrame(update);

}

else{

if(counter.innerText.includes("%")){

counter.innerText=target+"%";

}

else if(counter.innerText.includes("+")){

counter.innerText="+"+target;

}

else{

counter.innerText=target;

}

}

}

update();

});




//==============================
// EFECTO HOVER TARJETAS
//==============================

document.querySelectorAll(".service-card").forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

card.style.background=`radial-gradient(circle at ${x}px ${y}px,
rgba(57,255,20,.12),
rgba(20,20,20,.95))`;

});

card.addEventListener("mouseleave",()=>{

card.style.background="rgba(255,255,255,.03)";

});

});




//==============================
// PARALLAX HERO
//==============================

const hero=document.querySelector(".hero-video");

window.addEventListener("scroll",()=>{

const value=window.scrollY*0.3;

hero.style.transform=`translateY(${value}px)`;

});




//==============================
// EFECTO ZOOM IMÁGENES
//==============================

document.querySelectorAll(".gallery-item img").forEach(img=>{

img.addEventListener("click",()=>{

const overlay=document.createElement("div");

overlay.style.position="fixed";
overlay.style.left="0";
overlay.style.top="0";
overlay.style.width="100%";
overlay.style.height="100%";
overlay.style.background="rgba(0,0,0,.9)";
overlay.style.display="flex";
overlay.style.alignItems="center";
overlay.style.justifyContent="center";
overlay.style.zIndex="999999";

const image=document.createElement("img");

image.src=img.src;
image.style.maxWidth="90%";
image.style.maxHeight="90%";
image.style.borderRadius="20px";
image.style.boxShadow="0 0 40px rgba(57,255,20,.35)";

overlay.appendChild(image);

overlay.addEventListener("click",()=>{

overlay.remove();

});

document.body.appendChild(overlay);

});

});




//==============================
// SCROLL SUAVE
//==============================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior:"smooth"

});

});

});




//==============================
// MENÚ RESPONSIVE
//==============================

const menuBtn=document.querySelector(".menu-mobile");

const menu=document.querySelector(".menu");

menuBtn.addEventListener("click",()=>{

if(menu.style.display==="flex"){

menu.style.display="none";

}

else{

menu.style.display="flex";
menu.style.flexDirection="column";
menu.style.position="absolute";
menu.style.top="90px";
menu.style.right="20px";
menu.style.background="#111";
menu.style.padding="25px";
menu.style.borderRadius="20px";
menu.style.gap="20px";
menu.style.boxShadow="0 0 30px rgba(57,255,20,.2)";

}

});




//==============================
// EFECTO ESCRITURA
//==============================

const title=document.querySelector(".hero-content h1");

const text=title.innerText;

title.innerHTML="";

let i=0;

function type(){

if(i<text.length){

title.innerHTML+=text.charAt(i);

i++;

setTimeout(type,90);

}

}

setTimeout(type,1500);




//==============================
// REPRODUCIR VIDEO SI ESTÁ PAUSADO
//==============================

const video=document.querySelector(".hero-video");

if(video){

video.play().catch(()=>{});

}




console.log("MECAMOTOR Premium cargado correctamente.");
