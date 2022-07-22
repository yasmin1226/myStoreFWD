import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/_model/Product';
import { CartService } from 'src/app/_services/cart.service';
import { ProductService } from 'src/app/_services/product.service';

@Component({
  selector: 'app-product-item-details',
  templateUrl: './product-item-details.component.html',
  styleUrls: ['./product-item-details.component.css'],
})
export class ProductItemDetailsComponent implements OnInit {
  product: any = {
    id: 1,
    name: '',
    price: 0,
    description: '',
    url: '',
  };
  qty = 1;
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.getProduct(params['id']);
      console.log(params);
    });
  }
  getProduct(id: any) {
    console.log('id', id);
    this.productService.getProducts().subscribe((products) => {
      this.product = products.find((el: any) => el.id == id);
      console.log(products);
    });
  }
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
