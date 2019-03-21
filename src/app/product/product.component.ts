import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'wt-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  private productId: number;
  private productName: string;
  private isProd: boolean;

  constructor(private routeInfo: ActivatedRoute) {}

  ngOnInit() {
    // 在查询参数中传递数据;

    // this.productId = this.routeInfo.snapshot.queryParams['id'];
    // 在路由路径中传递数据;
    // this.productId = this.routeInfo.snapshot.params['id'];   // 参数快照
    this.routeInfo.params.subscribe(
      (params: Params) => (this.productId = params['id'])
    );
    // 在路由配置中传递数据;
    this.isProd = this.routeInfo.snapshot.data[0]['isProd'];

    this.routeInfo.data.subscribe((data: { product: Product }) => {
      this.productId = data.product.id;
      this.productName = data.product.name;
    });
  }
}

export class Product {
  constructor(public id: number, public name: string, public price?: number) {}
}
