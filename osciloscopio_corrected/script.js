
const ctx = document.getElementById('oscilloscopeChart').getContext('2d');
const data = {
    labels: Array(100).fill(''), // Eje X con puntos vacíos
    datasets: [{
        borderColor: 'rgb(0, 255, 0)', // Línea verde
        borderWidth: 2,
        pointRadius: 0, // Sin puntos discretos
        fill: false,
        data: Array(100).fill(0), // Datos inicializados en 0
        tension: 0.1 // Suavidad de la curva
    }]
};

const config = {
    type: 'line',
    data: data,
    options: {
        animation: false,
        plugins: { legend: { display: false } },
        scales: {
            x: { display: false },
            y: { display: false, suggestedMin: -1, suggestedMax: 1 }
        }
    }
};

const chart = new Chart(ctx, config);

// Función para actualizar el gráfico
function actualizarGrafico(nuevoDato) {
    const valor = parseFloat(nuevoDato);
    if (!isNaN(valor)) {
        chart.data.datasets[0].data.push(valor);
        chart.data.datasets[0].data.shift();
        chart.update();
    }
}

// Simulación de datos para pruebas
let t = 0;
setInterval(() => {
    const simulatedValue = Math.sin(t); // Onda senoidal para simular
    actualizarGrafico(simulatedValue);
    t += 0.1;
}, 50); // Actualización cada 50 ms
