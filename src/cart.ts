import { stockProduct } from './stockProduct.js';
export class Cart{
  //sacola = bag
 // private cartStock:stockProduct[] = JSON.parse(localStorage.getItem('bag') || '');
 private cart: stockProduct[] = [];

  
 
 add(product: stockProduct) {
     this.cart.push(product);
     console.log(product);
     localStorage.setItem("bag",JSON.stringify(product))
 }


  list(): readonly stockProduct[]{
    return this.cart;
  }

}
