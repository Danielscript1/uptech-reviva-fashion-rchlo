const carrinho = [39.90, 75.99, 24, 12, 109.99, 83.99];

//filtrar quais produtos a ser taxados, acima de 70
const produtosTaxados = carrinho.filter(
    (carrinho) => carrinho > 70)
console.log(produtosTaxados);

//adicionando 7% ao produtos encontrados 
const porcentagem = produtosTaxados.map(
    taxa => (((taxa * 7) / 100) + taxa).toFixed(2)

);
console.log(porcentagem)