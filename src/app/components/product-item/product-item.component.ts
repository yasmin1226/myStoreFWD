import { Component, Input, OnInit } from '@angular/core';
import { Product } from './../../_model/Product';
import { CartService } from './../../_services/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product = {
    id: 1,
    name: '',
    price: 0,
    description: '',
    url: '',
  };
  qty: number = 1;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {}
  addToCard() {
    console.log({ id: this.product.id, qty: Number(this.qty) });
    this.cartService.addToCart({
      id: this.product.id,
      name: this.product.name,
      price: this.product.price,
      qty: Number(this.qty),
      url: this.product.url,
    });
    // this.cartService.addToCart(this.product);
    console.log(this.cartService.cart);
    alert('Added To Card');
  }
}
