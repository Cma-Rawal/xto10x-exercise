import { Component, OnInit, Input, SimpleChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() categories;
  @Output() categoryChanged = new EventEmitter();
  selectedCategory= ''
  constructor() { }

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.categories.currentValue.length) {
      this.categories = changes.categories.currentValue;
    }
  }

  onClick(event) {
    if (event.target.tagName === 'SPAN') {
      this.selectedCategory = event.target.innerText;
      this.categoryChanged.emit(this.selectedCategory);
    }
  }

}
