import { listProductView } from './listProductView.js';
import { StorageService } from './storageService.js';


export class StockControl{
  private  storageService = new StorageService();
  private  listProduct = new listProductView("#secaoDinamica");
  private  listProduct2 = new listProductView("#secaoDinamicaListaSecundario");

  
  constructor(){

    //this.listProduct.update(`<p>oi</p>`);
    this.listProduct.update(this.storageService);
    
    this.listProduct2.update(this.storageService,true);
    
    } 

   


}