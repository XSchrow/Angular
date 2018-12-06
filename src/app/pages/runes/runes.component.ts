import { Component, OnInit } from '@angular/core';
import { Rune } from '../../models/rune'
import { Observable } from 'rxjs';
import { RuneService } from '../../services/rune/rune.service'


@Component({
  selector: 'app-runes',
  templateUrl: './runes.component.html',
  styleUrls: ['./runes.component.css']
})
export class RunesComponent implements OnInit {
  public rune: Observable<Rune>
  constructor(private runeService: RuneService) { 
    /**console.log(this.getRunes(localStorage.Authorization));
    this.runes = this.getRunes(localStorage.Authorization);*/
  }

  ngOnInit() {
    this.rune = this.runeService.getRunesByExplorateur(localStorage.Authorization);
  }
  //public runes: any = new Rune(0,0,0,0,0,0,0,0,0,0,0,0);

  /*public get runesArray() {
    return Object.entries(this.rune);
  }*/

  /*public getRunes(token: string): Observable<Rune> {
    return this.runeService.getRunesByExplorateur(token)
  }*/


}
