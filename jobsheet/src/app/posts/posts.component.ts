import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent {
  posts: any;

  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {
    http.get(this.url).subscribe((response: any) => {
      this.posts = response;
    });
  }

  createPost(input: HTMLInputElement) {
    // let post = event.target.value;
    // event.target.value = '';
    let post: Post = { title: input.value };
    input.value = '';

    this.http
      .post(this.url, JSON.stringify(post))
      .subscribe((response: any) => {
        post.id = response.id;
        this.posts.splice(0, 0, post);
        console.log(response);
      });
  }

  updatePost(post: any) {
    this.http
      .patch(this.url + '/' + post.id, JSON.stringify({ isRead: true }))
      // this.http.put(this.url, JSON.stringify(post)) /* gatau eror*/ */
      .subscribe((response: any) => {
        console.log(response);
      });
  }
  deletePost(post: any) {
    this.http.delete(this.url + '/' + post.id).subscribe((response: any) => {
      let index = this.posts.indexOf(post);
      this.posts.splice(index, 1);
    });
  }
}
