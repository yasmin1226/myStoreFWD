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
    });
  }
  getProduct(id: any) {
    this.productService.getProducts().subscribe((products) => {
      this.product = products.find((el: any) => el.id == id);
    });
  }
  addToCard() {
    this.cartService.addToCart({
      id: this.product.id,
      name: this.product.name,
      price: this.product.price,
      qty: Number(this.qty),
      url: this.product.url,
    });
    alert('Added To Card');
  }
}
