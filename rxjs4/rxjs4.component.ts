import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { debounceTime, fromEvent, map, toArray } from 'rxjs';
import { FetchService } from '../fetch.service';
import { IUser } from './type';

@Component({
  selector: 'app-rxjs4',
  templateUrl: './rxjs4.component.html',
  styleUrls: ['./rxjs4.component.scss']
})
export class Rxjs4Component implements OnInit, AfterViewInit {
  item!: IUser
  inputText: any

  constructor(private http: FetchService) {

  }
  @ViewChild('myInput') input!: ElementRef

  ngOnInit() {
    
  }

  ngAfterViewInit(): void {
    let input$ = fromEvent<any>(this.input.nativeElement, 'keyup');
    input$.pipe(
      map((x) => x.target.value),
      debounceTime(100)
    ).subscribe((x) => {
      console.log(x)
      this.inputText = x
    })
  }

  data$ = this.http.getData()
}
