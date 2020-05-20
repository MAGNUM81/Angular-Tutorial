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
    })
  }

  createPost(input: HTMLInputElement) {
    let post = {title: input.value};
    input.value = ''
    this.postService.createPost(post)
      .subscribe(response => {
        post['id'] = response['id']
        this.posts.splice(0, 0, post)
      });
  }

  updatePost(post: any) {
    this.postService.updatePost(post, {isRead: true})
      .subscribe(response => {
        console.log(response)
      })
  }

  deletePost(post: any) {
    this.postService.deletePost(post.id)
      .subscribe(response => {
        let index = this.posts.indexOf(post)
        this.posts.splice(index, 1)
      })

  }
}
