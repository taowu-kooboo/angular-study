import {
  Component,
  ViewChild,
  ElementRef,
  ContentChild,
  AfterContentInit
} from '@angular/core';
import { ChildrenComponent } from './children/children.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterContentInit {
  title = 'angular-study';
  name: string = 'wutao';
  @ViewChild('greet')
  greetDiv: ElementRef;

  @ContentChild(ChildrenComponent) child: ChildrenComponent;

  constructor(private router: Router) {
    // 字符串是不可变的
    let greeting = 'Hi'; // 内存中创建了值为Hi的字符串
    greeting = 'Hi Mirol!'; // 不改变第一个字符串的值 而是在内存中创建一个新的Hi Mirol 的字符串  对于greeting变量来说值是改变了 因为它指向的内存地址发生改变

    let user = { name: 'Tony' };
    user.name = 'Mirol';
    // user.name的指向发生变化由Tony变为Mirol 改的是user对象里的name属性， 但user所指对象的内存地址没变
  }

  ngAfterViewInit() {
    // console.dir(this.greetDiv);
    // console.dir(this.greetDiv.nativeElement.innerText);
  }

  ngAfterContentInit() {
    // console.dir(this.child);
  }

  appFun(value) {
    alert(value);
  }

  toProduct() {
    this.router.navigate(['/product', 2]);
    // this.router.navigateByUrl('/product', { skipLocationChange: true });
  }
}
