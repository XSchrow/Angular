import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Explorateur } from '../../models/explorateur';


@Injectable({
  providedIn: 'root'
})
export class ExplorateurService {

  private httpOptions= {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  private httpOptionsConnexion = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'token' })
  };

  private explorateursUrl = 'https://server-andromia-scipy900.c9users.io/accounts'
  constructor(private http: HttpClient) { }
  
  addExplorateur (explorateur: Explorateur): Observable<string> {
    const url = `${this.explorateursUrl}/inscription`;
    return this.http.post<{ token: string }>(url, explorateur, this.httpOptions).pipe(map(value => {
      console.log(value);
      return value.token;
    }));
  }

  findExplorateur (explorateur: Explorateur): Observable<string> {
    const url2 = `${this.explorateursUrl}/connexion`;
    return this.http.post<{ token: string }>(url2, explorateur, this.httpOptionsConnexion).pipe(map(value => {
      console.log(value);
      return value.token;
    }));
  }
}
