import { FormControl, FormGroup } from '@angular/forms';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

// 个性化校验器
export function phoneValidator(control: FormControl): any {
  let phoneReg = /^(((13[0-9]{1})|(15[0-9]{1})|(18)[0-9]{1}))+\d{8}$/;
  let valid = phoneReg.test(control.value);
  console.log('phoneValidator:', valid);
  return valid ? null : { phoneNumber: true };
}

export function phoneAsyncValidator(control: FormControl): any {
  let phoneReg = /^(((13[0-9]{1})|(15[0-9]{1})|(18)[0-9]{1}))+\d{8}$/;
  let valid = phoneReg.test(control.value);
  console.log('phoneValidator:', valid);
  return of(valid ? null : { phoneNumber: true }).pipe(delay(5000));
}

export function equalValidator(group: FormGroup): any {
  let password: FormControl = group.get('password') as FormControl;
  let pwConfirm: FormControl = group.get('pwConfirm') as FormControl;
  let valid: boolean = password.value
    ? password.value === pwConfirm.value
    : null;
  console.log('password:', valid);
  return valid ? null : { equal: { desc: '密码不一致' } };
}
