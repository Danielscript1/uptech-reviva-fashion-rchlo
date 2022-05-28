/*
1. Você pode criar os elementos que precisar com o document.createElement.
2. Você pode informar que um elemento é pai ou filho de outro via element.appendChild(elementoFilho).
3. Você pode adicionar classes ao elementos criados via element.classList.add('nome-da-classe').

*/
//funcao Criar elemento
const BancoDados = JSON.parse(localStorage.getItem("produtos")) || [];
console.log(BancoDados)
const secao = document.getElementById("secaoDinamica");

BancoDados.forEach((elemento, key) => {
    console.log(elemento);
})



const sectionPrincipal = document.createElement("section");
sectionPrincipal.classList.add("secao");


for (let i = 0; i < 4; i++) {

    const div = document.createElement("div");
    sectionPrincipal.appendChild(div);
    div.classList.add("cartao");

    const section = document.createElement("section");
    section.classList.add("cartao__conteudo1");

    const imagem = document.createElement("img");
    imagem.classList.add("cartao__camisa");
    //imagem.setAttribute("src",);
    //BancoDados[0].nome
    //console.log(BancoDados[i].nome)
    //console.log(BancoDados[i].imagens[i].url)
    const section2 = document.createElement("section");
    section2.classList.add("cartao__conteudo");

    const link = document.createElement("a");
    const h3 = document.createElement("h3");
    const p = document.createElement("p");

    const section3 = document.createElement("section");
    section3.classList.add("espaco__botao");

    const botao = document.createElement("button");
    botao.classList.add("botao");

    const imagemBotao = document.createElement("img");
    imagemBotao.classList.add("espaco__imagem");

    section.appendChild(imagem);

    div.appendChild(section);
    div.appendChild(section2);
    div.appendChild(section3);

    link.appendChild(h3);
    link.appendChild(p)

    section2.appendChild(link);

    botao.appendChild(imagemBotao)
    section3.appendChild(botao)

}



secao.appendChild(sectionPrincipal);