import { Component, OnInit } from '@angular/core';

export interface Product {
  id: string;
  name: string;
}



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {

  products: Product[];

  constructor() {
    this.products = [
      { id: '1', name: 'Mac Book Pro' },
      { id: '2', name: 'Iphone' },
    ] as Product[];
  }

  public getProducts() {
    return this.products;
  }

  ngOnInit(): void {}
}
