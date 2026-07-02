const boton = document.getElementById('boton-diagnostico');
const consola = document.getElementById('consola-diagnostico');
const resultado = document.getElementById('resultado-scanner');

// Lista de diagnósticos aleatorios del taller mecánico
const diagnosticos = [
    "✅ Compresión de motor óptima. Sistema listo para rodar.",
    "⚠️ Alerta: Nivel de aceite bajo. Requiere cambio preventivo.",
    "❌ Error: Desgaste severo en pastillas de freno delanteras.",
    "✅ Diagnóstico completo limpio. Filtros de aire limpios.",
    "⚠️ Alerta: Bujía con acumulación de carbón. Se sugiere limpieza."
];

boton.addEventListener('click', function() {
    // Mostramos la caja de la consola
    consola.classList.remove('oculto');
    resultado.innerText = "Calculando parámetros...";
    
    // Simulamos que el robot analiza la moto por 1 segundo antes de dar la respuesta
    setTimeout(() => {
        const respuestaAlAzar = diagnosticos[Math.floor(Math.random() * diagnosticos.length)];
        resultado.innerText = respuestaAlAzar;
    }, 1000);
});
