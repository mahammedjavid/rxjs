import { Component, OnInit } from '@angular/core';
import { FetchService } from '../fetch.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  exclusive: boolean = false
  constructor(private ser: FetchService) { }

  ngOnInit(): void {
    this.ser.exclusive.subscribe((x) => {
      this.exclusive = x;
    })
  }



}
