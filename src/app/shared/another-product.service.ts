import { Injectable } from '@angular/core';
import { ProductService } from './product.service';
import { Product } from '../product/product.component';
import { ThirdService } from './third.service';

@Injectable({
  providedIn: 'root'
})
export class AnotherProductService implements ProductService {
  constructor(public third: ThirdService) {}
  getProduct(): Product {
    return new Product(1, 'orange', 5);
  }
}
