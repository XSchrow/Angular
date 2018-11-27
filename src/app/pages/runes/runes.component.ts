import { Component, OnInit } from '@angular/core';
import { Rune } from '../../models/rune'

@Component({
  selector: 'app-runes',
  templateUrl: './runes.component.html',
  styleUrls: ['./runes.component.css']
})
export class RunesComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
  }
  public runes: any = new Rune(0,0,0,0,0,0,0,0,0,0,0,0);

  public get runesArray() {
    return Object.entries(this.runes);
  }
}
