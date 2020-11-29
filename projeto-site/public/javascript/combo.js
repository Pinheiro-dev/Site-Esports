// Função para alterar de página
function trocar_pagina() {

    if (lista_jogos.value == "valorant") {
        window.location.href = "index-valorant.html";
    } else if (lista_jogos.value == "lol") {
        window.location.href = "index-lol.html";
    } else if (lista_jogos.value == "cs") {
        window.location.href = "index-cs.html";
    } else {
        alert("Escolha uma das opções abaixo");
    }
}