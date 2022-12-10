import { Component, OnInit } from '@angular/core';
import { filter, map, Observable, shareReplay, tap } from 'rxjs';
import { FetchService } from '../fetch.service';

@Component({
  selector: 'app-sharereplay',
  templateUrl: './sharereplay.component.html',
  styleUrls: ['./sharereplay.component.scss']
})
export class SharereplayComponent implements OnInit {

  items!: Observable<any>
  otheritem!: Observable<any>

  constructor(private ser: FetchService) {


  }
  ngOnInit(): void {
    this.items = this.ser.getexhaust().pipe(shareReplay())
    this.otheritem = this.items.pipe(
      tap((x) => console.log(x)),
      map((x) => {
        x.filter((y: any) => {
          return y['id'] == 2
        })
      }),
      tap((x) => console.log(x))
    )

  }

}
