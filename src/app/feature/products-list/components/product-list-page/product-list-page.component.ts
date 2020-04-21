import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-list-page',
  templateUrl: './product-list-page.component.html',
  styleUrls: ['./product-list-page.component.scss']
})
export class ProductListPageComponent implements OnInit {

  products = [];
  categories = [];
  selectedCategory = '';
  constructor(
    private productService: ProductsService
  ) { }

  ngOnInit(): void {
    // fetch the products 
    this.getProducts();

  }

  getProducts() {
    this.productService.getProductsList()
    .subscribe((response: any) => {
      this.products = response.products;
      this.productService.productsList = this.products;
      console.log(this.products);
      this.getCategories();
    })
  }

  getCategories() {
    let categories = [];
    this.products.map((product) => {
      if (categories.indexOf(product.category) === -1) {
        categories.push(product.category);
      }
    });
    this.categories = [].concat(categories);
    console.log(this.categories);
  }

  changeCategory(category) {
    this.selectedCategory = category;
  }

}
