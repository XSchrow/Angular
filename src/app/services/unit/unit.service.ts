import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Unit } from '../../models/unit';


@Injectable({
  providedIn: 'root'
})
export class UnitService {
  private unitsUrl = 'https://server-andromia-scipy900.c9users.io/units/test/tacos';
  constructor(private http: HttpClient) { }

  getAllUnit(token:string): Observable<Unit[]> {
    let httpOptions= {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token })
    };
    const result = this.http.get<Unit[]>(this.unitsUrl, httpOptions);
    console.log(result);
    return result;
  }
}
