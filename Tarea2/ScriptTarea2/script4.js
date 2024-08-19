function getSum(nums) {
    return nums.reduce((acc, num) => acc + num, 0);
}

function calculateSum() {
    const input = document.getElementById('numberArray').value;
    const nums = input.split(',').map(Number); 

    if (nums.some(isNaN)) {
        console.error("Por favor, ingrese solo números separados por comas.");
        return;
    }

    /** Resultados: */
    const sum = getSum(nums);
    //console.log("Suma de los elementos del arreglo:", sum);
    const resultElement = document.createElement('h3');
    resultElement.textContent = `Suma de los elementos del arreglo: ${sum}`;
    document.body.appendChild(resultElement);
}

document.getElementById('boton').addEventListener('click', calculateSum);
