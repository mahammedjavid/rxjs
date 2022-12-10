import { Component } from '@angular/core';
import { FetchService } from '../fetch.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent {
  data!: any
  replay: any = ['hi', 'hello', 'world']

  constructor(private ser: FetchService) {
    this.ser.inputDataSharing.subscribe((x) => {
      this.data = x;
    })
    this.ser.dataSharingReplay.subscribe((x) => {
      this.replay.push(x)
    })
  }

  submit(val: any) {
    this.ser.dataSharingReplay.next(val.value)
  }

}
