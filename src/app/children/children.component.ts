import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  AfterContentInit,
  AfterContentChecked
} from '@angular/core';
import { HttpClient, HttpEvent, HttpEventType } from '@angular/common/http';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'wt-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.css']
})
export class ChildrenComponent
  implements OnInit, AfterContentInit, AfterContentChecked {
  @Input('msg') parentMsg: string;
  @Output('upper') childFun: EventEmitter<any> = new EventEmitter<any>();
  private msg: string = 'come from childComponent';

  constructor(private _http: HttpClient, sdsd: ChangeDetectorRef) {}

  ngOnInit() {}

  ngAfterContentInit(): void {
    console.log('子组件投影内容初始化完成');
  }

  ngAfterContentChecked(): void {
    console.log('子组件投影内容变更检测完成');
  }

  test() {
    this.childFun.emit(this.msg);
  }

  getData() {
    this._http
      .get('https://jsonplaceholder.typicode.com/todos', {
        observe: 'events',
        reportProgress: true
      })
      .subscribe((event: HttpEvent<any>) => {
        switch (event.type) {
          case HttpEventType.Sent:
            console.log('request sent');
            break;
          case HttpEventType.ResponseHeader:
            console.log('response header reveived');
            break;
          case HttpEventType.DownloadProgress:
            const loaded = Math.round(event.loaded / 1024);
            console.log(`download ${loaded}KB`);
            break;
          case HttpEventType.Response:
            console.log('done', event.body);
        }
      });
  }
}
