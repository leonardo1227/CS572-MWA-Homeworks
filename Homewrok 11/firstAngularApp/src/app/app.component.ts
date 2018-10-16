import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<counter #counterS [counter]="componentCounterValue" (counterChange)="updateComponentCounterValue($event)"></counter> <br>
              <output>Component Counter Value = {{componentCounterValue}}</output>`
})
export class AppComponent {
  title = 'firstAngularApp';
  componentCounterValue:number=10;

  updateComponentCounterValue(externalValue){
    this.componentCounterValue=externalValue;
  }
  
}
