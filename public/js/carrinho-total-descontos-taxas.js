const produtos = ['Camiseta Básica', 'Camiseta Polo', 'Bermuda Moletom', 'Calça Jeans Masculina', 'Camiseta Básica', 'Calça Jeans Feminina', 'Camiseta Básica'];
const precos = [29.90, 49.90, 35, 89.99, 29.90, 109.99, 29.90]

//funcao
const criarCarrinho = (produtos, precos) => {
    let carrinho = [];


    for (i = 0; i < produtos.length; i++) {

        let produto = produtos[i];
        let preco = precos[i];
        let valorDesconto = calcularDesconto(carrinho, produto, preco);
        let valorTaxa = calcularTaxa(produto);
        let valorPagar = ((preco - valorDesconto) + valorTaxa);


        carrinho = [...carrinho,
            {
                "categoria": produtos[i],
                "valorOriginal": precos[i],
                "valorDesconto": valorDesconto,
                "valorTaxa": valorTaxa,
                "valorPagar": valorPagar
            }

        ]


    }
    return carrinho;
}

const calcularDesconto = (carrinho, produto, preco) => {
    let percentualDescontoCamisa = 0.1;
    let percentualMesmaCategoria = 0.05;
    let percentualDesconto = 0;
    if (produto.includes("Camiseta")) {
        percentualDesconto += percentualDescontoCamisa
    }
    if (carrinho.filter(x => x.categoria === produto).length === 1) {
        percentualDesconto += percentualMesmaCategoria;
    }
    return (preco * percentualDesconto)
}

const calcularTaxa = (produto) => {
    let taxaFixaJeans = 3.99;
    if (produto.includes("Jeans")) {
        return taxaFixaJeans;
    }
    return 0;
}

// carrinho.reduce((acum, valorAtual) => acum + valorAtual, 0)
const calcularTotalCaixa = (carrinho) => {
    let qtdItems = carrinho.length;
    let totalOriginal = carrinho.reduce((acum, produto) => acum + produto.valorOriginal, 0);
    let totalDesconto = carrinho.reduce((acum, produto) => acum + produto.valorDesconto, 0);
    let totalTaxa = carrinho.reduce((acum, produto) => acum + produto.valorTaxa, 0);
    let totalCarrinho = carrinho.reduce((acum, produto) => acum + produto.valorPagar, 0);

    return {
        "qtdItems": qtdItems,
        "totalOriginal": totalOriginal,
        "totalDesconto": totalDesconto,
        "totalTaxa": totalTaxa,
        "totalCarrinho": totalCarrinho
    };

}



let carrinho = criarCarrinho(produtos, precos);
let totalCaixa = calcularTotalCaixa(carrinho);
console.log("Carrinho:", carrinho);
console.log("Total Caixa:", totalCaixa);