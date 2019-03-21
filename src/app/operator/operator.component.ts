import { Component, OnInit, AfterViewInit } from '@angular/core';
import { from, of, interval, range, timer, observable, fromEvent, merge } from 'rxjs';
import { takeLast, take, repeat, map, mapTo, scan, buffer, bufferTime, bufferCount, concatMap, switchMap, filter, first, last, skip, takeUntil, debounceTime, throttleTime, distinct, distinctUntilChanged, withLatestFrom, startWith, delay, delayWhen, tap } from 'rxjs/operators';

@Component({
  selector: 'wt-operator',
  templateUrl: './operator.component.html',
  styleUrls: ['./operator.component.css']
})
export class OperatorComponent implements OnInit, AfterViewInit {

  private result: any = null;

  constructor() { }

  ngOnInit() {
  }

  opera() {

    // from  , of

    // from([1, 2, 3]).subscribe(value => {
    //   this.result += 'from:' + value;
    // })

    // of(1, 2, 3).subscribe(value => {
    //   this.result += 'of:' + value;
    // })


    // interval

    // interval(1000).pipe(take(5)).subscribe(value => {
    //   this.result += value + '';
    // })



    // repeat

    // of(1, 2, 3).pipe(repeat(2)).subscribe(value => {
    //   this.result += value + '';
    // })


    // range

    // range(3, 5).subscribe(value => {
    //   this.result += value + '';
    // })


    // timer

    // timer(5000, 1000).pipe(take(5)).subscribe(value => {
    //   this.result += value + '';
    // })


    // map

    // of(1, 2, 3).pipe(map(x => x * 10)).subscribe(value => {
    //   this.result += value + '';
    // })


    // mapTo

    // of(1, 2, 3).pipe(mapTo(new Date().toLocaleDateString())).subscribe(value => {
    //   this.result += value + '';
    // })


    // scan

    // of(1, 2, 3).pipe(scan((accumulator, current) => accumulator + current, 10)).subscribe(value => {
    //   this.result += value + ' ';
    // })


    // buffer

    // const observable$1 = timer(0, 1000).pipe(take(5));
    // const obsercavle$2 = timer(2000, 2000).pipe(take(2));
    // observable$1.pipe(buffer(obsercavle$2)).subscribe(value => {
    //   this.result += value + ' ';
    // })


    // bufferTime

    // timer(0, 1000).pipe(bufferTime(2000), take(5)).subscribe(value=>{
    //   this.result += value + ' ';
    // })


    // bufferCount

    // timer(0, 1000).pipe(bufferCount(3), take(3)).subscribe(value => {
    //   this.result += value + ' ';
    // })


    // concatMap

    // timer(0, 5000).pipe(concatMap(i => timer(0, 1000).pipe(take(5))), take()).subscribe(value => {
    //   this.result += value + ' ';
    // })


    // switchMap

    // timer(0, 4000).pipe(switchMap(i => timer(0, 1000).pipe(take(5))), take(15)).subscribe(value => {
    //   this.result += value + ' ';
    // })


    // filter

    // of(1, 2, 3, 4, 5).pipe(filter(v => v > 3)).subscribe(value => this.result += value + ' ')


    // first

    // of(1, 2, 3, 4, 5).pipe(first()).subscribe(value => this.result += value + ' ')
    // of(1, 2, 3, 4, 5).pipe(first(x => x > 2)).subscribe(value => this.result += value + ' ')
    // of(1, 2).pipe(first(x => x > 10, 100)).subscribe(value => this.result += value + ' ')



    // last

    // of(1, 2, 3, 4, 5).pipe(last()).subscribe(value => this.result += value + ' ')
    // of(1, 2, 3, 4, 5).pipe(last(x => x > 2)).subscribe(value => this.result += value + ' ')
    // of(1, 2).pipe(last(x => x > 10, 100)).subscribe(value => this.result += value + ' ')



    // skip

    // of(1,2,3,4,5).pipe(skip(3)).subscribe(value => this.result += value + ' ')



    // takeUntil

    // const aaa = timer(2000, 10)
    // timer(0, 1000).pipe(takeUntil(aaa)).subscribe(value => this.result += value + ' ')



    // takeLast

    // of(1,2,3,4,5).pipe(takeLast(3)).subscribe(value => this.result += value + ' ')



    // distinct

    // of(1, 1, 2, 2, 2, 3, 4, 5).pipe(distinct()).subscribe(value => this.result += value + ' ')



    // distinctUntilChanged

    // of(1, 1, 2, 2, 2, 1, 1, 2, 3, 3, 4).pipe(distinctUntilChanged()).subscribe(value => this.result += value + ' ')

    // of(1, 1, 2, 2, 2, 1, 1, 2, 3, 3, 4).pipe(distinctUntilChanged((previous: number, next: number) => previous + 1 === next)).subscribe(value => this.result += value + ' ')



    // startWith

    // of(1, 2, 3).pipe(startWith('w')).subscribe(value => this.result += value + ' ')



    // merge

    // const observable1 = timer(0, 1000).pipe(take(3))
    // const observable2 = timer(1, 1000).pipe(take(3))

    // merge(observable1, observable2).subscribe(value => this.result += value + ' ')



    // delay

    // of(1, 2, 3).pipe(delay(1000)).subscribe(value => this.result += value + ' ')



    // delayWhen

    // of(1, 2, 3).pipe(delayWhen(() => interval(Math.random() * 3000))).subscribe(value => this.result += value + ' ')


    const clicks = fromEvent(document, 'click');
    const positions = clicks.pipe(
      tap(ev => console.log(ev))
    );
    positions.subscribe(x => console.log(x));






  }

  ngAfterViewInit() {
    // fromEvent(document.querySelector('input'), 'keyup')
    //   .pipe(debounceTime(1000)).subscribe(value => this.result = 'value had send out')


    // fromEvent(document.querySelector('input'), 'keyup')
    //   .pipe(throttleTime(1000)).subscribe(value => this.result += 'value had send out')


  }

}
