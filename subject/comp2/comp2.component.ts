import { Component } from '@angular/core';
import { FetchService } from 'src/app/fetch.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.scss']
})
export class Comp2Component {
  data: any

  replay: any = []

  constructor(private serv: FetchService) {
    this.serv.inputDataSharing.subscribe((x) => {
      this.data = x
    })

  }



  btnSubmit(val: any) {
    console.log(val.value)
    this.serv.inputDataSharing.next(val.value)
  }

  sub() {
    this.serv.dataSharingReplay.subscribe((x) => {
      this.replay.push(x)
    })
  }

}
