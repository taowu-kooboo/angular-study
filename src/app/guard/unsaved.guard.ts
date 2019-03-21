import { CanDeactivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { ProductComponent } from '../product/product.component';

@Injectable()
export class UnsavedGuard implements CanDeactivate<ProductComponent> {
  canDeactivate(component: ProductComponent) {
    // 可以通过component里的某些条件让用户能否离开当前路由
    return window.confirm('Is this year 2019 ?');
  }
}
