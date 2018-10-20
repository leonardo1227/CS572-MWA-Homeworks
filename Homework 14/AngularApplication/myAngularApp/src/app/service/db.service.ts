import { Injectable, EventEmitter } from '@angular/core';
import { ExternalRequestService } from './external-request.service';

@Injectable({
  providedIn: 'root'
})
export class DbService {


  constructor(private extRequest: ExternalRequestService) { }

  verifyEmailUniqueEmitter = new EventEmitter();
  verifyEmailUnique(email) {
    let url = 'http://localhost:1000/verifyemail/' + email;
    this.extRequest.makeGetRequest(url).subscribe(
      response => this.verifyEmailUniqueEmitter.emit(response),
      err => console.error(err)
    ).unsubscribe();
  }
}
