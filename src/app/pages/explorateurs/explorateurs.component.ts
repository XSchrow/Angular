import { Component, OnInit } from '@angular/core';
import { Explorateur } from '../../models/explorateur';
import { ExplorateurService } from '../../services/explorateur/explorateur.service';
@Component({
  selector: 'app-explorateurs',
  templateUrl: './explorateurs.component.html',
  styleUrls: ['./explorateurs.component.css']
})
export class ExplorateursComponent implements OnInit {
  constructor(private explorateurService: ExplorateurService) { }

  ngOnInit() {
    
  }
   
}
