import { Component, OnInit } from '@angular/core';
import { concatMap, delay, from, interval, map, mergeAll, mergeMap, of, switchMap } from 'rxjs';

@Component({
  selector: 'app-marge-map',
  templateUrl: './marge-map.component.html',
  styleUrls: ['./marge-map.component.scss']
})
export class MargeMapComponent implements OnInit {

  source = from(['hi', 'hello', 'world'])

  getData(x: any) {
    return of(x + ' is a String Array').pipe(delay(1000))
  }
  ngOnInit(): void {
    this.source.pipe(
      // map(x => this.getData(x)),
      // mergeAll()
      // mergeMap(x => this.getData(x))
      // concatMap(x => this.getData(x))
      switchMap((x) => this.getData(x))
    ).subscribe((x) => {
      console.log(x)
    })
  }



}
