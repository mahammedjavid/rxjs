import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { FetchService } from '../fetch.service';

@Component({
  selector: 'app-async',
  templateUrl: './async.component.html',
  styleUrls: ['./async.component.scss']
})
export class AsyncComponent {
  data: any
  sub!: Subscription
  constructor(private sync: FetchService) {
    this.sub = this.sync.asyncSubject.subscribe((x) => {
      this.data = x
      console.log(this.data)
    })
  }

  Submit(val: any) {
    this.sync.asyncSubject.next(val.value)
    console.log(val.value)
  }
  complte() {
    this.sync.asyncSubject.complete()

  }

}
