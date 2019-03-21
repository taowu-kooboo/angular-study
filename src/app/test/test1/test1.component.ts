import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'wt-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {

  @Input() id: number;

  @Output() close: EventEmitter<any> = new EventEmitter<any>()

  constructor() { }

  ngOnInit() {
  }

  forEach(items, callBack) {
    for (let i = 0; i < items.length; i++) {
      callBack(items[i])
    }
  }

  _close() {
    this.close.emit();
  }

}


// module.exports = (name, cd) => setTimeout(() => {
//   cd(`Hello ${name}`)
// }, 1000);