import {
  Component,
  OnInit,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked
} from '@angular/core';

@Component({
  selector: 'wt-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent
  implements
    OnInit,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked {
  private childMsg: string;

  constructor() {}

  ngOnInit() {}

  ngAfterContentInit(): void {
    console.log('父组件投影内容初始化完成');
  }

  ngAfterContentChecked(): void {
    console.log('父组件投影内容变更检测完成');
  }

  ngAfterViewInit(): void {
    console.log('父组件试图初始化完成');
  }

  ngAfterViewChecked(): void {
    console.log('父组件试图变更检测完成');
  }

  parentFun(msg: string) {
    this.childMsg = msg;
  }
}
