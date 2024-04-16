import { Personagem } from "./js/personagem.js";
import { Card } from "./js/criaCard.js";
import { consumindoDadosPessoas } from "./js/consomeApi.js";
const nomesEPlanetas = await consumindoDadosPessoas();

const luke = new Personagem(
    nomesEPlanetas[0][0],
    "masculino",
    nomesEPlanetas[1][0],
    "luke.jpg"
);
const c3po = new Personagem(
    nomesEPlanetas[0][1],
    "Indefinido",
    nomesEPlanetas[1][1],
    "c3po.jpg"
);
const r2d2 = new Personagem(
    nomesEPlanetas[0][2],
    "Indefinido",
    nomesEPlanetas[1][2],
    "r2d2.jpg"
);
const darthVader = new Personagem(
    nomesEPlanetas[0][3],
    "Masculino",
    nomesEPlanetas[1][3],
    "darthVader.jpg"
);
const leia = new Personagem(
    nomesEPlanetas[0][4],
    "Femenino",
    nomesEPlanetas[1][4],
    "leia.jpg"
);
const owenLars = new Personagem(
    nomesEPlanetas[0][5],
    "Masculino",
    nomesEPlanetas[1][5],
    "owenLars.jpg"
);
const beru = new Personagem(
    nomesEPlanetas[0][6],
    "Femenino",
    nomesEPlanetas[1][6],
    "beru.jpg"
);
const r5d4 = new Personagem(
    nomesEPlanetas[0][7],
    "Indefinido",
    nomesEPlanetas[1][7],
    "r5d4.jpg"
);
const biggs = new Personagem(
    nomesEPlanetas[0][8],
    "Masculino",
    nomesEPlanetas[1][8],
    "biggs.jpg"
);
const obiwan = new Personagem(
    nomesEPlanetas[0][9],
    "Masculino",
    nomesEPlanetas[1][9],
    "obiwan.jpg"
);
const personagens = [
    luke,
    c3po,
    r2d2,
    darthVader,
    leia,
    owenLars,
    beru,
    r5d4,
    biggs,
    obiwan,
];

new Card(personagens).renderCard();
