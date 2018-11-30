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
    console.log(this.getRunes(localStorage.Authorization));
    this.runes = this.getRunes(localStorage.Authorization);
  }

  ngOnInit() {
  }
  public runes: any;

  public get runesArray() {
    return Object.entries(this.runes);
  }

  public getRunes(token: string): Observable<Rune> {
    return this.runeService.getRunesByExplorateur(token)
  }


}
