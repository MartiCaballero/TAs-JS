function sumAll(a, b) {
    let sum = 0;
    if (a > b) {
        [a, b] = [b, a]; 
    }
    for (let i = a; i <= b; i++) {
        sum += i;
    }
    console.log("Suma de todos los números entre a y b:", sum);
    return sum;
}

function calculateSum() {

    const a = parseInt(document.getElementById('numA').value, 10);
    const b = parseInt(document.getElementById('numB').value, 10);

    if (isNaN(a) || isNaN(b)) {
        alert("Por favor, ingrese valores válidos para a y b.");
        return;
    }

    const sum = sumAll(a, b);
    document.getElementById('sumResult').textContent = sum;
}
