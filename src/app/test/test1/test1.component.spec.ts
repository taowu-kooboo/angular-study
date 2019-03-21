// import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// import { Test1Component } from './test1.component';

// describe('Test1Component', () => {
//   let component: Test1Component;
//   let fixture: ComponentFixture<Test1Component>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ Test1Component ]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(Test1Component);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });

test('test', () => {

  const forEach = require('./test1.component.ts');

  const mockCallBack = jest.fn(x => 42 + x);;

  forEach([0, 1], mockCallBack);

  expect(mockCallBack.mock.calls.length).toBe(2);
})



test('two plus two is four', () => {
  expect(2 + 2).toBe(4)
})


let asyncHello = require('./test1.component.ts');

test('async Hello world', (done) => {
  asyncHello('world', (result) => {
    expect(asyncHello(result)).toBe('Hello world');
    done()
  });
})

