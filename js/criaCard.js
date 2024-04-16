export class Card {
    constructor(personagens) {
        this.card = document.querySelector("#main-card"); // peguei a minha ul
        this.personagens = personagens;
    }

    renderCard() {
        this.card.innerHTML = ""; // o innerHtml vai começar vazio
        this.personagens.forEach((personagem) => {
            const cardLi = this.criaCard(personagem);
            this.card.appendChild(cardLi);
        });
    }

    criaCard = (personagem) => {
        const cardLi = document.createElement("li");
        cardLi.classList.add("li-card", personagem.constructor.nome);
        cardLi.innerHTML = `  
        <div class="container-superior">
            <div class="container-imagem">
                <img class="imagem-personagem" src="/assets/images/${personagem.imagem}" >
            </div>
        </div>

        <div class="container-inferior">
            <p>Nome: ${personagem.nome}</p>
            <p>Sexo: ${personagem.sexo}</p>
            <p>Planeta: ${personagem.planeta}</p>
        </div>`;
        return cardLi;
    };
}
