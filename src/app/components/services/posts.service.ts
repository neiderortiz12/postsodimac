import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private apiURL='https://jsonplaceholder.typicode.com/posts/'
  constructor(private http: HttpClient) {
    
  }

  getPosts(url:string):Observable<any>{
    return this.http.get(url);
  }

  post(url:string, data:any){
    return this.http.post(url, data);
  }


}
