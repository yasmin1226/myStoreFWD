import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/_services/cart.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css'],
})
export class ConfirmationComponent implements OnInit {
  user!: string;
  total!: number;
  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.user = this.cartService.getUser();
    this.total = this.cartService.getTotalPrice();
    if (!this.user) {
      alert('please complete data');
      this.router.navigateByUrl('/cart');
    }
  }
}
