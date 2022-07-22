import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/_services/cart.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  itemsLen = 0;
  constructor(private cart: CartService) {}

  ngOnInit(): void {
    this.cart.getProducts().subscribe((res) => {
      this.itemsLen = res.length;
    });
  }
}
