window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  if (loader) {
    setTimeout(() => {
      loader.style.opacity = "0";
      loader.style.visibility = "hidden";
    }, 1200);
  }
});

const cursor = document.getElementById("kawaCursor");

let mouseX = 0;
let mouseY = 0;
let lastX = 0;
let lastY = 0;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;

  if (!cursor) return;

  const dx = mouseX - lastX;
  const dy = mouseY - lastY;
  const angle = Math.atan2(dy, dx) * 180 / Math.PI;

  cursor.style.left = mouseX + "px";
  cursor.style.top = mouseY + "px";
  cursor.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;

  createTrail(mouseX, mouseY);

  lastX = mouseX;
  lastY = mouseY;
});

function createTrail(x, y) {
  const trail = document.createElement("span");
  trail.className = "kawa-trail";
  trail.style.left = x + "px";
  trail.style.top = y + "px";

  document.body.appendChild(trail);

  setTimeout(() => {
    trail.remove();
  }, 500);
}

document.addEventListener("click", (e) => {
  for (let i = 0; i < 8; i++) {
    const spark = document.createElement("span");
    spark.className = "kawa-spark";
    spark.style.left = e.clientX + "px";
    spark.style.top = e.clientY + "px";
    spark.style.setProperty("--x", `${(Math.random() - 0.5) * 120}px`);
    spark.style.setProperty("--y", `${(Math.random() - 0.5) * 120}px`);
    document.body.appendChild(spark);

    setTimeout(() => spark.remove(), 600);
  }
});
