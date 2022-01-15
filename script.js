const imagem = document.querySelector('img');
const botao = document.querySelector('button');
const nomeDosPersonagens = document.querySelector('#nomes');
const especie = document.querySelector('#especie');
const condicao = document.querySelector('#status');


pegarPersonagens = () => {
    return fetch(`https://rickandmortyapi.com/api/character/2`, {
        method:'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'apllication/json'
        }
    }).then((response) => response.json()).then((data) => {
        imagem.src = data.image;
        imagem.alt = data.name;
        nomeDosPersonagens.innerHTML = data.name;
        especie.innerHTML = data.species;
        condicao.innerHTML = data.status;
    });
}

botao.onclick = pegarPersonagens;