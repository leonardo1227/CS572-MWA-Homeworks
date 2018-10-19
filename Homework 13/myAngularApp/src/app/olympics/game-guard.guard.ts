import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DbService } from '../db.service';

@Injectable({
  providedIn: 'root'
})
export class GameGuardGuard implements CanActivate {
  constructor(private router:Router, private dbService:DbService){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(this.dbService.getGamesById(next.params.id)){
      return true;
    }else{
      this.router.navigate(['error','Game ID invalid!!!']);
    }
    
  }
}
