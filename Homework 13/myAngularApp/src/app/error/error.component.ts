import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'error',
  template: `<h1>!!!ERROR PAGE!!!</h1>
              {{msg}}          
    `
})
export class ErrorComponent implements OnInit {
  @Input()msg;
  constructor(private route:ActivatedRoute) {
      route.params.subscribe(x => this.msg=x.msg).unsubscribe();
   }

  ngOnInit() {
  }

}
