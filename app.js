// MODULO DE ESCANEO MECAMOTOR
const botonEscanear = document.getElementById('boton-escanear');
const resultadoEscaneo = document.getElementById('resultado-escaneo');

if (botonEscanear && resultadoEscaneo) {
  botonEscanear.addEventListener('click', () => {
    botonEscanear.disabled = true;
    botonEscanear.innerText = "Escaneando sistemas...";
    botonEscanear.style.opacity = "0.6";
    resultadoEscaneo.innerText = "Conectando con la ECU de la motocicleta...";
    resultadoEscaneo.style.color = "#cbd5e1";

    setTimeout(() => {
      const respuestas = [
        "✅ Diagnóstico Completo: Sistemas en óptimas condiciones físicas y electrónicas.",
        "⚠️ Alerta: Sensor de oxígeno con lecturas inestables. Requiere limpieza rápida.",
        "❌ Falla Detectada: Código P0300 (Fallo de encendido en cilindro). Revisar bujías."
      ];
      
      const respuestaAlAzar = respuestas[Math.floor(Math.random() * respuestas.length)];
      resultadoEscaneo.innerText = respuestaAlAzar;

      if (respuestaAlAzar.includes("✅")) {
        resultadoEscaneo.style.color = "#4ade80";
      } else if (respuestaAlAzar.includes("⚠️")) {
        resultadoEscaneo.style.color = "#fbbf24";
      } else {
        resultadoEscaneo.style.color = "#f87171";
      }

      botonEscanear.disabled = false;
      botonEscanear.innerText = "Escanear Moto";
      botonEscanear.style.opacity = "1";
    }, 2000);
  });
}

// CONTROLADOR DEL MOUSE (INDEPENDIENTE)
const cursorMeca = document.querySelector('.cursor-meca');

document.addEventListener('mousemove', (e) => {
  if (cursorMeca) {
    cursorMeca.style.left = e.clientX + 'px';
    cursorMeca.style.top = e.clientY + 'px';
  }
});
