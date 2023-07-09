/*                                                  



    Objetivo 1 - quanto passar o mouse em cima do personagem na listagem, devemos selecioná-lo

    passo 1 - pegar os personagens no js para poder verificar quando o usuaário passar o mouse em cima de um deles.

    passo 2 - adicionar a classe selecionado no personagem que o usuário passar o cursor em cima.

    passo 3- verificar se ja exista um personagem selecionado, se sim, devemos remover a seleção dele.

    Objetivo 2 - quando passar o mouse em cima do personagem na listagem, trocar a imagem, o nome e a descrição do personagem grande.
    
    passo 1 - pergar o elemento do personagem grande para adicionar as informações nele.
    
    passo 2 - alterar 

*/

//Objetivo 1 - quanto passar o mouse em cima do personagem na listagem, devemos selecioná-lo
//passo 1 - pegar os personagens no js para poder verificar quando o usuaário passar o mouse em cima de um deles.

const personagens = document.querySelectorAll('.personagem');

//passo 2 - adicionar a classe selecionado no personagem que o usuário passar o cursor do mouse.

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {

        if(window.innerWidth < 450) {
            window.scrollTo({top: 0, behavior: 'smooth'});
        } //melhorar a usabilidade no celular ou telas menores.

        //passo 3- verificar se já existe um personagem selecionado, se sim, devemos remover a seleção dele.
        removerSelecaoDoPersonagem();

        personagem.classList.add('selecionado');

        //Objetivo 2 - quanto passar o mouse em cima do personagem na listagem, trocar a imagem, o nome e a descrição do personagem grande.

        //passo 1 - pergar o elemento do personagem grande para adicionar as informações nele.
        alterarImagemPersonagemSelecionado(personagem);
    
        //passo 3 - alterar o nome do personagem grande
        alterarNomePersonagemSelecionado(personagem);
        
        //passo 4 - alterar a descrição do personagem grande
        alterarDescricaoPersonagem(personagem); // modificando o elemento que peguei acima
    })
});  //será feito 8 vezes pois temos 8 personagens



function alterarDescricaoPersonagem(personagem) {
    const descricaoPersonagem = document.getElementById('descricao-personagem'); // pegando o elemento que quero modificar
    descricaoPersonagem.innerText = personagem.getAttribute('data-description');
}

function alterarNomePersonagemSelecionado(personagem) {
    const nomePersonagem = document.getElementById('nome-personagem');
    nomePersonagem.innerText = personagem.getAttribute('data-name');
}

function alterarImagemPersonagemSelecionado(personagem) {
    const imagemPersonagemGrande = document.querySelector('.personagem-grande');

    //passo 2 - alterar a imagem do personagem grande
    const idPersonagem = personagem.attributes.id.value;
    imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;
}

function removerSelecaoDoPersonagem() {
    const personagemSelecionado = document.querySelector('.selecionado');
    personagemSelecionado.classList.remove('selecionado');
}

