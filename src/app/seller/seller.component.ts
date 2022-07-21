import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css'],
})
export class SellerComponent implements OnInit {
  sellers: string[];

  constructor() {
    this.sellers = ['BestBuy', 'Apple', 'Amazon'];
  }

  getSellers(): string[] {
    return this.sellers;
  }

  ngOnInit(): void {}
}
