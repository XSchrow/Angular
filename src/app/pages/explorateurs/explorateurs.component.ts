import { Component, OnInit } from '@angular/core';
import { Explorateur } from '../../models/explorateur'
import { ExplorateurService } from '../../services/explorateur/explorateur.service'


@Component({
  selector: 'app-explorateurs',
  templateUrl: './explorateurs.component.html',
  styleUrls: ['./explorateurs.component.css']
})
export class ExplorateursComponent implements OnInit {
  explorateurs : Explorateur[];
  constructor(private explorateurService: ExplorateurService) { }

  ngOnInit() {
    
  }
  
  add(username:string, email:string) : void {
    username = username.trim();
    email = email.trim();
    if(!name && !email) {return;}
    this.explorateurService.addExplorateur({username, email} as Explorateur)
      .subscribe(explorateur => {
        this.explorateurs.push(explorateur);
      });
  }

  find(username:string, password:string) : void {
    username = username.trim();
    password = password.trim();
    if(!name && !password) {return;}
    this.explorateurService.findExplorateur({username, password} as Explorateur)
  }

}
