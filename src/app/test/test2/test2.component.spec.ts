import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Test2Component } from './test2.component';

describe('Test2Component', () => {
  let component: Test2Component;
  let fixture: ComponentFixture<Test2Component>;
  let el: any;
  let de: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Test2Component]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Test2Component);
    component = fixture.componentInstance;
    el = fixture.nativeElement;
    de = fixture.debugElement;
    spyOn(component, 'close');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be component initialized', () => {
    component.id = 1111;
    fixture.detectChanges();
    expect(el.querySelector('p').innerText).toBe('1111')
  })

  it('should be call close', () => {
    el.querySelector('wt-test1').close();
    fixture.detectChanges();
    expect(component.close).toHaveBeenCalled();
  })
});
