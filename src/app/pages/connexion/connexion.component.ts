import { Component, OnInit } from '@angular/core';
import { Explorateur } from '../../models/explorateur';
import { ExplorateurService } from '../../services/explorateur.service'


@Component({
  selector: 'app-explorateurs',
  templateUrl: './explorateurs.component.html',
  styleUrls: ['./explorateurs.component.css']
})
export class ConnexionComponent implements OnInit {
  constructor(private explorateurService: ExplorateurService) { }

  ngOnInit() {
    
  }

  find(name:string, password:string) : void {
    name = name.trim();
    password = password.trim();
    if(!name && !password) {return;}
    this.explorateurService.findExplorateur({name, password} as Explorateur)
  }
}
