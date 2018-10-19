import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>{{description}}</h1>
            <h2>{{student}} - {{studentID}}</h2>

            <div>
              <a [routerLink]="['olympics']">Olympics</a>
            </div>
            <router-outlet></router-outlet>
            `
})
export class AppComponent {
  title = 'myAngularApp';
  description='Homework 13th (CS572-MWA (2018 October\'s block))';
  student='Leonardo Samuel Tolosa Contreras';
  studentID='986527';
}
