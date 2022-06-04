import { listProductView } from './listProductView.js';
import { StorageService } from './storageService.js';
export class StockControl {
    constructor() {
        this.storageService = new StorageService();
        this.listProduct = new listProductView("#secaoDinamica");
        this.listProduct2 = new listProductView("#secaoDinamicaListaSecundario");
        //this.listProduct.update(`<p>oi</p>`);
        this.listProduct.update(this.storageService);
        this.listProduct2.update(this.storageService, true);
    }
}
