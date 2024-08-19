function convertToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function convertToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

/** Resultados: */
function convertTemperatures() {
    const celsius = parseFloat(document.getElementById('celsius').value);
    const fahrenheit = parseFloat(document.getElementById('fahrenheit').value);

    if (!isNaN(celsius)) {
        const fahrenheitResult = convertToFahrenheit(celsius).toFixed(1);
        document.getElementById('fahrenheitResult').textContent = fahrenheitResult;
    } else {
        document.getElementById('fahrenheitResult').textContent = 'Ingreso no válido';
    }

    if (!isNaN(fahrenheit)) {
        const celsiusResult = convertToCelsius(fahrenheit).toFixed(1);
        document.getElementById('celsiusResult').textContent = celsiusResult;
    } else {
        document.getElementById('celsiusResult').textContent = 'Ingreso no válido';
    }
}
