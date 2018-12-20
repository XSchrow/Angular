import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Rune } from '../../models/rune';

@Injectable({
  providedIn: 'root'
})
export class RuneService {
  // On garde dans une variable l'url du serveur
  private runesUrl = 'https://server-andromia-scipy900.c9users.io/runes';
  constructor(private http: HttpClient) { }


  getRunesByExplorateur(token:string): Observable<Rune> {
    // On fait une variable pour garder un header standard
    let httpOptions= {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token })
    };
    // On appel la fonction get qui va recevoir un objet Rune
    return this.http.get<Rune>(this.runesUrl, httpOptions)
  }
}
