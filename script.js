/*=========================================
MECAMOTOR
Diseño Premium
Autor: ChatGPT
==========================================*/


/*========================
VARIABLES
=========================*/

:root{

--verde:#39FF14;
--verde2:#25d366;
--negro:#050505;
--gris:#111111;
--gris2:#1c1c1c;
--blanco:#ffffff;
--texto:#d8d8d8;
--shadow:0 0 25px rgba(57,255,20,.45);

}


*{

margin:0;
padding:0;
box-sizing:border-box;

}


html{

scroll-behavior:smooth;

}


body{

font-family:'Poppins',sans-serif;
background:#000;
color:#fff;
overflow-x:hidden;

}


body::before{

content:"";
position:fixed;
inset:0;

background-image:url("carbon-texture.png");
background-size:cover;
background-position:center;
opacity:.08;
pointer-events:none;
z-index:-1;

}


/*========================
SCROLL
=========================*/

::-webkit-scrollbar{

width:10px;

}

::-webkit-scrollbar-track{

background:#111;

}

::-webkit-scrollbar-thumb{

background:var(--verde);
border-radius:50px;

}



/*========================
LOADER
=========================*/

#loader{

position:fixed;
width:100%;
height:100vh;

background:#000;

display:flex;
align-items:center;
justify-content:center;

z-index:99999;

transition:.8s;

}


.loader-logo{

text-align:center;

}


.loader-logo img{

width:140px;
height:140px;
border-radius:50%;
border:4px solid var(--verde);

animation:girar 4s linear infinite;

box-shadow:var(--shadow);

}


.loader-logo h2{

margin-top:20px;
font-size:35px;
font-family:'Orbitron',sans-serif;
letter-spacing:4px;
color:var(--verde);

}



@keyframes girar{

0%{

transform:rotate(0);

}

100%{

transform:rotate(360deg);

}

}



/*========================
CURSOR
=========================*/

#cursor{

position:fixed;

width:22px;
height:22px;

border-radius:50%;

background:var(--verde);

pointer-events:none;

z-index:999999;

mix-blend-mode:difference;

transition:.08s linear;

box-shadow:0 0 20px var(--verde);

}



/*========================
NAVBAR
=========================*/

header{

position:fixed;

top:0;
left:0;

width:100%;

z-index:999;

transition:.4s;

}


.navbar{

display:flex;

justify-content:space-between;

align-items:center;

padding:18px 8%;

backdrop-filter:blur(16px);

background:rgba(0,0,0,.30);

border-bottom:1px solid rgba(255,255,255,.08);

}


.logo img{

width:70px;
height:70px;

border-radius:50%;

box-shadow:var(--shadow);

transition:.4s;

}


.logo img:hover{

transform:scale(1.1);

}


.menu{

display:flex;

gap:40px;

list-style:none;

}


.menu a{

text-decoration:none;

color:#fff;

font-weight:500;

transition:.35s;

position:relative;

}


.menu a::after{

content:"";

position:absolute;

left:0;
bottom:-8px;

width:0%;

height:2px;

background:var(--verde);

transition:.3s;

}


.menu a:hover{

color:var(--verde);

}


.menu a:hover::after{

width:100%;

}


.btn-nav{

background:var(--verde);

padding:14px 28px;

border-radius:40px;

text-decoration:none;

font-weight:700;

color:#000;

transition:.35s;

}


.btn-nav:hover{

transform:translateY(-5px);

box-shadow:var(--shadow);

}


.menu-mobile{

display:none;

font-size:30px;

cursor:pointer;

color:#fff;

}



/*========================
HERO
=========================*/

.hero{

position:relative;

height:100vh;

display:flex;

justify-content:center;

align-items:center;

text-align:center;

overflow:hidden;

}


.hero-video{

position:absolute;

top:0;
left:0;

width:100%;
height:100%;

object-fit:cover;

z-index:-3;

}


.overlay{

position:absolute;

width:100%;
height:100%;

background:rgba(0,0,0,.60);

z-index:-2;

}


.hero-content{

max-width:900px;

padding:20px;

animation:fadeUp 1.4s ease;

}


