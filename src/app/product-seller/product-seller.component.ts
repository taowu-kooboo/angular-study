import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'wt-product-seller',
  templateUrl: './product-seller.component.html',
  styleUrls: ['./product-seller.component.css']
})
export class ProductSellerComponent implements OnInit {
  private sellerId: number;
  constructor(private routeInfo: ActivatedRoute) {}

  ngOnInit() {
    this.sellerId = this.routeInfo.snapshot.params['id'];
  }
}
