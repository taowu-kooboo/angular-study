import { ChangeDetectionStrategy } from '@angular/core';
import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  DoCheck
} from '@angular/core';

@Component({
  selector: 'wt-life-on-changes',
  templateUrl: './life-on-changes.component.html',
  styleUrls: ['./life-on-changes.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush 
})
export class LifeOnChangesComponent implements OnInit, OnChanges, DoCheck {
  @Input() greeting: string;
  @Input() user: { name: string };
  message: string = 'initial information';

  preUsername: string;
  changeDetected: boolean = false;
  notChangeCount: number = 0;

  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    //在输入属性变化时才被调用
    console.log('ngOnchanges', JSON.stringify(changes, null, 2));
  }

  ngDoCheck(): void {
    if (this.user.name !== this.preUsername) {
      this.changeDetected = true;
      console.log(
        `Docheck: user.name从${this.preUsername}变为${this.user.name}`
      );
      this.preUsername = this.user.name;
    }

    if (this.changeDetected) {
      this.notChangeCount = 0;
    } else {
      this.notChangeCount += 1;
      console.log(
        `DoCheck:user.name没变化时ngDoCheck方法已经被调用${
          this.notChangeCount
        }次`
      );
    }
    this.changeDetected = false;
  }

  sayHi(greeting) {
    console.log(greeting);
  }
}
