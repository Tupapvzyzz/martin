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
    "C1-2345": "📋 <b>Moto:</b> Yamaha FZ25<br>📅 <b>Último ingreso:</b> 02/06/2026<br>🛠️ <b>Trabajo realizado:</b> Mantenimiento general, cambio de pastillas de freno traseras y calibración de barras de suspensión.",
    "9999-XYZ": "📋 <b>Moto:</b> Pulsar NS200<br>📅 <b>Último ingreso:</b> 20/06/2026<br>🛠️ <b>Trabajo realizado:</b> Diagnóstico por computadora del sistema eléctrico, cambio de bobina de alta y bujías nuevas."
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
    "5k": "<b>🏍️ Pauta de los 5,000 KM:</b><ul><li>Cambio obligatorio de aceite de motor y filtro.</li><li>Limpieza y regulación del carburador o cuerpo de aceleración.</li><li>Ajuste, lubricación y tensado de la cadena de arrastre.</li><li>Revisión preventiva del desgaste de pastillas de freno.</li></ul>",
    "10k": "<b>🏍️ Pauta de los 10,000 KM:</b><ul><li>Todo lo anterior + Cambio completo de bujía.</li><li>Limpieza o reemplazo del filtro de aire.</li><li>Calibración de luz de válvulas (Asentamiento de motor).</li><li>Revisión del nivel de líquido de frenos y refrigerante.</li></ul>",
    "20k": "<b>🏍️ Pauta de los 20,000 KM (Mantenimiento Mayor):</b><ul><li>Cambio de fluidos completo (Aceite, frenos, suspensión).</li><li>Reemplazo del kit de arrastre completo (Cadena, piñón, catalina).</li><li>Limpieza profunda de inyectores por ultrasonido.</li><li>Revisión e inspección de rodajes de dirección y ruedas.</li></ul>"
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

// --- PUNTO 3: LÓGICA DEL COTIZADOR DE PRESUPUESTO ---
const checkboxes = document.querySelectorAll('.chk-servicio');
const montoTotalElement = document.getElementById('monto-total');
const btnEnviarCotizacion = document.getElementById('boton-enviar-cotizacion');

function calcularTotal() {
    let total = 0;
    checkboxes.forEach(chk => {
        if (chk.checked) {
            total += parseFloat(chk.value);
        }
    });
    montoTotalElement.innerText = "S/ " + total;
}

checkboxes.forEach(chk => {
    chk.addEventListener('change', calcularTotal);
});

btnEnviarCotizacion.addEventListener('click', function() {
    let total = 0;
    let serviciosSeleccionados = [];
    
    checkboxes.forEach(chk => {
        if (chk.checked) {
            total += parseFloat(chk.value);
            serviciosSeleccionados.push(chk.getAttribute('data-name'));
        }
    });
    
    if (serviciosSeleccionados.length === 0) {
        alert("⚠️ Por favor, selecciona al menos un servicio para cotizar.");
        return;
    }
    
    let listaServicios = serviciosSeleccionados.join(" , ");
    
    // Aquí ingresamos tu número real con el código de Perú (51) de manera directa y segura
    let enlaceWhatsApp = "https://wa.me Mecamotor, quiero cotizar estos servicios: " + listaServicios + ". Total estimado: S/ " + total;
    
    // Abrimos el chat de forma directa y limpia
    window.location.href = enlaceWhatsApp;
});
