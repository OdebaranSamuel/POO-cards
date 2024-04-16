const pessoasUrl = "https://swapi.dev/api/people/";

export async function consumindoDadosPessoas() {
    const listaNomes = [];
    const listaPlanetas = []; // Armazenar as promessas das chamadas assíncronas
    const listaGeral = [];
    const dados = await fetch(pessoasUrl);
    const dadosTratados = await dados.json();
    const resultado = dadosTratados.results;

    for (let elemento of resultado) {
        const nome = elemento.name;
        const planetaUrl = elemento.homeworld;
        listaNomes.push(nome);
        const api = consumindoPlanetas(planetaUrl); // Armazena a promessa, não o resultado
        listaPlanetas.push(api); // Adiciona a promessa à lista
    }

    // Espera por todas as chamadas assíncronas consumindoPlanetas concluírem
    const planetas = await Promise.all(listaPlanetas);
    listaGeral.push(listaNomes, planetas);
    return listaGeral; // Agora você tem acesso a lista de nomes e planetas
}

async function consumindoPlanetas(url) {
    const dados = await fetch(url);
    const dadosTratados = await dados.json();
    const nomePlaneta = dadosTratados.name;
    return nomePlaneta;
}
consumindoDadosPessoas();
