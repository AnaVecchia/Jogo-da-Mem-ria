const gameBoard = document.getElementById('gameBoard');
const placar1Elem = document.getElementById('placar1');
const placar2Elem = document.getElementById('placar2');
const jogador1UI = document.getElementById('jogador1');
const jogador2UI = document.getElementById('jogador2');

const iconesCartas = ['🍎', '🍌', '🍒', '🍇', '🍉', '🍓', '🍍', '🥝'];
const cartasArray = [...iconesCartas, ...iconesCartas];

let temCartaVirada = false;
let travarTabuleiro = false; 
let primeiraCarta, segundaCarta;
let jogadorAtual = 1;
let placar1 = 0;
let placar2 = 0;
let paresEncontrados = 0;


// Função para embaralhar o array
function embaralhar(array) {
    array.sort(() => Math.random() - 0.5);
}

// Função para criar o tabuleiro
function criarTabuleiro() {
    embaralhar(cartasArray);
    
    cartasArray.forEach((icone) => {
        const carta = document.createElement('div');
        carta.classList.add('carta');
        carta.dataset.id = icone; 

        carta.innerHTML = `
            <div class="frente-carta">${icone}</div>
            <div class="tras-carta">?</div>
        `;

        carta.addEventListener('click', virarCarta);
        gameBoard.appendChild(carta);
    });
}

// A principal função de interação
function virarCarta() {
    // Se o tabuleiro estiver travado (animando), não faz nada
    if (travarTabuleiro) return;
    // Se clicar na mesma carta duas vezes, não faz nada
    if (this === primeiraCarta) return;

    this.classList.add('virada');

    if (!temCartaVirada) {
        // Primeiro clique
        temCartaVirada = true;
        primeiraCarta = this;
    } else {
        // Segundo clique
        temCartaVirada = false;
        segundaCarta = this;

        verificarPar();
    }
}

function verificarPar() {
    const eUmPar = primeiraCarta.dataset.id === segundaCarta.dataset.id;

    if (eUmPar) {
        // É um par!
        atualizarPlacar();
        desabilitarCartas();
    } else {
        // Não é um par
        travarTabuleiro = true; 
        desvirarCartas();
    }
}

// Adiciona pontos ao jogador atual
function atualizarPlacar() {
    if (jogadorAtual === 1) {
        placar1++;
        placar1Elem.textContent = placar1;
    } else {
        placar2++;
        placar2Elem.textContent = placar2;
    }
    paresEncontrados++;
    // Checa se o jogo acabou
    if (paresEncontrados === iconesCartas.length) {
        setTimeout(() => alert(placar1 > placar2 ? 'Jogador 1 Venceu!' : 'Jogador 2 Venceu!'), 500);
    }
}

// Remove o evento de clique das cartas que formaram par
function desabilitarCartas() {
    primeiraCarta.removeEventListener('click', virarCarta);
    segundaCarta.removeEventListener('click', virarCarta);
    resetarVariaveis();
}

// Vira as cartas de volta após um tempo (UX)
function desvirarCartas() {
    // A espera é fundamental para a UX (o jogador precisa ver a segunda carta)
    setTimeout(() => {
        primeiraCarta.classList.remove('virada');
        segundaCarta.classList.remove('virada');
        
        resetarVariaveis();
        trocarJogador();
    }, 1200); // 1.2 segundos
}

// Muda o turno e atualiza a UI do placar
function trocarJogador() {
    if (jogadorAtual === 1) {
        jogadorAtual = 2;
        jogador1UI.classList.remove('ativo');
        jogador2UI.classList.add('ativo');
    } else {
        jogadorAtual = 1;
        jogador2UI.classList.remove('ativo');
        jogador1UI.classList.add('ativo');
    }
}

function resetarVariaveis() {
    [temCartaVirada, travarTabuleiro] = [false, false];
    [primeiraCarta, segundaCarta] = [null, null];
}

criarTabuleiro();