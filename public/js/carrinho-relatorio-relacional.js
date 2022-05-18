const produtos = ['Camiseta Básica', 'Camiseta Polo', 'Bermuda Moletom', 'Calça Jeans Masculina', 'Camiseta Básica', 'Calça Jeans Feminina', 'Camiseta Básica'];
const precos = [29.90, 49.90, 35, 89.99, 29.90, 109.99, 29.90]

const criarCarrinho = (produtos, precos) => {
    let produto = [];
    for (i = 0; i < produtos.length; i++) {

        let peca = produtos[i];
        let preco = precos[i]

        let quantidade = repetidos(peca, produtos)



        produto = [...produto,
            {
                "Categoria": peca,
                "Quantidade": quantidade,
                "ValorUnitario": preco



            }
        ]



    }
    return produto;


}

const repetidos = (peca, produto) => {

    return produto.reduce((acc, item) => peca === item ? acc + 1 : acc, 0)

}

const carrinho = criarCarrinho(produtos, precos)


let exibir = [];

/*O laço for...in  interage sobre propriedades enumeradas de um objeto, na ordem original de inserção.  O laço pode ser executado para cada propriedade distinta do objeto.*/
const mostrar = (carrinho) => {
    for (let i in carrinho) {
        nome = carrinho[i]['Categoria'];
        exibir[nome] = carrinho[i]

    }


}

mostrar(carrinho)
console.log(exibir)