import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wt-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {

  id: number = 6;

  constructor() { }

  ngOnInit() {
  }


  close() {
    console.log(1111)
  }

}
