import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  private data;

  constructor() {
      this.data = [{_id:1, game:{name:'Rowing', schedule:[{stadium:'Stadium1',date:'10/17/2018',time:'10:00 A.M.'},
                                                          {stadium:'Stadium2',date:'10/17/2018',time:'2:00 P.M.'},
                                                          {stadium:'Stadium3',date:'10/17/2018',time:'4:00 P.M.'},
                                                          {stadium:'Stadium4',date:'10/18/2018',time:'10:00 A.M.'}]}},
                  {_id:2, game:{name:'Tennis', schedule:[{stadium:'Stadium1',date:'10/18/2018',time:'9:00 A.M.'},
                                                         {stadium:'Stadium2',date:'10/19/2018',time:'10:00 A.M.'},
                                                         {stadium:'Stadium3',date:'10/20/2018',time:'10:00 A.M.'}]}},
                  {_id:3, game:{name:'Soccer', schedule:[{stadium:'Stadium1',date:'10/21/2018',time:'8:00 A.M.'},
                                                         {stadium:'Stadium2',date:'10/21/2018',time:'1:00 P.M.'},
                                                         {stadium:'Stadium3',date:'10/22/2018',time:'4:00 P.M.'}]}}];
   }


  getData(){
    return this.data;
  }

  getGamesById(id){
    return this.getData().find(g=> g._id==id);
  }

  getGames(){
    return this.getData().map(game => {
      return {id:game._id, game:game.game.name}
    });
  }
}
