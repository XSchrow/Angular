import { Component, OnInit } from '@angular/core';
import { Explorateur } from '../../models/explorateur';
import { ExplorateurService } from '../../services/explorateur/explorateur.service'


@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  constructor(private explorateurService: ExplorateurService) { }

  ngOnInit() {
    
  }

  find(username:string, password:string) : void {
    username = username.trim();
    password = password.trim();
    if(!name && !password) {return;}
    this.explorateurService.findExplorateur({username, password} as Explorateur)
  }
}
