import { ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { from, fromEvent, interval, observable, Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  title = 'RxJs';

  Value!: Observable<String>

  string: any

  a = "This is String"
  b = {
    name: 'This is String',
    age: 10
  }
  c = [1, 3, 4]
  d = ['hi', 'hello', 'world', 'testing']
  // a$: Observable<string> = of(this.a) //!of
  // b$: Observable<any> = from(this.b)
  c$: Observable<number> = from(this.c)
  d$: Observable<any> = from(this.d) //!from


  @ViewChild('button') button!: ElementRef



  ngOnInit(): void {
    //   this.Value = new Observable((sub) => {
    //     try {
    //       sub.next('One')
    //       sub.next('Two')
    //       sub.next('Three')
    //       sub.next('Four')
    //       sub.next('Five')
    //       sub.next('Six')

    //     } catch (error) {
    //       sub.error(error)
    //     }
    //   })
    //   this.Value.subscribe((x) => this.string = x)



    // this.a$.subscribe((x) => console.log(x))
    // this.b$.subscribe((x) => console.log(x))
    this.c$.subscribe((x) => console.log(x))

    //!Interval
    // this.d$.subscribe((x) => {
    // let num = interval(2000)  //!interval
    // num.subscribe((y) => {
    //   if (y < 5) {
    //     console.log(x)
    //   }
    // })
    // })


  }
  fromEventRxJx() {
    let eventRxJs$: Observable<any> = fromEvent(this.button?.nativeElement, 'mouseover');  //!From Event
    eventRxJs$.subscribe((x) => console.log(x))
  }






}
