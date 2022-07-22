import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CartProduct } from './../../_model/CartProduct';
import { CartService } from './../../_services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  products: CartProduct[] = [];
  myForm!: FormGroup;
  total = 0;
  constructor(private cart: CartService, private router: Router) {}

  ngOnInit(): void {
    this.cart.getProducts().subscribe((res) => {
      this.products = res;
      this.total = this.cart.getTotalPrice();
    });
    this.initForm();
  }
  initForm() {
    this.myForm = new FormGroup({
      name: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
      ]),
      address: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
      credit: new FormControl(null, [
        Validators.required,
        Validators.minLength(16),
        Validators.maxLength(16),
      ]),
    });
  }
  onSubmit() {
    // this.cart.clearShoppingCart();
    this.cart.setUser(this.myForm.value.name);
    this.router.navigateByUrl('/confirm');
  }
  onAmountChange(e: any, product: CartProduct) {
    if (e.target.value <= 0) {
      this.cart.deleteFromCart(product);
    } else {
      this.cart.updateAmount(product.id, e.target.value);
    }
  }
}
