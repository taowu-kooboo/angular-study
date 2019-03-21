import { Directive } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import { phoneValidator } from '../validator/validators';

@Directive({
  selector: '[wtPhoneNumber]',
  providers: [{ provide: NG_VALIDATORS, useValue: phoneValidator, multi: true }]
})
export class PhoneNumberValidatorDirective {
  constructor() {}
}
