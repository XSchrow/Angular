import { Component, OnInit } from '@angular/core';
import { Explorateur } from '../../models/explorateur';

@Component({
  selector: 'app-explorateurs',
  templateUrl: './explorateurs.component.html',
  styleUrls: ['./explorateurs.component.css']
})
export class ExplorateursComponent implements OnInit {
  public explorateur = new Explorateur(1, 'Windstorm', 'olivier.brazeau@hotmail.com', 'oli');
  constructor() { }

  ngOnInit() {
    
  }
  
}
