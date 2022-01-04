import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-moreinfo',
  templateUrl: './moreinfo.component.html',
  styleUrls: ['./moreinfo.component.scss']
})
export class MoreinfoComponent implements OnInit {
  comentarios !: any;
  post !: any;
  constructor(
    private route: ActivatedRoute,
    private postsSvc: PostsService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: any) => {
      console.log(paramMap.params.id)
      this.postsSvc.getPosts(`https://jsonplaceholder.typicode.com/posts/${paramMap.params.id}/comments`).pipe(
        tap(res => this.comentarios = res)
      ).subscribe();
      this.postsSvc.getPosts(`https://jsonplaceholder.typicode.com/posts/${paramMap.params.id}`).pipe(
      tap(res => this.post = res)
    ).subscribe();
    })
  }



}
