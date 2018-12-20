import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InoxLocationService {
  // Variable qui va garder l'url du serveur
  private inoxLocationUrl = 'https://server-andromia-scipy900.c9users.io/accounts';

  constructor(private http: HttpClient) { }

  get(token: string) : Observable<{location: string, inox: number}> {
    // On fait une variable pour garder un header standard
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token })
    };
    // On appel la fonction get de notre serveur pour recevoir la location et les inox
    return this.http.get<{location: string, inox: number}>(this.inoxLocationUrl, httpOptions);
  }
}
