import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ObservableComponent } from './observable/observable.component';
import { OperatorComponent } from './operator/operator.component';
import { NgTemplateComponent } from './ng-template/ng-template.component';
import { ParentComponent } from './parent/parent.component';
import { ChildrenComponent } from './children/children.component';
import { DirectiveComponent } from './directive/directive.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductComponent } from './product/product.component';
import { ProductOneComponent } from './product-one/product-one.component';
import { ProductSellerComponent } from './product-seller/product-seller.component';
import { AuxComponent } from './aux/aux.component';
import { LoginGuard } from './guard/login.guard';
import { UnsavedGuard } from './guard/unsaved.guard';
import { ProductResolve } from './guard/product.resolve';
import { ProductTwoComponent } from './product-two/product-two.component';
import { BindComponent } from './bind/bind.component';
import { LifeComponent } from './life/life.component';
import { LifeMainComponent } from './life-main/life-main.component';
import { HtmlFormComponent } from './form/html-form/html-form.component';
import { TemplateFormComponent } from './form/template-form/template-form.component';
import { ReactiveFormComponent } from './form/reactive-form/reactive-form.component';
import { ReactiveRegistComponent } from './form/reactive-regist/reactive-regist.component';
import { HttpComponent } from './http/http.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: '/template', pathMatch: 'full' },
  { path: 'observable', component: ObservableComponent },
  { path: 'operator', component: OperatorComponent },
  { path: 'template', component: NgTemplateComponent },
  { path: 'parent', component: ParentComponent },
  { path: 'children', component: ChildrenComponent },
  { path: 'directive', component: DirectiveComponent },
  { path: 'bind', component: BindComponent },
  { path: 'life', component: LifeComponent },
  { path: 'lifeMain', component: LifeMainComponent },
  { path: 'htmlForm', component: HtmlFormComponent },
  { path: 'templateForm', component: TemplateFormComponent },
  { path: 'reactiveForm', component: ReactiveFormComponent },
  {
    path: 'reactiveRegistForm',
    component: ReactiveRegistComponent
  },
  { path: 'http', component: HttpComponent },
  { path: 'aux', component: AuxComponent, outlet: 'aux' },
  // 在查询参数中传递数据
  // { path: 'product', component: ProductComponent },
  // 在路由路径中传递数据 在路由配置中传递数据
  {
    path: 'product/:id',
    component: ProductComponent,
    data: [{ isProd: true }],
    children: [
      { path: '', component: ProductOneComponent },
      { path: 'two', component: ProductTwoComponent },
      { path: 'seller/:id', component: ProductSellerComponent }
    ],
    canActivate: [LoginGuard],
    canDeactivate: [UnsavedGuard],
    resolve: { product: ProductResolve }
  },
  { path: '**', component: NotFoundComponent }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes, { enableTracing: false })
  ],
  exports: [RouterModule],
  providers: [LoginGuard, UnsavedGuard, ProductResolve]
})
export class AppRoutingModule {}
