import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'counter',
  template: `<button class="dec" (click)="decrease()">-</button>&nbsp;
            <output>{{counterValue}}</output>&nbsp;
            <button class="inc" (click)="increase()">+</button>
            `,
  styles: ['.inc{color:blue}','.dec{color:red}']
})
export class CounterComponent implements OnInit {
  @Input('counter') counterValue:number;
  @Output() counterChange: EventEmitter<number>;
  constructor() {
      this.counterValue = 0;
      this.counterChange = new EventEmitter();
   }

  ngOnInit() {
  }

  increase(){
    this.counterValue = this.counterValue + 1;
    this.emitCounterChange(this.counterValue);
  }

  decrease(){
    this.counterValue = this.counterValue - 1;
    this.emitCounterChange(this.counterValue);
  }

  emitCounterChange(value){
    this.counterChange.emit(value);
  }

}
