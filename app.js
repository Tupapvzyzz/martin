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

if (boton) {
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
        }, 2000);
    });
}

// --- PUNTO 1: LÓGICA DE HISTORIAL CLÍNICO ---
const btnBuscarPlaca = document.getElementById('boton-buscar-placa');
const inputPlaca = document.getElementById('input-placa');
const resultadoPlaca = document.getElementById('resultado-placa');

const basePlacas = {
    "1234-ABC": "📋 <b>Moto:</b> Honda CB190R<br>📅 <b>Último ingreso:</b> 15/05/2026<br>🛠️ <b>Trabajo realizado:</b> Bajada de motor completa, cambio de discos de embrague y limpieza de inyectores. ¡Lista y asentada!",
    "C1-2345": "📋 <b>Moto:</b> Yamaha FZ25<br>📅 <b>Último ingreso:</b> 02/06/2026<br>🛠️ <b>Trabajo realizado:</b> Mantenimiento general, cambio de pastillas de freno traseras y calibración de barras de suspensión."
};

if (btnBuscarPlaca) {
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
}

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

// --- ENLACE INTELIGENTE DE WHATSAPP (CELULAR Y LAPTOP AUTOMÁTICO) ---
function abrirWhatsAppMecamotor(textoMensaje) {
    let numeroTelefono = "51943398351";
    let urlFinal = "";
    
    // Detectamos de forma agresiva si es un celular (Android, iPhone, iPad) o una laptop
    let esCelular = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (esCelular) {
        // Si es celular, abrimos directamente la App sin cargar páginas web
        urlFinal = "whatsapp://send?phone=" + numeroTelefono + "&text=" + encodeURIComponent(textoMensaje);
    } else {
        // Si es laptop o PC, cargamos la web oficial para que abra WhatsApp Web
        urlFinal = "https://whatsapp.com" + numeroTelefono + "&text=" + encodeURIComponent(textoMensaje);
    }
    
    // Ejecutamos la redirección en la misma pestaña para burlar cualquier bloqueo de seguridad
    window.location.href = urlFinal;
}

// Asignamos la acción al botón principal de arriba
const btnWspPrincipal = document.getElementById('btn-whatsapp-principal');
if (btnWspPrincipal) {
    btnWspPrincipal.addEventListener('click', function() {
        abrirWhatsAppMecamotor("Hola Mecamotor, quiero agendar una cita para mi moto.");
    });
}

// Asignamos la acción al botón del cotizador de abajo
const btnWspCotizar = document.getElementById('btn-whatsapp-cotizar');
if (btnWspCotizar) {
    btnWspCotizar.addEventListener('click', function() {
        abrirWhatsAppMecamotor("Hola Mecamotor, quiero cotizar un mantenimiento para mi moto.");
    });
}
