import { View } from './view.js';
import { stockProduct } from './stockProduct.js';
import { StorageService} from './storageService.js' 


export class listProductView extends View<StorageService>{


    template(model:StorageService,isSecondaryList?:boolean):string {
        console.log(model)
        const lista = isSecondaryList?model.mostrar().slice(4,8):model.mostrar().slice(0,4)
     return `
   
    <div class="secao">

    ${lista.map((productStore:stockProduct) => {
        console.log(productStore.tamanhos_disponiveis[0])
        return `
            <section class="cartao ">
                
                <section class="cartao__conteudo1">

               
              
                    <img class="cartao__camisa" src=${productStore.imagens[0].url} alt="camisa" />

                    <section class="camisa__tamanhos">
                      <input type="radio" class="opcoes__tamanhos" name="tamanho" label=${productStore.tamanhos_disponiveis[0]}>
                      <input type="radio" class="opcoes__tamanhos" name="tamanho" label=${productStore.tamanhos_disponiveis[1]}>
                      <input type="radio" class="opcoes__tamanhos" name="tamanho" label=${productStore.tamanhos_disponiveis[2]}>

                    </section>
               
                </section>

                <section class="cartao__conteudo">

                    <a href="produtosDetalhes.html">
                        <h3 class="cartao__titulo">${productStore.nome}</h3>
                        <p class="cartao__preco">R$ ${productStore.preco}</p>
                    </a>

                </section>
                  
                      
                <section class="espaco__botao">

                    <button class=" botao ">
                            POR NA SACOLA <img class="espaco__imagem" src="./img/shopping.svg" width="20px" height="20px"></img>
                    </button>

                </section>

            </section>
            `; }).join('')}
      </div>
   
       ` 
   
      
    }
      
}
            
           
