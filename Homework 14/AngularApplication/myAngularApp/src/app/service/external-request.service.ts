import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExternalRequestService {

  constructor(private http: HttpClient) { }

  makeGetRequest(url) {
    return this.http.get(url);
  }
}
