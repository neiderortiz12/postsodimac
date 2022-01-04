import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-newpost',
  templateUrl: './newpost.component.html',
  styleUrls: ['./newpost.component.scss']
})
export class NewpostComponent implements OnInit {
  public form!: FormGroup;

  constructor(private postsSvc: PostsService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        title: [''],
        body: ['']

      }
    )
  }

  saveData(){
    this.postsSvc.post(`https://jsonplaceholder.typicode.com/posts`,
      {
        title: this.form.value.title,
        body: this.form.value.body,
        userId: 1,
      }
    ).subscribe(res => {
      console.log("guardado ", res)
    })
  }

}
