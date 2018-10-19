import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OlympicsRoutingModule } from './olympics-routing.module';
import { GamesComponent } from './games/games.component';
// import { DbService } from '../db.service';
import { GameDetailsComponent } from './game-details/game-details.component';

@NgModule({
  imports: [
    CommonModule,
    OlympicsRoutingModule
  ],
  // providers: [DbService],
  declarations: [GamesComponent, GameDetailsComponent]
})
export class OlympicsModule {
    getMsg(){
      return "test";
    }
 }
