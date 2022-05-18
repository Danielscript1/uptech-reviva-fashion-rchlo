const carrinho = [39.90, 75.99, 24, 12, 109.99, 83.99];

const produtosTaxados = carrinho.filter(
    (valoresApartir) => valoresApartir > 70)

const totalProdutosTaxados = produtosTaxados.map(
    taxa => (((taxa * 7) / 100) + taxa)

).reduce((acum, valorAtual) => acum + valorAtual, 0);


const totalProdutosNaoTaxados = carrinho.filter(
    (valoresNaoTaxados) => valoresNaoTaxados < 70
).reduce((acum, valorAtual) => acum + valorAtual, 0)


const totalCaixa = (totalProdutosTaxados, totalProdutosNaoTaxados) => {
    return totalProdutosTaxados + totalProdutosNaoTaxados;
}

const total = totalCaixa(totalProdutosTaxados, totalProdutosNaoTaxados).toFixed(2);


console.log("produtos sendo coletados: ", carrinho)
console.log("produtos apartir de $70 ser taxado: ", produtosTaxados);
console.log("total produtos taxado: ", totalProdutosTaxados)
console.log("total produtos não taxados: ", totalProdutosNaoTaxados)
console.log("valor da compra: ", total);