import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  productsList = [];
  constructor(
    private http: HttpClient
  ) { }

  getProductsList() {
    let url = "http://demo4603548.mockable.io/products";
    return this.http.get(url);
  }

}
