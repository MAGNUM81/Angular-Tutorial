import {Component, OnInit} from '@angular/core';
import {PostService} from '../services/post.service';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit{

  posts: any[]


  constructor(private postService : PostService) {
  }

  ngOnInit(): void {
    this.postService.getPosts().subscribe(response => {
      this.posts = response as any[]
    },
      (error: Response) => {
        alert("An unexpected error occurred")
      })
  }

  createPost(input: HTMLInputElement) {
    let post = {title: input.value};
    input.value = ''
    this.postService.createPost(post)
      .subscribe(response => {
        post['id'] = response['id']
        this.posts.splice(0, 0, post)
      },
        (error: Response) => {
        if (error.status === 404){
          // this.form.setErrors(error)
        }
        else{
          alert("An unexpected error occurred")
        }

        });
  }

  updatePost(post: any) {
    this.postService.updatePost(post, {isRead: true})
      .subscribe(
        response => {
          console.log(response)
        },
        (error: Response) => {
          alert("An unexpected error occurred")
        })
  }

  deletePost(post: any) {
    this.postService.deletePost(355)
      .subscribe(response => {
        let index = this.posts.indexOf(post)
        this.posts.splice(index, 1)
      },
        (error: Response) => {
          if (error.status === 404) {
            alert("This post has already been deleted.")
          }
          else{
            alert("An unexpected error occurred")
          }
        });
  }
}
