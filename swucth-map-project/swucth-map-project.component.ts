import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { concatMap, debounceTime, distinctUntilChanged, filter, mergeMap, pluck, switchMap, take } from 'rxjs';
import { FetchService } from '../fetch.service';
import { IUser } from './types';

@Component({
  selector: 'app-swucth-map-project',
  templateUrl: './swucth-map-project.component.html',
  styleUrls: ['./swucth-map-project.component.scss']
})
export class SwucthMapProjectComponent implements OnInit {

  searchForm = new FormGroup({
    search: new FormControl('',),
  })
  constructor(private fetch: FetchService) {
    // this.fetch.getSwitchMapData().subscribe((x: any) => {
    //   return 
    // })
    // this.getData()
  }
  items: any[] = [];
  ngOnInit() {
    this.searchForm.valueChanges.pipe(
      pluck('search'),
      debounceTime(600),
      distinctUntilChanged(),
      switchMap((x: any) => this.fetch.getSwitchMapData(x))
    ).subscribe((y: any) => {
      console.log(y)
      this.items = y
    })
  }
}



  // getData() {
  //   this.fetch.getSwitchMapData().subscribe((x: any) => {
  //     this.items = x
  //   })
  // }

