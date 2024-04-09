const url = "https://swapi.dev/api/people/";
export async function pessoasApi() {
    const dados = await fetch(url);
    const dadosTransformados = await dados.json();
    console.log(dadosTransformados);
    const listaDados = dadosTransformados;
    // console.log(listaDados);
    for (let dado in listaDados) {
        console.log(results[dado]);
    }
}

pessoasApi();
