import { Component, OnInit } from '@angular/core';
import { Product } from '../product/product.component';
import { ProductService } from '../shared/product.service';
import { AnotherProductService } from '../shared/another-product.service';

@Component({
  selector: 'wt-product-two',
  templateUrl: './product-two.component.html',
  styleUrls: ['./product-two.component.css']
  // providers: [{ provide: ProductService, useClass: AnotherProductService }]
})
export class ProductTwoComponent implements OnInit {
  private product: Product;
  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.product = this.productService.getProduct();
  }
}
