import { Component } from '@angular/core';
import { FetchService } from 'src/app/fetch.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss']
})
export class Comp1Component {
  data: any

  constructor(private serv: FetchService) {
    this.serv.inputDataSharing.subscribe((x) => {
      this.data = x
    })

  }



  btnSubmit(val: any) {
    console.log(val.value)
    this.serv.inputDataSharing.next(val.value)
  }

}
