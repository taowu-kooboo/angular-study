import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'wt-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
  private userValid: boolean = true;
  private userUntouched: boolean = true;
  constructor() {}

  ngOnInit() {}

  onUserInput(form: NgForm) {
    if (form) {
      this.userValid = form.form.get('username').valid;
      this.userUntouched = form.form.get('username').untouched;
    }
  }

  onSubmit(value) {
    console.log(value);
  }
}
