import { Injectable } from '@angular/core';
import { Product } from './../_model/Product';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
// import {} from "../../assets/"

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('../../assets/data.json').pipe(
      map((res) => {
        return res;
      })
    );
  }
  getProduct(id: any): Observable<Product> {
    return this.http.get<Product>('../../assets/data.json/1').pipe(
      map((res) => {
        return res;
      })
    );
  }
}
