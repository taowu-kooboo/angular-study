import { Component, OnInit, Injector } from '@angular/core';
import { Product } from '../product/product.component';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'wt-product-one',
  templateUrl: './product-one.component.html',
  styleUrls: ['./product-one.component.css']
})
export class ProductOneComponent implements OnInit {
  private product: Product;
  private productService: ProductService;
  // Angular 只有一个注入点 就是 constructor

  // 组件的注入器注入到constructor中  通过get请求注入器拿到相应的服务（不提倡）
  constructor(private injector: Injector) {
    this.productService = injector.get(ProductService);
  }

  ngOnInit() {
    this.product = this.productService.getProduct();
  }
}
