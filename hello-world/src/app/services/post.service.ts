import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  getPosts() {
     return this.http.get(this.url)
  }

  createPost(post) {
    return this.http.post(this.url, post)
  }

  deletePost(id){
    return this.http.delete(this.url + "/" + id)
  }

  updatePost(post: any, updatedValues: any){
    return this.http.patch(this.url + "/" + post.id, updatedValues)
  }
}
