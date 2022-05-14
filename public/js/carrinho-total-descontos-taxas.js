//camisetas todos 10% descontos,mesma categoria ganhar um adicionau 5$ no segundo item
//taxa add $3,99 jeans
const produtos = ['Camiseta Básica', 'Camiseta Polo', 'Bermuda Moletom', 'Calça Jeans Masculina', 'Camiseta Básica', 'Calça Jeans Feminina', 'Camiseta Básica'];
const precos = [29.90, 49.90, 35, 89.99, 29.90, 109.99, 29.90]

//união dos arrays
const uniaoArrays = produtos.concat(precos)
console.log("uniao dos produtos com preço", uniaoArrays)
const produtosPrecos = []



const separando = uniaoArrays
    .map((valorProduto, indiceAtual) => {
        if (uniaoArrays.includes(valorProduto) && uniaoArrays.includes(valorProduto, indiceAtual + 1)) {


            produtosPrecos.push(valorProduto);

            return valorProduto;

        }


        return valorProduto;
    })

console.log("produtos com seus respectivos valores separados", produtosPrecos)

//separar os produtos dos precos

//improvisei porque não consegui separa os numeros do array, a ideia seria separa nome dos produtos encontrados, dos seus respectivos valores  e depois somar
let apenasPreco = produtosPrecos;
let buscar = "Camiseta Básica";
let indice = apenasPreco.indexOf(buscar);
while (indice >= 0) {
    apenasPreco.splice(indice, 1);
    indice = apenasPreco.indexOf(buscar);
}
console.log(apenasPreco);

//calculando valor encima dos produtos separados! calculo 10%
const mesmaCategoriaPorcentagemPadrao = produtosPrecos.map(

    taxa => ((taxa - ((taxa * 10) / 100))))


console.log("Desconto Geral", mesmaCategoriaPorcentagemPadrao)




//somar total

const DescontoCategoriaPadrao = mesmaCategoriaPorcentagemPadrao.reduce((acum, valorAtual) => acum + valorAtual, 0);
console.log("total de Desconto mesma Categoria : ", DescontoCategoriaPadrao)

//somar um item especifico 

//incompleto vou tentar concluir ate terca com os dmais card , pois se eu consegui esse acredito que concluo os outros