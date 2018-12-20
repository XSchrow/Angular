import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Unit } from '../../models/unit';


@Injectable({
  providedIn: 'root'
})
export class UnitService {
  // On garde dans une variable l'url du serveur
  private unitsUrl = 'https://server-andromia-scipy900.c9users.io/units';
  constructor(private http: HttpClient) { }

  getAllUnit(token:string): Observable<Unit[]> {
    // On fait une variable pour garder un header standard
    let httpOptions= {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token })
    };
    // On appel une fonction get qui va récupérer un tableau de units
    const result = this.http.get<Unit[]>(this.unitsUrl, httpOptions);
    return result;
  }
}
