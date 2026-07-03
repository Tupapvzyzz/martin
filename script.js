/* ================= LOADER ================= */
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  if (loader) {
    setTimeout(() => {
      loader.style.opacity = "0";
      loader.style.visibility = "hidden";
    }, 1200);
  }
});

/* ================= CURSOR KAWASAKI PRO ================= */
const cursor = document.getElementById("kawaCursor");

let lastX = 0;
let lastY = 0;

document.addEventListener("mousemove", (e) => {
  if (!cursor) return;

  const x = e.clientX;
  const y = e.clientY;

  const dx = x - lastX;
  const dy = y - lastY;
  const angle = Math.atan2(dy, dx) * 180 / Math.PI;

  cursor.style.left = x + "px";
  cursor.style.top = y + "px";
  cursor.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;

  crearEstela(x, y);

  lastX = x;
  lastY = y;
});

function crearEstela(x, y) {
  const estela = document.createElement("span");
  estela.className = "kawa-trail";
  estela.style.left = x + "px";
  estela.style.top = y + "px";

  document.body.appendChild(estela);

  setTimeout(() => {
    estela.remove();
  }, 500);
}

document.addEventListener("click", (e) => {
  for (let i = 0; i < 10; i++) {
    const chispa = document.createElement("span");
    chispa.className = "kawa-spark";

    chispa.style.left = e.clientX + "px";
    chispa.style.top = e.clientY + "px";

    chispa.style.setProperty("--x", `${(Math.random() - 0.5) * 160}px`);
    chispa.style.setProperty("--y", `${(Math.random() - 0.5) * 160}px`);

    document.body.appendChild(chispa);

    setTimeout(() => {
      chispa.remove();
    }, 650);
  }
});

/* ================= SMOOTH SCROLL ================= */
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      e.preventDefault();
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
    document.addEventListener("click", (e) => {
  for (let i = 0; i < 14; i++) {
    const spark = document.createElement("span");
    spark.className = "kawa-spark";

    spark.style.left = e.clientX + "px";
    spark.style.top = e.clientY + "px";

    spark.style.setProperty("--x", `${(Math.random() - 0.5) * 180}px`);
    spark.style.setProperty("--y", `${(Math.random() - 0.5) * 180}px`);

    document.body.appendChild(spark);

    setTimeout(() => {
      spark.remove();
    }, 700);
  }
});
  });
});
