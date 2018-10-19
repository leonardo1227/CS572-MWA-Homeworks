import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GamesComponent } from './games/games.component';
import { GameDetailsComponent } from './game-details/game-details.component';
import { GameGuardGuard } from './game-guard.guard';

const routes: Routes = [
  {path:'',redirectTo:'/olympics/games',pathMatch:'full'},
  {path:'games',component:GamesComponent, children:[
    {path:'game/:id', component:GameDetailsComponent, canActivate:[GameGuardGuard]}
  ]}
  //,{path:'game/:id', component:GameDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OlympicsRoutingModule { }
