import { stockProduct } from './stockProduct.js';

export class StorageService{

    private _stockProduct:stockProduct[] = JSON.parse(localStorage.getItem('produtos') || '');
   
    add_products(product: stockProduct) {
        const possibleProduct = this.find_product(product);
        if(possibleProduct) {
            this.addUnit(product);

        } else {
            this._stockProduct[product.id].quantidade_disponivel = 1;
            localStorage.setItem("produtos",JSON.stringify(this._stockProduct));
           
        }
        
    }


    find_product(product: stockProduct) {
        return this._stockProduct.find(product_found => product_found.id === product.id);
    }


    removeUnit_product(position: number) { 
       
        console.log("pos",position);
        this._stockProduct[position].quantidade_disponivel -= 1;
        localStorage.setItem("produtos",JSON.stringify(this._stockProduct))
        
    };
   
    addUnit(product: stockProduct) {
        const existsProduct = this.find_product(product);
        console.log("adicionando nova quantidade produto existente")
        if (existsProduct) {
            this._stockProduct[product.id].quantidade_disponivel += 1;
            localStorage.setItem("produtos",JSON.stringify(this._stockProduct))
            
        }

       
    };

    mostrar(): readonly stockProduct[]{
        return this._stockProduct;
      }
  
    getTotal() {
        return this._stockProduct.reduce((total, cartItem) => {
            return total + cartItem.quantidade_disponivel * cartItem.preco;
        }, 0)
    }

   


   
}

