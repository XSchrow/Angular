import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Explorateur } from '../../models/explorateur';

@Injectable({
  providedIn: 'root'
})
export class ExplorateurService {

  // On fait une variable pour garder un header standard
  private httpOptions= {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  // On fait une variable pour garder un header contenant un token
  private httpOptionsConnexion = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'token' })
  };

  // On garde dans une variable l'url du serveur
  private explorateursUrl = 'https://server-andromia-scipy900.c9users.io/accounts'
  constructor(private http: HttpClient) { }
  
  // Fonction qui ajoute un explorateur et on retourne une string (token)
  addExplorateur (explorateur: Explorateur): Observable<string> {
    const url = `${this.explorateursUrl}/inscription`;
    // On appel la fonction post dans notre serveur
    return this.http.post<{ token: string }>(url, explorateur, this.httpOptions).pipe(map(value => {
      return value.token;
    }));
  }

  // Fonction qui trouve un explorateur en BD et on retourne une string (token)
  findExplorateur (explorateur: Explorateur): Observable<string> {
    const url2 = `${this.explorateursUrl}/connexion`;
    // On appel la fonction post dans notre serveur
    return this.http.post<{ token: string }>(url2, explorateur, this.httpOptionsConnexion).pipe(map(value => {
      return value.token;
    }));
  }
}
