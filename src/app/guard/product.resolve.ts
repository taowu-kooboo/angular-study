import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import { Injectable } from '@angular/core';
import { Product } from '../product/product.component';
import { Observable } from 'rxjs';

@Injectable()
export class ProductResolve implements Resolve<Product> {
  constructor(private router: Router) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Product> | Promise<Product> | Product {
    let productId: number = route.params['id'];
    if (productId == 1) {
      return new Product(1, 'appleResolve');
    } else {
      this.router.navigate['/parent'];
      return undefined;
    }
  }
}
