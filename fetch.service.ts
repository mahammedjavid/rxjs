import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AsyncSubject, ReplaySubject, Subject } from 'rxjs';
import { IUser } from './rxjs4/type';

@Injectable({
  providedIn: 'root'
})
export class FetchService {

  constructor(private http: HttpClient) { }

  exclusive = new Subject<boolean>()

  inputDataSharing = new Subject<String>()

  dataSharingReplay = new ReplaySubject(3, 2000)

  asyncSubject = new AsyncSubject()

  getData() {
    return this.http.get<IUser>('https://jsonplaceholder.typicode.com/todos');
  }

  url = 'https://jsonplaceholder.typicode.com/users'
  getSwitchMapData(searchTerm: string) {
    return this.http.get(this.url + '?q=' + searchTerm)
  }

  getexhaust() {
    return this.http.get(this.url)
  }
}
