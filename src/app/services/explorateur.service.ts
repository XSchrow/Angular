import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Explorateur } from '../models/explorateur';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ExplorateurService {

  private explorateursUrl = 'https://server-andromia-scipy900.c9users.io/accounts/'
  constructor(private http: HttpClient) { }
  
  addExplorateur (explorateur: Explorateur): Observable<Explorateur> {
    const url = `${this.explorateursUrl}/inscription`;
    return this.http.post<Explorateur>(this.explorateursUrl, explorateur, httpOptions);
  }

  findExplorateur (explorateur: Explorateur): Observable<Explorateur> {
    const url = `${this.explorateursUrl}/connexion`;
    return this.http.get<Explorateur>(this.explorateursUrl, httpOptions);
  }
}
