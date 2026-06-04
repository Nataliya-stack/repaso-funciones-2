const inputEl = document.getElementById("inputTexto");
const inputNum = document.getElementById("inputNumero")
const btnEl = document.getElementById("btnCalcular");
const resultEl = document.getElementById("resultadoTexto");

const recortarTexto = (texto, limite) => texto.slice(0, limite);

btnEl.addEventListener("submit", () => {
    const texto = inputEl.value.trim();
    const numero = parseInt(inputNum.value);

    if (texto === "" && numero === isNaN(numero) || numero <= 0) {
        resultEl.textContent = "Error: ¡Los campos no pueden estar vacío!";        
        resultEl.style.color = "red";
        return; 
    }

    resultEl.textContent = `El texto recortado es: ${recortarTexto(texto, numero)}`;
    resultEl.style.color = "white";

    inputEl.value = "";
    inputNum.value = "";
    inputEl.focus();
});
