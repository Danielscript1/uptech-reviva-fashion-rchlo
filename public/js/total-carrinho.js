const carrinho = [39.90, 75.99, 24, 12, 109.99, 83.99]

function calculoTotal(carrinho) {
    const carrinhoTotal = carrinho.reduce((acum, valorAtual) => acum + valorAtual, 0)
    return carrinhoTotal;


}
//document.querySelector('#totalCarrinho').innerHTML = calculoTotal(carrinho);

//document.querySelector('#totalCarrinho').innerHTML = "ola";
console.log(calculoTotal(carrinho))