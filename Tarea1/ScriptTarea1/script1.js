function repatScript(){
    
    let inputText = document.getElementById("input1");
    const text = inputText.value;
    let repat = document.getElementById("input2");
    const num = repat.value;
    
    let result = document.getElementById("result");
    let textoRepe = "";
    for (let i = 0; i < num; i++) {
        textoRepe += text + "\n ";
    }
    result.textContent = textoRepe;
}


document.getElementById("buttonRepit").addEventListener("click", repatScript);

function Invertir(){
    
    let inputText = document.getElementById("input1");
    const text = inputText.value;
        function inverso(texto) {
            return texto.split("").reverse().join("");
        }
    let result2 = document.getElementById("result2");
    result2.textContent = inverso(text);
}

document.getElementById("buttonInvert").addEventListener("click", Invertir);