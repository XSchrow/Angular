import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Rune } from '../../models/rune';

@Injectable({
  providedIn: 'root'
})
export class RuneService {
  private runesUrl = 'https://server-andromia-scipy900.c9users.io/runes';
  constructor(private http: HttpClient) { }


  getRunesByExplorateur(token:string): Observable<Rune> {
    let httpOptions= {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token })
    };
    return this.http.get<Rune>(this.runesUrl, httpOptions)
  }
}
