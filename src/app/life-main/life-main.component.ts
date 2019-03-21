import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  AfterViewChecked
} from '@angular/core';
import { LifeOnChangesComponent } from '../life-on-changes/life-on-changes.component';

@Component({
  selector: 'wt-life-main',
  templateUrl: './life-main.component.html',
  styleUrls: ['./life-main.component.css']
})
export class LifeMainComponent
  implements OnInit, AfterViewInit, AfterViewChecked {
  @ViewChild('childOne') childOne: LifeOnChangesComponent;
  @ViewChild('childTwo') childTwo: LifeOnChangesComponent;
  greeting: string = 'Hi';
  user: { name: string } = { name: 'Mirol' };

  constructor() {}

  ngOnInit() {
    this.childOne.sayHi('Hi Tony!');
  }

  ngAfterViewInit(): void {
    // this.greeting = 'come from ngAfterViewInit';
  }

  ngAfterViewChecked(): void {
    // 不可改变改变属性值 如果必须想改变利用setTimeout让它在另个JavaScript运行周期里去运行
    // this.greeting = 'come from ngAfterViewInit';
    // setTimeout(() => {
    //   this.greeting = 'come from ngAfterViewInit';
    // }, 0);
  }
}
