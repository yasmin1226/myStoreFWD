import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';

import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { ProductItemDetailsComponent } from './components/product-item-details/product-item-details.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CartComponent } from './components/cart/cart.component';
const routes: Routes = [
  { path: '', redirectTo: 'products-list', pathMatch: 'full' },
  { path: 'products-list', component: ProductListComponent },
  { path: 'product-details/:id', component: ProductItemDetailsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'confirm', component: ConfirmationComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
