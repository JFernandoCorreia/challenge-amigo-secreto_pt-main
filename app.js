// Lista que armazena os nomes dos amigos
let amigos = [];

// Função para adicionar amigos
function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();

    // Validação da entrada
    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    amigos.push(nome); // Adiciona ao array
    input.value = "";  // Limpa o campo de entrada
    atualizarLista();  // Atualiza a lista na tela
}

// Função para atualizar a lista de amigos na tela
function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpa a lista anterior

    for (let i = 0; i < amigos.length; i++) {
        const item = document.createElement("li");
        item.textContent = amigos[i];
        lista.appendChild(item);
    }
}

// Função para sortear um amigo aleatório
function sortearAmigo() {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // Limpa resultado anterior

    if (amigos.length === 0) {
        alert("Adicione ao menos um nome antes de sortear.");
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const nomeSorteado = amigos[indiceSorteado];

    const item = document.createElement("li");
    item.textContent = `Amigo sorteado: ${nomeSorteado}`;
    resultado.appendChild(item);
}
