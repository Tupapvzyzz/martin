/* =========================
   MECAMOTOR V2 - SCRIPT
========================= */


/* ================= LOADER ================= */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
    }, 1200);

});


/* ================= CURSOR KAWASAKI ================= */

const cursor = document.getElementById("kawaCursor");

if (cursor) {
  document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
  });

  document.addEventListener("mousedown", () => {
    cursor.classList.add("kawa-click");
  });

  document.addEventListener("mouseup", () => {
    cursor.classList.remove("kawa-click");
  });

  const hoverItems = document.querySelectorAll(
    "a, button, .btn-primary, .btn-secondary, .cta-button, .btn-whatsapp, .whatsapp-float, .service-card, .brands-grid div, input, textarea"
  );

  hoverItems.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      cursor.classList.add("kawa-active");
    });

    item.addEventListener("mouseleave", () => {
      cursor.classList.remove("kawa-active");
    });
  });
}

/* ================= SMOOTH SCROLL ================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

/* ================= ANIMACIÓN CONTADORES ================= */

const stats = document.querySelectorAll(".stats h3");

const animateCounter = (el) => {

    let target = parseInt(el.innerText);
    let count = 0;

    let speed = target / 100;

    let interval = setInterval(() => {

        count += speed;

        if (count >= target) {
            el.innerText = target + "+";
            clearInterval(interval);
        } else {
            el.innerText = Math.floor(count);
        }

    }, 20);

};


const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            animateCounter(entry.target);
        }

    });

}, { threshold: 0.6 });


stats.forEach(stat => {
    observer.observe(stat);
});


/* ================= HOVER SERVICIOS ================= */

document.querySelectorAll(".service-card").forEach(card => {

    card.addEventListener("mousemove", (e) => {

        let rect = card.getBoundingClientRect();

        let x = e.clientX - rect.left;
        let y = e.clientY - rect.top;

        card.style.transform = `rotateX(${(y - rect.height/2)/20}deg) rotateY(${(x - rect.width/2)/20}deg)`;

    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "rotateX(0deg) rotateY(0deg)";
    });

});


/* ================= WHATSAPP CLICK EFFECT ================= */

const whatsapp = document.querySelector(".whatsapp-float");

if (whatsapp) {

    whatsapp.addEventListener("click", () => {

        whatsapp.style.transform = "scale(1.2)";

        setTimeout(() => {
            whatsapp.style.transform = "scale(1)";
        }, 200);

    });

}


/* ================= REVEAL ON SCROLL ================= */

const elements = document.querySelectorAll("section");

const reveal = () => {

    const triggerBottom = window.innerHeight * 0.85;

    elements.forEach(el => {

        const top = el.getBoundingClientRect().top;

        if (top < triggerBottom) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
            el.style.transition = "1s ease";
        }

    });

};

window.addEventListener("scroll", reveal);

reveal();
/
/* ================= CURSOR KAWASAKI ================= */

window.addEventListener("DOMContentLoaded", () => {

    const cursor = document.getElementById("kawaCursor");

    if (!cursor) {
        console.error("No existe #kawaCursor");
        return;
    }

    console.log("Cursor encontrado");

    document.addEventListener("mousemove", (e) => {

        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";

    });

});

