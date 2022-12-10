import { Component, OnInit } from '@angular/core';
import { concat, interval, map, merge, take } from 'rxjs';

@Component({
  selector: 'app-concat-merge',
  templateUrl: './concat-merge.component.html',
  styleUrls: ['./concat-merge.component.scss']
})
export class ConcatMergeComponent implements OnInit {

  firstInterval = interval(500).pipe(take(5), map(x => 'firstInterval' + x))
  secondInterval = interval(200).pipe(take(5), map(x => 'secondInterval' + x))
  thirdInterval = interval(100).pipe(take(5), map(x => 'thirdInterval' + x))

  allInterval = concat(this.firstInterval, this.secondInterval, this.thirdInterval)
  // allInterval = merge(this.firstInterval, this.secondInterval, this.thirdInterval)

  ngOnInit(): void {
    this.allInterval.subscribe((x) => {
      // console.log(x)
    })
  }

}
