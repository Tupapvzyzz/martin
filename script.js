¿/* LOADER */
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  if (loader) {
    setTimeout(() => {
      loader.style.opacity = "0";
      loader.style.visibility = "hidden";
    }, 1200);
  }
});

/* CURSOR KAWASAKI */
window.addEventListener("DOMContentLoaded", () => {
  const cursor = document.getElementById("kawaCursor");

  if (!cursor) return;

  let x = 0;
  let y = 0;

  document.addEventListener("mousemove", (e) => {
    x = e.clientX;
    y = e.clientY;

    cursor.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
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
});

/* SMOOTH SCROLL */
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      e.preventDefault();
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});
