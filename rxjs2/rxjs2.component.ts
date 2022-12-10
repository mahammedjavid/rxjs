import { Component, ElementRef, ViewChild, AfterViewInit, OnInit, OnDestroy } from '@angular/core';
import { from, fromEvent, interval, Observable, Subscription, take, timer, toArray } from 'rxjs';

@Component({
  selector: 'app-rxjs2',
  templateUrl: './rxjs2.component.html',
  styleUrls: ['./rxjs2.component.scss']
})
export class Rxjs2Component implements AfterViewInit, OnInit, OnDestroy {
  @ViewChild('button') button!: ElementRef

  constructor() { }
  data = ['hi', 'hello', 'world']
  data$: Observable<String> = from(this.data)
  unsub2!: Subscription

  ngAfterViewInit() {
    fromEvent(this.button.nativeElement, 'click').subscribe((x) => {
      console.log(x)
    })

    let unsub: Subscription


    let timerr = timer(2000, 1000)
    unsub = timerr.subscribe(x => {
      // console.log(x)
      if (x > 5) {
        unsub.unsubscribe()
      }
      // console.log(x)
    })

    let interval$ = interval(200)
    interval$.pipe(
      take(5),
      toArray()
    )
      .subscribe(x => {
        // console.log(x)
      })

  }


  // !Observable
  count = 0
  obsData: any = ""
  observable = Observable.create((sub: any) => {
    setInterval(() => {
      sub.next(this.data[this.count])
      this.count++

      // if (this.count >= 2) {
      //   sub.error(new Error("count error"))
      // }
      if (this.count >= 3) {
        sub.complete()
      }
    }, 1000)
  })



  ngOnInit(): void {
    this.data$.pipe(toArray()).subscribe((x) => {
      let count = 1
      setInterval(() => {
        // console.log(x[count])
        count++
      }, 1000)
    })

    this.unsub2 = this.observable.subscribe((x: any) => {
      this.obsData = x
      // console.log(this.obsData)
    })
  }
  ngOnDestroy(): void {
    if (this.unsub2) {
      this.unsub2.unsubscribe()
    }
  }


}
