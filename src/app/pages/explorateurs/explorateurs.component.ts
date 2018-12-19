import { Component, OnInit } from '@angular/core';
import { Explorateur } from '../../models/explorateur'
import { ExplorateurService } from '../../services/explorateur/explorateur.service'
import { ErrorService } from '../../services/ErrorHttp/error.service'
import { catchError } from 'rxjs/operators';
import { error } from 'util';


@Component({
  selector: 'app-explorateurs',
  templateUrl: './explorateurs.component.html',
  styleUrls: ['./explorateurs.component.css']
})
export class ExplorateursComponent implements OnInit {
  constructor(private explorateurService: ExplorateurService) { }

  ngOnInit() {
    
  }
  
  

  find(username:string, password:string) : void {
    username = username.trim();
    password = password.trim();
    if(!name && !password) {return;}
    this.explorateurService.findExplorateur({username, password} as Explorateur)
    .subscribe(token => localStorage.Authorization = "Bearer " + token);
  }

}
