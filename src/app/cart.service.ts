// src/app/components/cart.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private items: any[] = [];

  addToCart(item: any) {
    this.items.push(item); // Almacena la petición adicional junto con el pedido
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
