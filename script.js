const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

function encriptar() {
    let inputText = document.getElementById("input-text").value;
    let encryptedText = inputText
        .replaceAll(/e/g, "enter")
        .replaceAll(/i/g, "imes")
        .replaceAll(/a/g, "ai")
        .replaceAll(/o/g, "ober")
        .replaceAll(/u/g, "ufat");
    document.getElementById("output-text").value = encryptedText;
}

function desencriptar() {
    let inputText = document.getElementById("input-text").value;
    let decryptedText = inputText
        .replaceAll(/enter/g, "e")
        .replaceAll(/imes/g, "i")
        .replaceAll(/ober/g, "o")
        .replaceAll(/ufat/g, "u");
    document.getElementById("output-text").value = decryptedText;
}