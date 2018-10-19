import { Component, OnInit } from '@angular/core';
import { DbService } from 'src/app/db.service';

@Component({
  selector: 'games',
  template:`<ul>
              <li *ngFor="let game of games" >
                <a [routerLink]="['game',game.id]" >{{game.game}}</a>
              </li>
              <br>
              <router-outlet></router-outlet>
            </ul>`
})
export class GamesComponent implements OnInit {
  private games;

  constructor(private dbservice:DbService) {
      this.games = this.dbservice.getGames();
   }

  ngOnInit() {
     
  }

}
