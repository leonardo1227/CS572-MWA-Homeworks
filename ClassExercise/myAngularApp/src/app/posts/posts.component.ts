import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'posts',
  template:`<ul>
              <li *ngFor="let post of posts">{{post.title}}</li>
            <ul>`
  //templateUrl: './posts.component.html',
  //styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  @Input('content')posts;
  
  // constructor(private dataService:DataService) { 
    // this.dataService.getPosts().subscribe(
    //   response => {
    //     this.posts = response;
    //     console.log(this.posts)
    //   },
    //   error => {
    //     console.error(error);
    //   }
    // );
  // }

  ngOnInit() {
  }

}