.hero-content h3{

font-size:22px;

letter-spacing:6px;

color:var(--verde);

margin-bottom:20px;

}


.hero-content h1{

font-size:95px;

font-family:'Orbitron',sans-serif;

margin-bottom:25px;

text-shadow:0 0 30px rgba(57,255,20,.35);

}


.hero-content p{

font-size:22px;

color:#ddd;

margin-bottom:45px;

}


.hero-buttons{

display:flex;

justify-content:center;

gap:20px;

flex-wrap:wrap;

}


.btn-primary{

background:var(--verde);

color:#000;

padding:18px 42px;

border-radius:50px;

text-decoration:none;

font-weight:bold;

transition:.4s;

}


.btn-primary:hover{

transform:translateY(-7px);

box-shadow:var(--shadow);

}


.btn-secondary{

border:2px solid var(--verde);

padding:18px 42px;

border-radius:50px;

color:#fff;

text-decoration:none;

transition:.4s;

}


.btn-secondary:hover{

background:var(--verde);

color:#000;

box-shadow:var(--shadow);

}



/*========================
HERO BIKE
=========================*/

.hero-bike{

display:flex;

justify-content:space-between;

align-items:center;

padding:120px 9%;

gap:60px;

background:#090909;

}


.bike-left{

flex:1;

}


.bike-left h2{

font-size:52px;

margin-bottom:25px;

font-family:'Orbitron',sans-serif;

}


.bike-left p{

font-size:18px;

line-height:1.8;

color:#cfcfcf;

margin-bottom:35px;

}


.bike-left ul{

list-style:none;

}


.bike-left li{

margin-bottom:18px;

font-size:18px;

}


.bike-left i{

color:var(--verde);

margin-right:12px;

}


.bike-right{

flex:1;

text-align:center;

}


.bike-right img{

max-width:100%;

filter:drop-shadow(0 0 40px rgba(57,255,20,.25));

animation:flotar 4s ease-in-out infinite;

}


@keyframes flotar{

0%{

transform:translateY(0);

}

50%{

transform:translateY(-18px);

}

100%{

transform:translateY(0);

}

}



/*========================
ANIMACIONES
=========================*/

@keyframes fadeUp{

from{

opacity:0;

transform:translateY(60px);

}

to{

opacity:1;

transform:translateY(0);

}

}
/*=========================================
SERVICIOS
==========================================*/

.services{

padding:120px 8%;
background:#080808;

}

.section-title{

text-align:center;
margin-bottom:70px;

}

.section-title span{

color:var(--verde);
letter-spacing:4px;
font-size:14px;
font-weight:600;

}

.section-title h2{

font-size:52px;
font-family:'Orbitron',sans-serif;
margin:20px 0;

}

.section-title p{

max-width:700px;
margin:auto;
color:#cfcfcf;
line-height:1.8;

}


.services-grid{

display:grid;

grid-template-columns:repeat(auto-fit,minmax(280px,1fr));

gap:35px;

margin-top:70px;

}



.service-card{

background:rgba(255,255,255,.03);

border:1px solid rgba(255,255,255,.08);

padding:45px 35px;

border-radius:25px;

text-align:center;

transition:.45s;

backdrop-filter:blur(12px);

position:relative;

overflow:hidden;

}


.service-card::before{

content:"";

position:absolute;

width:250px;
height:250px;

background:rgba(57,255,20,.06);

border-radius:50%;

top:-120px;
right:-120px;

transition:.5s;

}


.service-card:hover::before{

transform:scale(1.6);

}


.service-card:hover{

transform:translateY(-12px);

border-color:var(--verde);

box-shadow:0 0 40px rgba(57,255,20,.18);

}


.service-card i{

font-size:60px;

color:var(--verde);

margin-bottom:25px;

}


.service-card h3{

font-size:28px;

margin-bottom:18px;

}


.service-card p{

line-height:1.8;

color:#cfcfcf;

}



/*=========================================
ESTADÍSTICAS
==========================================*/

.stats{

display:grid;

grid-template-columns:repeat(4,1fr);

background:#050505;

padding:90px 8%;

gap:40px;

text-align:center;

}


