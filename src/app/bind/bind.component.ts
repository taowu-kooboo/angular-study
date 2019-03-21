import { Component, OnInit } from '@angular/core';
import { ArgumentOutOfRangeError } from 'rxjs';

@Component({
  selector: 'wt-bind',
  templateUrl: './bind.component.html',
  styleUrls: ['./bind.component.css']
})
export class BindComponent implements OnInit {
  private imgUrl: string = 'http://placehold.it/200x120';
  private size: number = 2;
  private message: string = 'HTML';
  private fontClass: string;
  private isTrue: boolean;
  private classObj: object = { three: false };
  private isDev: boolean;
  private styleObj: object = {
    color: ''
  };
  private name: any;
  private nowDate: Date = new Date();

  constructor() {
    setTimeout(() => {
      this.fontClass = 'one';
      this.isDev = true;
      setTimeout(() => {
        this.isTrue = true;
        setTimeout(() => {
          this.classObj = { three: true };
          this.styleObj = { color: 'orange' };
        }, 1000);
      }, 1000);
    }, 1500);
  }

  ngOnInit() {}

  getInputValue(event: any) {
    console.log(event.target.value, event.target.getAttribute('value'));
  }
}
