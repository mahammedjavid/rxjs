import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { debounceTime, from, Observable, of, take, takeLast, takeWhile, first, last, elementAt, filter, distinct, skip, count, max, min } from 'rxjs';
import { FetchService } from '../fetch.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {
  constructor(private ser: FetchService) { }

  arr: number[] = [1, 1, 1, 4, 5, 6, 7, 8, 8, 10, 8, 12, 14, 14]
  arr$: Observable<number> = from(this.arr)

  searchForm = new FormGroup({
    name: new FormControl('')
  })

  ngOnInit(): void {
    this.ser.exclusive.next(true)
    this.searchForm.get('name')?.valueChanges.pipe(   //!i can do for whole form like: this.searchForm.valueChanges.pipe()
      // takeWhile((z) => this.checkCondition(z)),
      // take(10),

      // filter((x: any) => x.length > 5),  //!defining the function inside filter function
      // filter((x: any) => this.checkY(x)),  //!Passing callback function 

      debounceTime(500)
    ).subscribe((y) => {
      // console.log(y)
      this.arr$.pipe(
        // distinct()
        // skip(3)
        // count()
        // max(),
        // min()
        // first()
        // last()
        // elementAt(2)
      ).subscribe((z) => {
        console.log(z)
      })
    })
  }
  checkCondition(val: any) {
    return val.length > 5 ? false : true
  }
  checkY(val: any) {
    return val.length > 5 ? false : true
  }
  ngOnDestroy(): void {
    this.ser.exclusive.next(false)
  }


}
