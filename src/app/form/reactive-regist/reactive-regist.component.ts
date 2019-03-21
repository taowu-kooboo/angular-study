import { Component, OnInit } from '@angular/core';
import {
  phoneValidator,
  equalValidator,
  phoneAsyncValidator
} from '../validator/validators';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
  Validator
} from '@angular/forms';

@Component({
  selector: 'wt-reactive-regist',
  templateUrl: './reactive-regist.component.html',
  styleUrls: ['./reactive-regist.component.css']
})
export class ReactiveRegistComponent implements OnInit {
  formModel: FormGroup;

  // constructor() {
  //   this.formModel = new FormGroup({
  //     username: new FormControl(),
  //     phoneNumber: new FormControl(),
  //     passwordsGroup: new FormGroup({
  //       password: new FormControl(),
  //       pwConfirm: new FormControl()
  //     })
  //   });
  // }
  constructor(fb: FormBuilder) {
    this.formModel = fb.group({
      username: ['', [Validators.required, Validators.minLength(6)]],
      phoneNumber: ['', phoneValidator, phoneAsyncValidator],
      passwordsGroup: fb.group(
        {
          password: ['', Validators.minLength(6)],
          pwConfirm: ['']
        },
        { validator: equalValidator }
      )
    });
  }

  ngOnInit() {}

  onSubmit() {
    let isValid: boolean = this.formModel.get('username').valid;
    let errors: any = this.formModel.get('username').errors;
    console.log('username: ', isValid);
    console.log('usernameerrors: ', errors);
    console.log(this.formModel.value);
    console.log('111', this.formModel.valid);
    if (this.formModel.valid) {
      console.log(this.formModel.value);
    }
  }
}
