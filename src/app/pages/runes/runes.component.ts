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
  constructor(private runeService: RuneService) { 
    
    this.getRunes(localStorage.Authorization);
  }

  ngOnInit() {
  }
  public runes: any = Rune;

  public get runesArray() {
    return Object.entries(this.runes);
  }

  public getRunes(token: string): Observable<Rune> {
    return this.runeService.getRunesByExplorateur(token)
  }


}
