import { Component } from '@angular/core';
import { DataService } from './service/data.service';

@Component({
  selector: 'app-root',
  template:`<posts [content]="data"></posts>`
  //templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myAngularApp';

  data;
  constructor(private dataService:DataService){
    this.dataService.getPosts().subscribe(
      response => {
        this.data=response;
      },
      error => console.error(error)
    );
  }

  

}
