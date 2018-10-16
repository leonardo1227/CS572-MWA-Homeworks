import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<counter #counterS [counter]="10" (counterChange)="updateComponentCounterValue($event)"></counter> <br>
              <output>Component Counter Value = {{componentCounterValue}}</output>`,
  //styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firstAngularApp';
  componentCounterValue:number;

  updateComponentCounterValue(externalValue){
    this.componentCounterValue=externalValue;
  }
  
}
