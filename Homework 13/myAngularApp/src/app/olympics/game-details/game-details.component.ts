import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DbService } from 'src/app/db.service';

@Component({
  selector: 'game-details',
  template: `<ul>
              <li *ngFor="let game of game.game.schedule">{{game.date}} - {{game.time}} - {{game.stadium}} </li>
            </ul>`
})
export class GameDetailsComponent implements OnInit {
  private game;
  constructor(private route:ActivatedRoute, private dbService:DbService) {
      route.params.subscribe(params => {
        this.game = this.dbService.getGamesById(params.id);
      }).unsubscribe();
   }

  ngOnInit() {
  }


}
