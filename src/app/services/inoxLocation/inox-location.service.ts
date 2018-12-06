import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InoxLocationService {

  private inoxLocationUrl = 'https://server-andromia-scipy900.c9users.io/accounts';
  constructor(private http: HttpClient) { }
  getInox(token:string) : Observable<number> {
    let httpOptions= {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token })
    };
    return this.http.get<number>(this.inoxLocationUrl, httpOptions);
  }
}
