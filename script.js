const imagem = document.querySelector('img');
const botao = document.querySelector('button');
const nomeDoPersonagens = document.querySelector('#nomes');
const especie = document.querySelector('#especie');
const condicao = document.querySelector('#status');


gerarValorAleatorio = () => {
    return Math.floor(Math.random() * 671);
}
pegarPersonagem = () => {
    let numeroAleatorio = gerarValorAleatorio();
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
        method:'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        imagem.src = data.image;
        imagem.alt = data.name;
        nomeDoPersonagens.innerHTML = data.name;
        especie.innerHTML = data.species;
        condicao.innerHTML = data.status;
    });
}

botao.onclick = pegarPersonagem;