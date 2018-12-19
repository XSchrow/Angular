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
  // Variable pour contenir un observable des runes
  public rune: Observable<Rune>
  constructor(private runeService: RuneService) { 
  }

  ngOnInit() {

    // Récupérer les runes en appelant une fonction get de mon service de runes
    this.rune = this.runeService.getRunesByExplorateur(localStorage.Authorization);
  }


}
