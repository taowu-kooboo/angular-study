import { Injectable } from '@angular/core';
import { Product } from '../product/product.component';
import { ThirdService } from './third.service';

@Injectable({
  providedIn: 'root'
})
// 只有声明了Injectable的服务才能注入其他服务    注意component装饰器与pipe等装饰器是Injectable的子类
export class ProductService {
  constructor(public third: ThirdService) {}

  getProduct(): Product {
    this.third.outputMessage('thirdService is invoked');
    return new Product(0, 'apple', 5);
  }
}
