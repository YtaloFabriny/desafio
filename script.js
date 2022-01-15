const botao = document.querySelector('button');

const imagemPersonagem1 = document.querySelector('#imgPersonagem1');
const nomeDoPersonagem1 = document.querySelector('#nomeDoPersonagem1');
const especiePersonagem1 = document.querySelector('#especieDoPersonagem1');
const condicaoPersonagem1 = document.querySelector('#statusDoPersonagem1');

const imagemPersonagem2 = document.querySelector('#imgPersonagem2');
const nomeDoPersonagem2 = document.querySelector('#nomeDoPersonagem2');
const especiePersonagem2 = document.querySelector('#especieDoPersonagem2');
const condicaoPersonagem2 = document.querySelector('#statusDoPersonagem2');

const imagemPersonagem3 = document.querySelector('#imgPersonagem3');
const nomeDoPersonagem3 = document.querySelector('#nomeDoPersonagem3');
const especiePersonagem3 = document.querySelector('#especieDoPersonagem3');
const condicaoPersonagem3 = document.querySelector('#statusDoPersonagem3');

gerarValorAleatorio = () => {
    return Math.floor(Math.random() * 671);
}

pegarPersonagem = () => {
    let numeroPersonagem1 = gerarValorAleatorio();
    let numeroPersonagem2 = gerarValorAleatorio();
    let numeroPersonagem3 = gerarValorAleatorio();
    return fetch(`https://rickandmortyapi.com/api/character/${numeroPersonagem1},${numeroPersonagem2},${numeroPersonagem3}`, {
        method:'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        imagemPersonagem1.src = data[0].image;
        imagemPersonagem1.alt = data[0].name;
        nomeDoPersonagem1.innerHTML = data[0].name;
        especiePersonagem1.innerHTML = data[0].species;
        condicaoPersonagem1.innerHTML = data[0].status;

        imagemPersonagem2.src = data[1].image;
        imagemPersonagem2.alt = data[1].name;
        nomeDoPersonagem2.innerHTML = data[1].name;
        especiePersonagem2.innerHTML = data[1].species;
        condicaoPersonagem2.innerHTML = data[1].status;

        imagemPersonagem3.src = data[2].image;
        imagemPersonagem3.alt = data[2].name;
        nomeDoPersonagem3.innerHTML = data[2].name;
        especiePersonagem3.innerHTML = data[2].species;
        condicaoPersonagem3.innerHTML = data[2].status;
    });
}

botao.onclick = pegarPersonagem;