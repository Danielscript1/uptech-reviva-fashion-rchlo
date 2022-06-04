"use strict";
/*interface ProductImage {
  url: string;
  description: string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  images: ProductImage[];
  quantity_available: number;
}




export class Storage {
  private storage: Product[] = [];
 
  add(product: Product) {
      this.storage.push(product);
  }

  find(product: Product) {
      return this.storage.find(productOnStorage => productOnStorage.id === product.id) || null;
  }

  removeUnit(product: Product) {
      const possibleProduct = this.find(product);
      if(possibleProduct) {
          possibleProduct.quantity_available -= 1
      }
  };

  addUnit(product: Product) {
      const possibleProduct = this.find(product);
      if(possibleProduct) {
          possibleProduct.quantity_available += 1
      }
  };

  read() {
      return this.storage;
  }
}


import { Product } from "./storageService";


interface CartItem {
  item: Product,
  quantity: number;
}

export class Cart {
  private items: CartItem[] = [];

  private find(product: Product) {
      return this.items.find(cartItem => cartItem.item.id === product.id);
  }

  add(product: Product) {
      const possibleProduct = this.find(product);
      if(possibleProduct) {
          this.addUnit(product);
      } else {
          this.items.push({ item: product, quantity: 1 });
      }

  }

  removeUnit(product: Product) {
      const possibleProduct = this.find(product);
      if (possibleProduct) {
          possibleProduct.quantity -= 1
      }
  };

  addUnit(product: Product) {
      const possibleProduct = this.find(product);
      if (possibleProduct) {
          possibleProduct.quantity += 1
      }
  };

  getTotal() {
      return this.items.reduce((total, cartItem) => {
          return total + cartItem.quantity * cartItem.item.price;
      }, 0)
  }
}

*/ 
