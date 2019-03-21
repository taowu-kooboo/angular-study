import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildrenComponent } from './children/children.component';
import { HighlightDirective } from './highlight.directive';
import { ObservableComponent } from './observable/observable.component';
import { OperatorComponent } from './operator/operator.component';
import { Test1Component } from './test/test1/test1.component';
import { WurtaoComponent } from './wurtao/wurtao.component';
import { Test2Component } from './test/test2/test2.component';
import { NgTemplateComponent } from './ng-template/ng-template.component';
import { HttpClientModule } from '@angular/common/http';
import { DirectiveComponent } from './directive/directive.component';
import { AppRoutingModule } from './/app-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductComponent } from './product/product.component';
import { ProductOneComponent } from './product-one/product-one.component';
import { ProductSellerComponent } from './product-seller/product-seller.component';
import { AuxComponent } from './aux/aux.component';
import { ProductService } from './shared/product.service';
import { ProductTwoComponent } from './product-two/product-two.component';
import { ThirdService } from './shared/third.service';
import { AnotherProductService } from './shared/another-product.service';
import { BindComponent } from './bind/bind.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MultiplePipe } from './pipe/multiple.pipe';
import { LifeComponent } from './life/life.component';
import { LifeOnChangesComponent } from './life-on-changes/life-on-changes.component';
import { LifeMainComponent } from './life-main/life-main.component';
import { HtmlFormComponent } from './form/html-form/html-form.component';
import { TemplateFormComponent } from './form/template-form/template-form.component';
import { ReactiveFormComponent } from './form/reactive-form/reactive-form.component';
import { ReactiveRegistComponent } from './form/reactive-regist/reactive-regist.component';
import { PhoneNumberValidatorDirective } from './form/directives/phone-number-validator.directive';
import { EqualValidatorDirective } from './form/directives/equal-validator.directive';
import { HttpComponent } from './http/http.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildrenComponent,
    HighlightDirective,
    ObservableComponent,
    OperatorComponent,
    Test1Component,
    WurtaoComponent,
    Test2Component,
    NgTemplateComponent,
    DirectiveComponent,
    NotFoundComponent,
    ProductComponent,
    ProductOneComponent,
    ProductSellerComponent,
    AuxComponent,
    ProductTwoComponent,
    BindComponent,
    MultiplePipe,
    LifeComponent,
    LifeOnChangesComponent,
    LifeMainComponent,
    HtmlFormComponent,
    TemplateFormComponent,
    ReactiveFormComponent,
    ReactiveRegistComponent,
    PhoneNumberValidatorDirective,
    EqualValidatorDirective,
    HttpComponent
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [
    {
      provide: ProductService,
      // useFactory: () => {
      //   let third = new ThirdService();
      //   let dev = Math.random() < 0.5;
      //   if (dev) {
      //     return new ProductService(third);
      //   } else {
      //     return new AnotherProductService(third);
      //   }
      // },
      useFactory: (third: ThirdService, isDev: boolean) => {
        // let dev = Math.random() < 0.5;
        if (isDev) {
          return new ProductService(third);
        } else {
          return new AnotherProductService(third);
        }
      },
      deps: [ThirdService, 'IS_DEV_ENV']
    },
    ThirdService,
    { provide: 'IS_DEV_ENV', useValue: true } // useValue 可用OBJ
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
