import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit{

  posts: any[]
  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get(this.url).subscribe(response => {
      this.posts = response as any[]
    })
  }

  createPost(input: HTMLInputElement) {
    let post = {title: input.value};
    input.value = ''
    this.http.post(this.url, post)
      .subscribe(response => {
        post['id'] = response['id']
        this.posts.splice(0, 0, post)
      });
  }

  updatePost(post: any) {
    this.http.patch(this.url + '/' + post.id, {isRead: true})
      .subscribe(response => {
        console.log(response)
      })
  }

  deletePost(post: any) {
    this.http.delete(this.url + "/" + post.id)
      .subscribe(response => {
        let index = this.posts.indexOf(post)
        this.posts.splice(index, 1)
      })

  }
}
