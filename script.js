const mensagem = "Olá, seja bem-vindo!";
const elemento = document.getElementById("boas-vindas");
let i = 0;

function escreverLetraPorLetra() {
  if (i < mensagem.length) {
    elemento.innerHTML += mensagem.charAt(i);
    i++;
    setTimeout(escreverLetraPorLetra, 100);
  }
}

document.addEventListener("DOMContentLoaded", escreverLetraPorLetra);
