import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'wt-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent {
  // private dataSource: Observable<any>;
  // private items: Array<any> = [];

  // constructor(private _http: HttpClient) {
  //   this.dataSource = this._http.get('');
  // }

  // ngOnInit() {
  //   this.dataSource.subscribe(data => (this.dataSource = data));
  // }

  private items$: Observable<any>;
  constructor(private _http: HttpClient) {
    this.items$ = this._http.get('', {
      headers: { Authorization: 'Basic 123456' }
    });
  }
}
