const swap = (vetor, posOrigem, posDestino) => {
    const aux = vetor[posDestino];

    vetor[posDestino] = vetor[posOrigem];
    vetor[posOrigem] = aux;
};

const shuffle = (vetor, numTrocas) => {
    const n = vetor.length;

    if (n < 2) {
        return vetor;
    }

    for (let i = 0; i < numTrocas; i++) {
        const pOrigem = Math.floor(Math.random() * n);
        const pDestino = Math.floor(Math.random() * n);
        swap(vetor, pOrigem, pDestino);
    }

    return vetor;
};

const bubble_sort = (vetor) => {
    const n = vetor.length;

    for (let i = 0; i < n - 1; i++) {

        for (let j = 0; j < n - i - 1; j++) {

            if (vetor[j] > vetor[j + 1]) {
                swap(vetor, j, j + 1);
            }
        }
    }

    return vetor;
};

const selection_sort = (vetor) => {
    const n = vetor.length;

    for (let i = 0; i < n - 1; i++) {
        let indMenor = i;

        for (let j = i + 1; j < n; j++) {
            if (vetor[j] < vetor[indMenor]) {
                indMenor = j;
            }
        }

        if (indMenor !== i) {
            swap(vetor, i, indMenor);
        }
    }

    return vetor;
};

const particionamento = (vetor, posIni, posFim) => {
    const pivo = vetor[posFim];
    let pivot = posIni;

    for (let j = posIni; j < posFim; j++) {

        if (vetor[j] <= pivo) {
            swap(vetor, pivot, j);
            pivot++;
        }
    }

    swap(vetor, pivot, posFim);

    return pivot;
};

const quick_sort = (vetor, posIni, posFim) => {

    if (posIni < posFim) {
        const pos = particionamento(vetor, posIni, posFim);
        quick_sort(vetor, posIni, pos - 1);
        quick_sort(vetor, pos + 1, posFim);
    }

    return vetor;
};

function add() {
    var campoValor = document.getElementById("valor");
    var listaValores = document.getElementById("valores");

    var valor = eval(campoValor.value);
    if (isNaN(valor) || valor === null) {
        return;
    }

    var node = document.createElement("li");

    var textoNode = document.createTextNode(valor);
    node.appendChild(textoNode);

    listaValores.appendChild(node);

    campoValor.value = "";
    campoValor.focus();
}

function ordenar() {
    var listaValores = document.getElementById("valores");
    var listaSelecao = document.getElementById("algoritmo");
    var algoritmo = listaSelecao.selectedIndex;

    var vetor = Array.prototype.slice.call(listaValores.children)
        .map(function (item) {
            return eval(item.innerHTML);
        });

    switch (algoritmo) {
        case 0:
            bubble_sort(vetor);
            break;
        case 1:
            selection_sort(vetor);
            break;
        case 2:
            quick_sort(vetor, 0, vetor.length - 1);
            break;
    }

    listaValores.innerHTML = vetor
        .map(function (item) {
            return "<li>" + item + "</li>";
        })
        .reduce(function (html, item) {
            return html + item;
        }, "");
}

function misturar() {
    var listaValores = document.getElementById("valores");

    var vetor = Array.prototype.slice.call(listaValores.children)
        .map(function (item) {
            return eval(item.innerHTML);
        });

    shuffle(vetor, vetor.length * 2);

    listaValores.innerHTML = vetor
        .map(function (item) {
            return "<li>" + item + "</li>";
        })
        .reduce(function (html, item) {
            return html + item;
        }, "");
}