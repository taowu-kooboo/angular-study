import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeOnChangesComponent } from './life-on-changes.component';

describe('LifeOnChangesComponent', () => {
  let component: LifeOnChangesComponent;
  let fixture: ComponentFixture<LifeOnChangesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifeOnChangesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeOnChangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
