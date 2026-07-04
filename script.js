/* ================= ENTRADA MECAMOTOR ================= */

window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  if (loader) {
    setTimeout(() => {
      loader.style.opacity = "0";
      loader.style.visibility = "hidden";
      loader.style.pointerEvents = "none";
    }, 4200);
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
    /* ================= SONIDO MOTOR + HUMO ================= */

const motorBtn = document.getElementById("motorBtn");
const smokeContainer = document.getElementById("smokeContainer");

const motorSound = new Audio("motor.mp3");
motorSound.loop = true;
motorSound.volume = 0.45;

let motorActivo = false;
let smokeInterval;

if (motorBtn) {
  motorBtn.addEventListener("click", () => {
    motorActivo = !motorActivo;

    if (motorActivo) {
      motorSound.play();

      motorBtn.textContent = "🔇 Apagar motor";
      motorBtn.classList.add("active");

      smokeInterval = setInterval(() => {
        crearHumo();
        crearParticulaFuego();
      }, 180);

    } else {
      motorSound.pause();

      motorBtn.textContent = "🔊 Encender motor";
      motorBtn.classList.remove("active");

      clearInterval(smokeInterval);
    }
  });
}

function crearHumo() {
  if (!smokeContainer) return;

  const humo = document.createElement("span");
  humo.className = "smoke";

  humo.style.left = 60 + Math.random() * 35 + "px";
  humo.style.bottom = 35 + Math.random() * 20 + "px";

  smokeContainer.appendChild(humo);

  setTimeout(() => {
    humo.remove();
  }, 2800);
}

function crearParticulaFuego() {
  if (!smokeContainer) return;

  const fire = document.createElement("span");
  fire.className = "fire-particle";

  fire.style.setProperty("--x", `${Math.random() * 90}px`);
  fire.style.setProperty("--y", `${-40 - Math.random() * 90}px`);

  smokeContainer.appendChild(fire);

  setTimeout(() => {
    fire.remove();
  }, 1000);
}
  });
});
/* ================= MOTOR SOUND SYSTEM ================= */

const engineBtn = document.getElementById("engineBtn");
const motorStart = document.getElementById("motorStart");
const motorBlips = document.getElementById("motorBlips");
const engineFlash = document.getElementById("engineFlash");
const smokeBox = document.getElementById("smokeBox");

let enginePlaying = false;

function createSmoke() {
  if (!smokeBox) return;

  const smoke = document.createElement("div");
  smoke.classList.add("smoke");

  smoke.style.left = Math.random() * 40 + "px";
  smoke.style.bottom = Math.random() * 20 + "px";

  smokeBox.appendChild(smoke);

  setTimeout(() => {
    smoke.remove();
  }, 1800);
}

function engineFlashEffect() {
  if (!engineFlash) return;

  engineFlash.classList.remove("flash");
  void engineFlash.offsetWidth;
  engineFlash.classList.add("flash");
}

function shakeScreen() {
  document.body.classList.remove("engine-shake");
  void document.body.offsetWidth;
  document.body.classList.add("engine-shake");
}

function engineEffectBurst() {
  engineFlashEffect();
  shakeScreen();

  for (let i = 0; i < 6; i++) {
    setTimeout(createSmoke, i * 120);
  }
}

if (engineBtn && motorStart && motorBlips) {
  engineBtn.addEventListener("click", () => {
    if (enginePlaying) return;

    enginePlaying = true;
    engineBtn.classList.add("active");
    engineBtn.textContent = "🏍️ Motor encendido";

    motorStart.currentTime = 0;
    motorBlips.currentTime = 0;

    motorStart.volume = 1;
    motorBlips.volume = 1;

    motorStart.play();

    engineEffectBurst();

    const smokeInterval = setInterval(createSmoke, 500);

    motorStart.onended = () => {
      setTimeout(() => {
        motorBlips.play();
        engineEffectBurst();

        setTimeout(engineEffectBurst, 900);
        setTimeout(engineEffectBurst, 1700);
      }, 500);
    };

    motorBlips.onended = () => {
      clearInterval(smokeInterval);

      engineBtn.classList.remove("active");
      engineBtn.textContent = "🔊 Encender motor";

      enginePlaying = false;
    };
  });
}
/* ================= DASHBOARD KAWASAKI PRO ================= */

const bikeDashboard = document.getElementById("bikeDashboard");
const rpmNeedle = document.getElementById("rpmNeedle");
const rpmNumber = document.getElementById("rpmNumber");
const speedNumber = document.getElementById("speedNumber");
const gearNumber = document.getElementById("gearNumber");
const tempNumber = document.getElementById("tempNumber");
const fuelNumber = document.getElementById("fuelNumber");
const engineLed = document.querySelector(".engine-led");

function setDashboard(rpm, speed, gear, temp, fuel) {
  if (!rpmNeedle || !rpmNumber) return;

  const maxRPM = 16000;
  const minAngle = -120;
  const maxAngle = 120;

  const cleanRPM = Math.max(0, Math.min(rpm, maxRPM));
  const angle = minAngle + (cleanRPM / maxRPM) * (maxAngle - minAngle);

  rpmNeedle.style.transform = `translateX(-50%) rotate(${angle}deg)`;
  rpmNumber.textContent = Math.round(cleanRPM);

  if (speedNumber) speedNumber.textContent = speed;
  if (gearNumber) gearNumber.textContent = gear;
  if (tempNumber) tempNumber.textContent = temp + "°C";
  if (fuelNumber) fuelNumber.textContent = fuel + "%";
}

function dashboardBoot() {
  setDashboard(0, 0, "N", 72, 84);

  setTimeout(() => setDashboard(3000, 0, "N", 73, 84), 300);
  setTimeout(() => setDashboard(7000, 0, "N", 74, 84), 600);
  setTimeout(() => setDashboard(12000, 0, "N", 75, 84), 900);
  setTimeout(() => setDashboard(1500, 0, "N", 76, 84), 1300);
}

function dashboardIdle() {
  setDashboard(1500, 0, "N", 78, 84);
}

function dashboardRevSequence() {
  if (bikeDashboard) bikeDashboard.classList.add("revving");
  if (engineLed) engineLed.classList.add("warning");

  setTimeout(() => setDashboard(6000, 18, "1", 79, 84), 100);
  setTimeout(() => setDashboard(11500, 42, "2", 80, 83), 350);
  setTimeout(() => setDashboard(6500, 25, "1", 80, 83), 700);
  setTimeout(() => setDashboard(13500, 58, "2", 81, 83), 1050);
  setTimeout(() => setDashboard(8000, 31, "1", 82, 83), 1400);
  setTimeout(() => setDashboard(12500, 50, "2", 83, 82), 1750);
  setTimeout(() => setDashboard(1500, 0, "N", 82, 82), 2300);

  setTimeout(() => {
    if (bikeDashboard) bikeDashboard.classList.remove("revving");
    if (engineLed) engineLed.classList.remove("warning");
  }, 2500);
}
