import { Component, OnInit, SimpleChanges, Input } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.scss']
})
export class CardContainerComponent implements OnInit {

  @Input() category;
  cards = []
  constructor(
    private productService: ProductsService
  ) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.category.currentValue) {
      this.category = changes.category.currentValue;
      this.getProductsByCategory(this.category)
    }
  }

  getProductsByCategory(category) {
    this.cards = this.productService.productsList.filter((product) => {
      return product.category === category;
    });
    console.log('Selected products - ', this.cards);
  }

}
