import { Component, ElementRef, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { concatMap, exhaustMap, fromEvent, map, of, Subject, switchMap, tap } from 'rxjs';
import { FetchService } from '../fetch.service';

@Component({
  selector: 'app-exhaust-map',
  templateUrl: './exhaust-map.component.html',
  styleUrls: ['./exhaust-map.component.scss']
})
export class ExhaustMapComponent implements AfterViewInit {
  constructor(private fetchser: FetchService) { }

  data: any;

  @ViewChild('search') btn!: ElementRef

  ngAfterViewInit(): void {
    let data$ = fromEvent(this.btn.nativeElement, 'click').pipe(
    )
    data$.pipe(switchMap(() => this.fetch()))
      .subscribe((x) => {
        // console.log(x)  //!result
      })
  }

  fetch(): any {
    console.log('hi')
    return this.fetchser.getexhaust()

  }

}
