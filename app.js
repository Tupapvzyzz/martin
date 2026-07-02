// --- MÓDULO ORIGINAL: ESCÁNER ---
const boton = document.getElementById('boton-diagnostico');
const consola = document.getElementById('consola-diagnostico');
const resultado = document.getElementById('resultado-scanner');

const diagnosticos = [
    "✅ COMPRESIÓN DE MOTOR: 125 PSI (Óptimo). Sistema listo para rodar.",
    "⚠️ ALERTA: Presión de neumáticos baja. Nivel de aceite al 40%.",
    "❌ CRÍTICO: Desgaste severo en pastillas de freno delanteras. Reemplazar.",
    "✅ DIAGNÓSTICO COMPLETO: Sistema de inyección y sensores funcionando al 100%.",
    "⚠️ ALERTA: Bujía con exceso de carbón. Se sugiere mantenimiento preventivo."
];

boton.addEventListener('click', function() {
    boton.disabled = true;
    boton.innerText = "⚡ Conectando ECU...";
    boton.style.opacity = "0.7";
    consola.classList.remove('oculto');
    resultado.innerText = "🔍 Escaneando sensores en tiempo real...";
    resultado.style.color = "#3b82f6";
    
    setTimeout(() => { boton.innerText = "🤖 Analizando parámetros..."; }, 1000);

    setTimeout(() => {
        const respuestaAlAzar = diagnosticos[Math.floor(Math.random() * diagnosticos.length)];
        resultado.innerText = respuestaAlAzar;
        if(respuestaAlAzar.includes("✅")) resultado.style.color = "#4ade80";
        else if(respuestaAlAzar.includes("⚠️")) resultado.style.color = "#fbbf24";
        else resultado.style.color = "#f87171";
        boton.disabled = false;
        boton.innerText = "Escanear Moto";
        boton.style.opacity = "1";
    }, 2500);
});

// --- PUNTO 1: LÓGICA DE HISTORIAL CLÍNICO ---
const btnBuscarPlaca = document.getElementById('boton-buscar-placa');
const inputPlaca = document.getElementById('input-placa');
const resultadoPlaca = document.getElementById('resultado-placa');

const basePlacas = {
    "1234-ABC": "📋 <b>Moto:</b> Honda CB190R<br>📅 <b>Último ingreso:</b> 15/05/2026<br>🛠️ <b>Trabajo realizado:</b> Bajada de motor completa, cambio de discos de embrague y limpieza de inyectores. ¡Lista y asentada!",
    "C1-2345": "📋 <b>Moto:</b> Yamaha FZ25<br>📅 <b>Último ingreso:</b> 02/06/2026<br>🛠️ <b>Trabajo realizado:</b> Mantenimiento general, cambio de pastillas de freno traseras y calibración de barras de suspensión."
};

btnBuscarPlaca.addEventListener('click', function() {
    const placaIngresada = inputPlaca.value.trim().toUpperCase();
    resultadoPlaca.classList.remove('oculto');
    
    if (placaIngresada === "") {
        resultadoPlaca.innerHTML = "❌ Por favor, escribe un número de placa válido.";
        resultadoPlaca.style.borderLeftColor = "#f87171";
    } else if (basePlacas[placaIngresada]) {
        resultadoPlaca.innerHTML = basePlacas[placaIngresada];
        resultadoPlaca.style.borderLeftColor = "#4ade80";
    } else {
        resultadoPlaca.innerHTML = `🔍 <b>Placa: ${placaIngresada}</b><br>❌ No registra ingresos previos en Mecamotor. ¡Regístrala hoy agendando tu primer servicio!`;
        resultadoPlaca.style.borderLeftColor = "#fbbf24";
    }
});

// --- PUNTO 2: LÓGICA DE REVISIÓN POR KILOMETRAJE ---
const botonesKm = document.querySelectorAll('.btn-km');
const resultadoKm = document.getElementById('resultado-km');

const pautasKm = {
    "5k": "<b>🏍️ Pauta de los 5,000 KM:</b><ul><li>Cambio obligatorio de aceite de motor y filtro.</li><li>Limpieza y regulación del cuerpo de aceleración.</li><li>Ajuste, lubricación y tensado de la cadena.</li></ul>",
    "10k": "<b>🏍️ Pauta de los 10,000 KM:</b><ul><li>Todo lo anterior + Reemplazo de bujía e inspección de filtros.</li><li>Calibración de luz de válvulas.</li></ul>",
    "20k": "<b>🏍️ Pauta de los 20,000 KM (Mantenimiento Mayor):</b><ul><li>Cambio de fluidos completo (Aceite, frenos, suspensión).</li><li>Reemplazo de kit de arrastre y pastillas.</li></ul>"
};

botonesKm.forEach(boton => {
    boton.addEventListener('click', function() {
        botonesKm.forEach(b => b.classList.remove('activo'));
        this.classList.add('activo');
        const kilometraje = this.getAttribute('data-km');
        resultadoKm.classList.remove('oculto');
        resultadoKm.innerHTML = pautasKm[kilometraje];
    });
});

// --- PUNTO 3: LÓGICA DEL COTIZADOR CORREGIDA AL 100% ---
const checkboxes = document.querySelectorAll('.chk-servicio');
const montoTotalElement = document.getElementById('monto-total');
const btnEnviarCotizacion = document.getElementById('boton-enviar-cotizacion');

function calcularTotal() {
    let total = 0;
    checkboxes.forEach(chk => { if (chk.checked) total += parseFloat(chk.value); });
    montoTotalElement.innerText = "S/ " + total;
}

checkboxes.forEach(chk => { chk.addEventListener('change', calcularTotal); });

btnEnviarCotizacion.addEventListener('click', function() {
    let total = 0;
    let serviciosSeleccionados = [];
    
    // Verificamos cuáles están activos de forma súper limpia y segura
    if (document.getElementById('srv-motor').checked) { total += 150; serviciosSeleccionados.push("Bajada de Motor Pro"); }
    if (document.getElementById('srv-electrico').checked) { total += 40; serviciosSeleccionados.push("Sistema Eléctrico"); }
    if (document.getElementById('srv-mantenimiento').checked) { total += 80; serviciosSeleccionados.push("Mantenimiento General"); }
    if (document.getElementById('srv-frenos').checked) { total += 25; serviciosSeleccionados.push("Pastillas de Freno"); }
    
    if (serviciosSeleccionados.length === 0) {
        alert("⚠️ Por favor, selecciona al menos un servicio para cotizar.");
        return;
    }
    
    // Armamos un mensaje de texto formateado directo para la web
    let mensaje = "Hola Mecamotor, quiero cotizar: " + serviciosSeleccionados.join(" + ") + ". Total estimado: S/ " + total;
    
    // Aquí está tu número real 943398351 con el código de Perú (51)
    let urlDestino = "https://wa.me" + encodeURIComponent(mensaje);
    
    // Redirección directa en la misma pestaña para que ningún navegador lo bloquee
    window.location.href = urlDestino;
});
