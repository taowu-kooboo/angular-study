import { Component, OnInit } from '@angular/core';
import { Observable, timer, observable, of, Subject } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: "wt-observable",
  templateUrl: "./observable.component.html",
  styleUrls: ["./observable.component.css"]
})
export class ObservableComponent implements OnInit {

  private result: any;

  constructor() { }

  ngOnInit() { }

  startObservable() {
    // 1
    // const observable$ = Observable.create(observer => {
    //   let index = 0;
    //   observer.next(index);
    //   setInterval(() => {
    //     index++;
    //     observer.next(index);
    //   }, 1000)
    // })

    // const subscription = observable$.subscribe(value => {
    //   this.result = value;
    //   if( value === 10) {
    //     subscription.unsubscribe();
    //   }
    // })

    // 2
    // const observable$ = Observable.create(observer => {
    //   let index = 0;
    //   observer.next(index);
    //   setInterval(() => {
    //     index++;

    //     if(index === 10) {
    //       observer.complete();
    //     }

    //     if(index === 11) {
    //       observer.error('already finish');
    //     }

    //     observer.next(index);
    //   }, 1000)
    // })

    // const _oberver = {
    //   next: value => this.result = value,
    //   error: err => this.result = err,
    //   complete: () => this.result = 'finish'
    // }

    // observable$.subscribe(_oberver)


    // 3
    // const observable$ = timer(0, 1000).pipe(take(10));
    // observable$.subscribe(value => {
    //   this.result = value;
    // })


    // 4
    // const observable$ = of(1, 2, 3);
    // this.customObservable(observable$).subscribe(value => {
    //   this.result += value + '';
    // })


    // 5
    const subject = new Subject();

    subject.subscribe({
      next: (value) => {
        this.result += 'A' + value;
      }
    })

    subject.subscribe({
      next: (value) => {
        this.result += 'B' + value;
      }
    })
    subject.next(1);

  }

  // 4
  customObservable(observable) {
    return Observable.create(observer => {
      observable.subscribe(value => {
        observer.next(value * 10);
      })
    })
  }

}
