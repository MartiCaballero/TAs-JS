function leapYears(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return true; // Divisible por 400, es bisiesto
            } else {
                return false; // Divisible por 100 pero no por 400, no es bisiesto
            }
        } else {
            return true; // Divisible por 4 pero no por 100, es bisiesto
        }
    } else {
        return false; // No es divisible por 4, no es bisiesto
    }
}

/**Resultados: */
function checkLeapYear() {
    const year = parseInt(document.getElementById('year').value, 10);

    if (!isNaN(year)) {
        const isLeapYear = leapYears(year);
        document.getElementById('leapYearResult').textContent = isLeapYear ? 'true' : 'false';
    } else {
        document.getElementById('leapYearResult').textContent = 'Ingreso no válido';
    }
}
