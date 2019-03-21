import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class LoginGuard implements CanActivate {
  canActivate() {
    // 根据返回的true/flase判断是否通过
    let loggedIn: boolean = Math.random() < 0.5;
    if (!loggedIn) console.warn('User not logged in');
    return loggedIn;
  }
}
