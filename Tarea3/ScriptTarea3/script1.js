function generarContraseña(longitud) {
    if (longitud < 8) {
        return "La contraseña debe tener al menos 8 caracteres.";
    }

    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*.;_?";
    let contraseña = "";

    for (let i = 0; i < longitud; i++) {
        const caracterAleatorio = caracteres[Math.floor(Math.random() * caracteres.length)];
        contraseña += caracterAleatorio;
    }

    return contraseña;
}

document.getElementById("generarButton").addEventListener("click", function() {
    const longitud = parseInt(document.getElementById("longitudInput").value, 10);
    const resultado = generarContraseña(longitud);
    document.getElementById("resultadoContraseña").textContent = "Contraseña generada: " + resultado;
});