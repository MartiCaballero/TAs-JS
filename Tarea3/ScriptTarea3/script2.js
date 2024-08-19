const personas = [];

document.getElementById("agregarButton").addEventListener("click", () => {
    const nombre = document.getElementById("nombreInput").value.trim();
    const edad = parseInt(document.getElementById("edadInput").value, 10);

    if (nombre && !isNaN(edad) && edad > 0) {
        personas.push({ name: nombre, age: edad });
        document.getElementById("personasList").innerHTML = personas.map(p => `<li>${p.name}: ${p.age} años</li>`).join('');
        document.getElementById("nombreInput").value = "";
        document.getElementById("edadInput").value = "";
    } else {
        alert("Por favor, ingrese un nombre válido y una edad positiva.");
    }
});

document.getElementById("findOldestButton").addEventListener("click", () => {
    if (personas.length === 0) {
        document.getElementById("resultado").textContent = "La lista de personas está vacía.";
        return;
    }

    const personaMasVieja = personas.reduce((mayor, actual) => actual.age > mayor.age ? actual : mayor);
    document.getElementById("resultado").textContent = `La persona más vieja es ${personaMasVieja.name} con ${personaMasVieja.age} años.`;
});