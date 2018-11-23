import { Component, OnInit } from '@angular/core';
import { Explorateur } from '../../models/explorateur';
import { ExplorateurService } from '../../services/explorateur.service'


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
  
  add(name:string, email:string) : void {
    name = name.trim();
    email = email.trim();
    if(!name && !email) {return;}
    this.explorateurService.addExplorateur({name, email} as Explorateur)
      .subscribe(explorateur => {
        this.explorateurs.push(explorateur);
      });
  }

}