.stat{

padding:35px;

border-radius:20px;

background:#111;

transition:.4s;

}


.stat:hover{

transform:translateY(-10px);

box-shadow:0 0 30px rgba(57,255,20,.18);

}


.stat h2{

font-size:55px;

color:var(--verde);

font-family:'Orbitron',sans-serif;

margin-bottom:10px;

}


.stat span{

color:#d8d8d8;

font-size:18px;

}



/*=========================================
GALERÍA
==========================================*/

.gallery{

padding:120px 8%;

background:#090909;

}


.gallery-grid{

display:grid;

grid-template-columns:repeat(auto-fit,minmax(320px,1fr));

gap:25px;

margin-top:60px;

}


.gallery-item{

overflow:hidden;

border-radius:20px;

position:relative;

cursor:pointer;

}


.gallery-item img,
.gallery-item video{

width:100%;

height:320px;

object-fit:cover;

transition:.6s;

display:block;

}


.gallery-item::after{

content:"";

position:absolute;

inset:0;

background:linear-gradient(to top,rgba(0,0,0,.55),transparent);

opacity:0;

transition:.4s;

}


.gallery-item:hover::after{

opacity:1;

}


.gallery-item:hover img,
.gallery-item:hover video{

transform:scale(1.12);

}



/*=========================================
ABOUT
==========================================*/

.about{

display:flex;

align-items:center;

justify-content:space-between;

gap:70px;

padding:120px 8%;

background:#050505;

}


.about-left{

flex:1;

}


.about-left h2{

font-size:50px;

margin-bottom:25px;

font-family:'Orbitron',sans-serif;

}


.about-left p{

line-height:1.9;

color:#cfcfcf;

margin-bottom:45px;

}


.features{

display:grid;

grid-template-columns:repeat(auto-fit,minmax(220px,1fr));

gap:30px;

}


.features div{

background:#101010;

padding:30px;

border-radius:20px;

transition:.4s;

}


.features div:hover{

transform:translateY(-8px);

border:1px solid var(--verde);

}


.features i{

font-size:42px;

color:var(--verde);

margin-bottom:20px;

}


.features h4{

font-size:24px;

margin-bottom:15px;

}


.features p{

font-size:15px;

margin:0;

color:#d0d0d0;

}


.about-right{

flex:1;

text-align:center;

}


.about-right img{

max-width:420px;

width:100%;

border-radius:50%;

border:5px solid var(--verde);

box-shadow:0 0 45px rgba(57,255,20,.25);

}



/*=========================================
CTA
==========================================*/

