import { Component } from '@angular/core';
import { FetchService } from '../fetch.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent {

  constructor(private service: FetchService) { }
  data: any

  fetchData() {
    this.service.getData().subscribe((x) => {
      this.data = x
      console.log(x)
    },
      (error) => {
        console.log(error.message)
      });

  }

}
