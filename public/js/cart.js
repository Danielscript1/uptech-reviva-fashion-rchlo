export class Cart {
    constructor() {
        //sacola = bag
        // private cartStock:stockProduct[] = JSON.parse(localStorage.getItem('bag') || '');
        this.cart = [];
    }
    add(product) {
        this.cart.push(product);
        console.log(product);
        localStorage.setItem("bag", JSON.stringify(product));
    }
    list() {
        return this.cart;
    }
}
