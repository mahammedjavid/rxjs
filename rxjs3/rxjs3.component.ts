import { Component, OnInit } from '@angular/core';
import { from, fromEvent, interval, map, Observable, pluck, Subscription, take, takeLast, takeUntil, tap, toArray } from 'rxjs';

@Component({
  selector: 'app-rxjs3',
  templateUrl: './rxjs3.component.html',
  styleUrls: ['./rxjs3.component.scss']
})
export class Rxjs3Component implements OnInit {

  arr: Array<string> = ['data1', 'data2', 'data3', 'data4', 'data5', 'data6', 'data7'];
  count = 0
  name: any
  num$!: Subscription
  time1$!: Subscription
  data$: any
  mapData: any
  mapStatus!: String
  subTap!: Subscription

  mycondition = fromEvent(document, 'click')

  color = ['red', 'green', 'yellow', 'orange',]
  myColor!: any

  pluckData: any
  pluckObject = from([
    {
      name: "Javid",
      Age: 23
    },
    {
      name: "Mohammed",
      Age: 23
    },
    {
      name: "Aizan",
      Age: 23
    },
    {
      name: "Azmal",
      Age: 23
    },
    {
      name: "Imran",
      Age: 23
    }

  ])

  observ = new Observable((obs) => {
    setInterval(() => {
      obs.next(this.arr[this.count])
      this.count++
      if (this.count === 2) {
        obs.error(new Error('Invalid'))
      }
      if (this.count >= this.arr.length) {
        obs.complete()
      }
    }, 100)
  })

  ngOnInit() {
    this.observ.subscribe((data) => {
      this.name = 'Running'
      generateUl(data, 'dataList')
    },
      (err) => {
        this.name = err.message
        // console.log(err) 
      },
      () => {

        this.name = 'Completed'
        // console.log('complete')
      })

    function generateUl(val: any, id: any) {
      let li = document.createElement('li')
      li.innerText = val
      document.getElementById(id)?.appendChild(li)
    }


    // !map
    let num = interval(200)
    this.num$ = num.pipe(
      map((x) => x * 10)
    )

      .subscribe((num) => {
        // console.log(num)
        generateUl(num, 'mapData')
        // console.log(num * 2)
      },
        (err) => {
          this.mapStatus = 'error'
          console.log(err)
        },
        () => {
          this.mapStatus = 'complete'
          console.log('complete')
        })

    setInterval(() => {
      if (this.num$) {
        this.num$.unsubscribe()
      }
    }, 2000)

    // !Pluck

    this.pluckObject.pipe(
      pluck('name'),   // Pluck('name','job)  for nested object
      toArray()
    )
      .subscribe((data) => {
        this.pluckData = data
      })


    // !tap

    let timerrrr = interval(500)

    this.subTap = timerrrr.pipe(
      tap((x) => {
        this.myColor = this.color[x]
        // console.log(this.myColor)
        if (x == 4) {
          this.subTap.unsubscribe()
        }
      }),
      map((x) => this.color[x])

    ).subscribe((x) => {
      // console.log(x)
      generateUl(x, 'colorUI')
    })

    // !take takeLast takeUntill

    let time1 = interval(500)
    this.time1$ = time1.pipe(
      tap((x) => {
        x === 8 ? this.time1$.unsubscribe() : ''
      }),

      takeUntil(this.mycondition),
      map(x => {
        return this.arr[x]
      }),

      // takeLast(2),
    ).subscribe((x) => {
      console.log(x)
      generateUl(x, 'takeUntill')
    })





  }

}
