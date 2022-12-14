import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { combineLatest, forkJoin, fromEvent, pluck, take, withLatestFrom, zip } from 'rxjs';

@Component({
  selector: 'app-combined',
  templateUrl: './combined.component.html',
  styleUrls: ['./combined.component.scss']
})
export class CombinedComponent implements AfterViewInit {

  colorsProperty = ['red', 'black', 'green', 'yellow', 'white', 'blue']
  placesProperty = ['Mangalore', 'Kaup', 'Majoor', 'Shirva', 'Katpadi', 'Kukke']

  @ViewChild('colors') colors!: ElementRef
  @ViewChild('places') places!: ElementRef
  ngAfterViewInit(): void {

    let colorsObs = fromEvent<any>(this.colors.nativeElement, 'change').pipe(pluck('target', 'value'), take(3))
    let placeObs = fromEvent<any>(this.places.nativeElement, 'change').pipe(pluck('target', 'value'), (take(2)))

    //!Combined Latest : at the begining itn will wait for the two obsrvable values, and then it will subscibe for every changes
    // combineLatest(colorsObs, placeObs).subscribe(([colors, places]) => {
    //   console.log(colors, places)
    // })

    // !With latest from : here color is master and place is slave , when changes detected on master then only subscribe can be made.
    // colorsObs.pipe(withLatestFrom(placeObs)).subscribe((x) => {
    //   console.log(x)
    // })

    // !zip : When changes detected in both the observable then only zip will subscribe.

    // zip(colorsObs, placeObs).subscribe(([colors, places]) => {
    //   console.log(colors, places)
    // })


    // !Fork join : it will subscribe only whnen both the observable completes and return only last value
    // forkJoin(colorsObs, placeObs).subscribe(([colors, places]) => {
    //   console.log(colors, places)
    // })


  }


}
