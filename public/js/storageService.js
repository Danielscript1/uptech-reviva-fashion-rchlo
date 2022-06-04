export class StorageService {
    constructor() {
        this._stockProduct = JSON.parse(localStorage.getItem('produtos') || '');
    }
    add_products(product) {
        const possibleProduct = this.find_product(product);
        if (possibleProduct) {
            this.addUnit(product);
        }
        else {
            this._stockProduct[product.id].quantidade_disponivel = 1;
            localStorage.setItem("produtos", JSON.stringify(this._stockProduct));
        }
    }
    find_product(product) {
        return this._stockProduct.find(product_found => product_found.id === product.id);
    }
    removeUnit_product(position) {
        console.log("pos", position);
        this._stockProduct[position].quantidade_disponivel -= 1;
        localStorage.setItem("produtos", JSON.stringify(this._stockProduct));
    }
    ;
    addUnit(product) {
        const existsProduct = this.find_product(product);
        console.log("adicionando nova quantidade produto existente");
        if (existsProduct) {
            this._stockProduct[product.id].quantidade_disponivel += 1;
            localStorage.setItem("produtos", JSON.stringify(this._stockProduct));
        }
    }
    ;
    mostrar() {
        return this._stockProduct;
    }
    getTotal() {
        return this._stockProduct.reduce((total, cartItem) => {
            return total + cartItem.quantidade_disponivel * cartItem.preco;
        }, 0);
    }
}
