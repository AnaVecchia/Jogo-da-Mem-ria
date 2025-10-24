# Jogo-da-memoria

# 🧠 Jogo da Memória - Dois Jogadores (Multijogador Local)

Este é um projeto front-end que implementa o clássico Jogo da Memória, adaptado para uma disputa entre dois jogadores locais (modo "hotseat"). O jogo gerencia os turnos, calcula a pontuação de cada jogador e destaca visualmente de quem é a vez de jogar.

<img width="692" height="652" alt="image" src="https://github.com/user-attachments/assets/1596add0-df1c-46cb-9922-9a2907fe36ca" />
*(Recomendo que você tire um print da tela do jogo e salve como `screenshot.png` na pasta do projeto)*

---

## 🎯 Foco do Projeto

O principal objetivo deste projeto foi praticar e demonstrar habilidades essenciais de front-end, com foco especial em **UI/UX** e **Gerenciamento de Estado** com JavaScript puro.

* **UI (Interface):** Um design limpo, com feedback visual claro (placar, destaque do jogador ativo) e animações que respondem à interação.
* **UX (Experiência):** A fluidez do jogo é o ponto central.
    * A animação de "flip" 3D dá um feedback tátil à interação.
    * O uso de `setTimeout` (ao errar um par) é uma decisão de UX deliberada, dando tempo ao jogador para memorizar a segunda carta.
    * O "travamento" do tabuleiro (`travarTabuleiro = true`) durante a animação impede cliques indesejados e "bugs" na lógica do jogo.
* **Lógica JS:** Gerenciamento de um estado complexo sem o uso de frameworks, controlando variáveis como `jogadorAtual`, `travarTabuleiro`, `primeiraCarta`, `segundaCarta` e `placar`.

---

## ✨ Funcionalidades

* **Disputa para 2 Jogadores:** O jogo alterna automaticamente o turno entre o Jogador 1 e o Jogador 2.
* **Interface Reativa:** Destaque visual (`.ativo`) no placar para indicar claramente de quem é a
