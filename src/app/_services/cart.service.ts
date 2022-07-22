import { Injectable } from '@angular/core';
import { CartProduct } from './../_model/CartProduct';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  user!: string;
  cart: CartProduct[] = [];
  cart$ = new BehaviorSubject<CartProduct[]>([]);
  constructor() {}

  getProducts() {
    return this.cart$.asObservable();
  }

  addToCart(product: CartProduct) {
    let item = this.cart.find((el) => el.id == product.id);

    if (item) {
      this.updateAmount(item.id, item.qty + product.qty);
    } else {
      this.cart.push(product);
      this.cart$.next(this.cart);
    }
    this.getTotalPrice();
  }
  getTotalPrice() {
    let total = 0;
    this.cart.map((el: CartProduct) => {
      total += el.price * el.qty;
    });
    return total;
  }

  deleteFromCart(product: CartProduct) {
    let index;
    this.cart.map((el: any, i: number) => {
      if (product.id == el.id) {
        index = i;
        this.cart.splice(index, 1);
      }
    });
    this.cart$.next(this.cart);
  }
  updateAmount(id: number, newAmount: number) {
    this.cart.map((el: any) => {
      if (el.id == id) {
        el.qty = newAmount;
      }
    });

    this.cart$.next(this.cart);
  }
  setUser(name: string) {
    this.user = name;
  }
  getUser() {
    return this.user;
  }
  clearShoppingCart() {
    this.cart = [];
    this.cart$.next(this.cart);
  }
}
