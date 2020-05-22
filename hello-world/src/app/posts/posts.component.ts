import {Component, OnInit} from '@angular/core';
import {PostService} from '../services/post.service';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit{

  posts: any


  constructor(private postService : PostService) {
  }

  ngOnInit(): void {
    this.postService.getAll().subscribe(response => {this.posts = response},
      (error: Response) => {
        alert("An unexpected error occurred : " + error)
        console.error(error)
      })
  }

  createPost(input: HTMLInputElement) {
    let post = {title: input.value};
    this.posts.splice(0, 0, post)
    input.value = ''
    this.postService.create(post)
      .subscribe(response => {
        post['id'] = response['id']

      },
        (error: Response) => {
          if (error.status === 404){

          }
          else{
            alert("An unexpected error occurred")
          }
          this.posts.splice(0, 1)
        });
  }

  updatePost(post: any) {
    this.postService.update({isRead: true})
      .subscribe(
        response => {
          console.log(response)
        },
        (error: Response) => {
          alert("An unexpected error occurred")
        })
  }

  deletePost(post: any) {
    let index = this.posts.indexOf(post)
    this.posts.splice(index, 1)
    this.postService.delete(post.id)
      .subscribe(response => {

        },
        (error: Response) => {
          if (error.status === 404) {
            alert("This post has already been deleted.")
          }
          else{
            alert("An unexpected error occurred")
          }
          this.posts.splice(1, 0, post);
        });
  }
}
