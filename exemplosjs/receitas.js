const receitas = [
    {
        imagem: "imagens/arroz_couve_flor.png",
        titulo: "Arroz de Couve-Flor",
        ingredientes: ["Arroz", "Couve-Flor", "Cebola Média", "Azeite"],
        preparo: "Deixe a couve-flor picada. Adicione os ingridientes e refogue bem. Adicione sal, tampe a panela e deixe cozinhar."
    },
    {
        imagem: "imagens/bolo_cafe.png",
        titulo: "Bolo de Café",
        ingredientes: ["Farinha de Trigo", "Açucar", "Café Coado", "Chocolate em Pó", "Ovos"],
        preparo: "Bata o açucar, as gemas e o café. Adicione farinha e chocolate e mexa bem. Bata as claras e junte à mistura."
    },
    {
        imagem: "imagens/coxinha_brigadeiro.png",
        titulo: "Cozinha de Brigadeiro",
        ingredientes: ["Leite Condensado", "Chocolate em Pó", "Manteiga", "Morango", "Chocolate Granulado"],
        preparo: "Junte o leite condensado, chocolate em pó e manteiga. Aqueça no fogo baixo. Envolva os morangos e passe no granulado."
    }
];

function getListaIngredientes(receita) {
    let listaHTML = "<ul>";

    listaHTML += receita.ingredientes
        .map(ingrediente => `<li>${ingrediente}</li>`)
        .reduce((acumulador, item) => acumulador + item, "");
    listaHTML += "</ul>";

    return listaHTML;
}

function getCard(receita) {
    const listaIngredientes = getListaIngredientes(receita);

    return `
        <div class="card">
            <img src="${receita.imagem}" class="card-img-top" alt="${receita.titulo}">
            <div class="card-body">
                <h5 class="card-title">${receita.titulo}</h5>
                <div class="card-text">
                    ${listaIngredientes}
                    <hr>
                    <p>${receita.preparo}</p>
                </div>
            </div>
        </div>
    `;
}

function preencheCatalogo() {
    const catalogo = document.getElementById("pnlCatalogo");

    if (catalogo) {
        catalogo.innerHTML = receitas
            .map(getCard)
            .reduce((acc, cur) => acc + cur, "");
    }
}