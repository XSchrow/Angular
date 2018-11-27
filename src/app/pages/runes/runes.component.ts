import { Component, OnInit } from '@angular/core';
import { Rune } from '../../models/rune'

@Component({
  selector: 'app-runes',
  templateUrl: './runes.component.html',
  styleUrls: ['./runes.component.css']
})
export class RunesComponent implements OnInit {
  Rune = [

  ]
  
  constructor() { }

  ngOnInit() {
  }

}
