import { Component } from '@angular/core';

@Component({
  selector: 'ng-template-outlet-example',
  template: `
    <ng-container *ngTemplateOutlet="greet"></ng-container>
    <br />
    <ng-container *ngTemplateOutlet="eng; context: myContext"></ng-container>
    <br />
    <ng-container *ngTemplateOutlet="svk; context: myContext"></ng-container>
    <br />

    <ng-template #greet><span>Hello</span></ng-template>
    <ng-template #eng let-name
      ><span>Hello {{ name }}!</span></ng-template
    >
    <ng-template #svk let-person="localSk"
      ><span>Ahoj {{ person }}!</span></ng-template
    >
  `
})
export class NgTemplateComponent {
  myContext = { $implicit: 'Wutao', localSk: 'Svet' };
}
