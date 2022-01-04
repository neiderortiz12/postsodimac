import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  posts !: any;

  constructor(private postsSvc: PostsService) { }

  ngOnInit(): void {
    this.postsSvc.getPosts('https://jsonplaceholder.typicode.com/posts/').pipe(
      tap(res => this.posts = res)
    ).subscribe();
  }

}
