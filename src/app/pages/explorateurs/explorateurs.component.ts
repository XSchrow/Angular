import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Explorateur } from '../../models/explorateur'
import { ExplorateurService } from '../../services/explorateur/explorateur.service'


@Component({
  selector: 'app-explorateurs',
  templateUrl: './explorateurs.component.html',
  styleUrls: ['./explorateurs.component.css']
})
export class ExplorateursComponent implements OnInit {
  constructor(private explorateurService: ExplorateurService) { }

  ngOnInit() {
    
  }
  
  add(username: string, email: string, password: string) : void {
    username = username.trim();
    email = email.trim();
    password = password.trim();

    if(!name && !email) {return;}
    this.explorateurService.addExplorateur({username, email, password} as Explorateur)
      .subscribe(token => localStorage.token = token);
  }

  find(username:string, password:string) : void {
    username = username.trim();
    password = password.trim();
    if(!name && !password) {return;}
    this.explorateurService.findExplorateur({username, password} as Explorateur)
    .subscribe(token => localStorage.token = token);
  }

}
