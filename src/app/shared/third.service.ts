import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThirdService {
  constructor() {}

  outputMessage(msg: string) {
    console.log(msg);
  }
}
