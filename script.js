document.addEventListener("DOMContentLoaded", () => {
    const botao = document.querySelector("button");
    const mensagem = document.getElementById("mensagem");

    botao.addEventListener("click", () => {
        mensagem.innerText = "Seja bem-vindo ao meu site!";
    });
});