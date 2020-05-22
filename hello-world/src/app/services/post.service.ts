import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DataService} from './data.service';

@Injectable({
  providedIn: 'root'
})
export class PostService extends DataService {

  constructor(private http: HttpClient) {
    super('https://jsonplaceholder.typicode.com/posts', http)
  }
}
