import { StorageService } from './storageService.js';
import { StockControl } from './stockControl.js';
import { Cart } from './cart.js';
//testando classe storageService
//const storageService = new StorageService();
//console.log(storageService.mostrar())
const controller = new StockControl();
const botao = document.querySelectorAll('.botao');
if (botao) {
    const storageService = new StorageService();
    const cart = new Cart();
    botao.forEach((el, key) => el.addEventListener('click', el => storageService.removeUnit_product(key)));
    const _stockProduct = JSON.parse(localStorage.getItem('produtos') || '');
    botao.forEach((el, key) => el.addEventListener('click', el => cart.add(Object.assign({}, _stockProduct[key]))));
}
else {
    throw Error('Não foi possível inicializar a aplicação. Verifique se o form existe.');
}
