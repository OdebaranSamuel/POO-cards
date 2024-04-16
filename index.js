import { Personagem } from "./js/personagem.js";
import { consumindoDadosPessoas } from "./js/consomeApi.js";
const nomesEPlanetas = await consumindoDadosPessoas();

const luke = new Personagem(
    nomesEPlanetas[0][0],
    "masculino",
    nomesEPlanetas[1][0]
);
const c3po = new Personagem(
    nomesEPlanetas[0][1],
    "Indefinido",
    nomesEPlanetas[1][1]
);
const r2d2 = new Personagem(
    nomesEPlanetas[0][2],
    "Indefinido",
    nomesEPlanetas[1][2]
);
const darthVader = new Personagem(
    nomesEPlanetas[0][3],
    "Masculino",
    nomesEPlanetas[1][3]
);
const leia = new Personagem(
    nomesEPlanetas[0][4],
    "Femenino",
    nomesEPlanetas[1][4]
);
const owenLars = new Personagem(
    nomesEPlanetas[0][5],
    "Masculino",
    nomesEPlanetas[1][5]
);
const beru = new Personagem(
    nomesEPlanetas[0][6],
    "Femenino",
    nomesEPlanetas[1][6]
);
const r5d4 = new Personagem(
    nomesEPlanetas[0][7],
    "Indefinido",
    nomesEPlanetas[1][7]
);
const biggs = new Personagem(
    nomesEPlanetas[0][8],
    "Masculino",
    nomesEPlanetas[1][8]
);
const obiwan = new Personagem(
    nomesEPlanetas[0][9],
    "Masculino",
    nomesEPlanetas[1][9]
);

console.log(luke);
