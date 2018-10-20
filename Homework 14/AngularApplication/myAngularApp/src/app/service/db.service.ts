import { Injectable, EventEmitter } from '@angular/core';
import { ExternalRequestService } from './external-request.service';

@Injectable({
  providedIn: 'root'
})
export class DbService {


  constructor(private extRequest: ExternalRequestService) { }

  verifyEmailUniqueEmitter = new EventEmitter();
  verifyEmailUnique(email) {
    console.log('Veryfin...')
    let url = 'http://localhost:1000/verifyemail/' + email;
    let subscription = this.extRequest.makeGetRequest(url).subscribe(
      response => {
        this.verifyEmailUniqueEmitter.emit(response)
        subscription.unsubscribe()
      },
      err => console.error(err)
    );
  }
}
