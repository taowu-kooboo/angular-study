import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WurtaoComponent } from './wurtao.component';

describe('WurtaoComponent', () => {
  let component: WurtaoComponent;
  let fixture: ComponentFixture<WurtaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WurtaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WurtaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