.cta{

padding:120px 8%;

text-align:center;

background:linear-gradient(135deg,#020202,#101010);

}


.cta h2{

font-size:55px;

margin-bottom:25px;

font-family:'Orbitron',sans-serif;

}


.cta p{

font-size:20px;

color:#d8d8d8;

margin-bottom:45px;

}


.cta-button{

display:inline-block;

padding:20px 45px;

background:var(--verde);

border-radius:50px;

text-decoration:none;

font-weight:bold;

font-size:18px;

color:#000;

transition:.4s;

}


.cta-button:hover{

transform:scale(1.08);

box-shadow:0 0 40px rgba(57,255,20,.35);

}


.cta-button i{

margin-right:10px;

}
/*=========================================
CONTACTO
==========================================*/

.contact{

padding:120px 8%;
background:#070707;

}

.contact-container{

display:grid;
grid-template-columns:1fr 1fr;
gap:60px;
margin-top:70px;

}

.contact-info{

background:#111;
padding:50px;
border-radius:25px;
border:1px solid rgba(255,255,255,.08);

}

.contact-info h3{

font-size:42px;
font-family:'Orbitron',sans-serif;
color:var(--verde);
margin-bottom:30px;

}

.contact-info p{

font-size:18px;
margin-bottom:25px;
line-height:1.8;

}

.contact-info i{

color:var(--verde);
margin-right:12px;

}

.contact-form{

display:flex;
flex-direction:column;
gap:20px;

}

.contact-form input,
.contact-form textarea{

background:#111;
border:none;
padding:18px;
border-radius:15px;
color:#fff;
font-size:16px;
outline:none;
border:1px solid rgba(255,255,255,.08);

transition:.3s;

}

.contact-form input:focus,
.contact-form textarea:focus{

border-color:var(--verde);
box-shadow:0 0 15px rgba(57,255,20,.25);

}

.contact-form button{

background:var(--verde);
color:#000;
border:none;
padding:18px;
border-radius:50px;
font-size:18px;
font-weight:bold;
cursor:pointer;
transition:.35s;

}

.contact-form button:hover{

transform:translateY(-6px);
box-shadow:var(--shadow);

}


/*=========================================
MAPA
==========================================*/

.map{

width:100%;
height:500px;

}

.map iframe{

width:100%;
height:100%;
border:0;

}


/*=========================================
FOOTER
==========================================*/

footer{

background:#030303;
padding:90px 8% 30px;

}

.footer-container{

display:grid;
grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
gap:60px;

}

.footer-logo img{

width:110px;
border-radius:50%;
margin-bottom:20px;
box-shadow:var(--shadow);

}

.footer-logo h2{

font-family:'Orbitron',sans-serif;
margin-bottom:15px;

}

.footer-logo p{

line-height:1.8;
color:#cfcfcf;

}

.footer-links h3,
.footer-contact h3{

margin-bottom:25px;
color:var(--verde);

}

.footer-links a{

display:block;
margin-bottom:15px;
color:#fff;
text-decoration:none;
transition:.3s;

}

.footer-links a:hover{

color:var(--verde);
padding-left:10px;

}

.footer-contact p{

margin-bottom:15px;

}

.footer-contact i{

color:var(--verde);
margin-right:10px;

}

.copyright{

margin-top:60px;
padding-top:30px;
border-top:1px solid rgba(255,255,255,.08);
text-align:center;
color:#999;

}


/*=========================================
WHATSAPP
==========================================*/

.whatsapp{

position:fixed;

right:30px;
bottom:30px;

width:70px;
height:70px;

background:#25d366;

border-radius:50%;

display:flex;
justify-content:center;
align-items:center;

color:#fff;
font-size:34px;

text-decoration:none;

z-index:999;

box-shadow:0 0 30px rgba(37,211,102,.45);

animation:whatsapp 2s infinite;

transition:.35s;

}

.whatsapp:hover{

transform:scale(1.12);

}

@keyframes whatsapp{

0%{

transform:scale(1);

}

50%{

transform:scale(1.12);

}

100%{

transform:scale(1);

}

}


/*=========================================
BOTÓN SUBIR
==========================================*/

#topButton{

position:fixed;

left:30px;
bottom:30px;

width:60px;
height:60px;

border:none;
border-radius:50%;

background:var(--verde);

color:#000;

font-size:22px;

cursor:pointer;

display:none;

z-index:999;

transition:.35s;

}

#topButton:hover{

transform:translateY(-6px);

box-shadow:var(--shadow);

}


/*=========================================
RESPONSIVE
==========================================*/

@media(max-width:992px){

.menu{

display:none;

}

.menu-mobile{

display:block;

}

.hero-content h1{

font-size:60px;

}

.hero-bike{

flex-direction:column;

text-align:center;

}

.about{

flex-direction:column;

}

.contact-container{

grid-template-columns:1fr;

}

.stats{

grid-template-columns:repeat(2,1fr);

}

}

@media(max-width:768px){

.hero-content h1{

font-size:45px;

}

.hero-content p{

font-size:18px;

}

.section-title h2{

font-size:36px;

}

.bike-left h2,
.about-left h2,
.cta h2{

font-size:34px;

}

.stats{

grid-template-columns:1fr;

}

.gallery-grid{

grid-template-columns:1fr;

}

.services-grid{

grid-template-columns:1fr;

}

.footer-container{

grid-template-columns:1fr;

text-align:center;

}

.whatsapp{

width:60px;
height:60px;
font-size:30px;

}

}


/*=========================================
EFECTOS DE APARICIÓN
==========================================*/

.reveal{

opacity:0;
transform:translateY(60px);
transition:1s;

}

.reveal.active{

opacity:1;
transform:translateY(0);

}
