import { Component, OnInit } from '@angular/core';
import { concatMap, delay, from, mergeMap, of } from 'rxjs';

@Component({
  selector: 'app-dynamic-htmlrx-js',
  templateUrl: './dynamic-htmlrx-js.component.html',
  styleUrls: ['./dynamic-htmlrx-js.component.scss']
})
export class DynamicHtmlrxJsComponent implements OnInit {

  data = from([
    {
      "name": "Javid",
      "age": 22,
      "place": "Kaup",
      "Number": 100
    },
    {
      "name": "Aizan",
      "age": 22,
      "place": "Kaup",
      "Number": 100
    },
    {
      "name": "Mohammed",
      "age": 22,
      "place": "Kaup",
      "Number": 100
    },
    {
      "name": "Abbas",
      "age": 22,
      "place": "Kaup",
      "Number": 100
    }
  ])
  ngOnInit(): void {
    this.data.pipe(
      concatMap(x => this.getHtml(x))

    ).subscribe((x) => {
      this.generateItem('First', x)
    })
  }



  generateItem(id: any, data: any) {
    let div = document.createElement("div")
    div.setAttribute("class", "container")
    div.innerHTML = data
    document.getElementById(id)?.prepend(div)
  }

  getHtml(data: any) {
    return of(
      `
    <ul class="item">
        <li>${data.name}</li>
        <li>${data.age}</li>
        <li>${data.place}</li>
        <li>${data.Number}</li>
    </ul>`
    ).pipe(delay(1000))
  }

}
