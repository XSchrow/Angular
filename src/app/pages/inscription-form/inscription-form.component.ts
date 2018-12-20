import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Explorateur } from '../../models/explorateur';
import { ExplorateurService } from '../../services/explorateur/explorateur.service';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from '@angular/forms';
import { error } from 'util';

@Component({
  selector: 'app-inscription-form',
  templateUrl: './inscription-form.component.html',
  styleUrls: ['./inscription-form.component.css']
})
export class InscriptionFormComponent implements OnInit {
  submitted = false;
  constructor( private router: Router, private explorateurService: ExplorateurService) { }
  ngOnInit() {

  }
  public rune : any;
  public unit : any;
  // On se créé un modèle pour notre formulaire
  model = new Explorateur('','','', this.rune, this.unit )
  onSubmit() { this.submitted = true;}
  // Fonction qui ajoute un explorateur en BD
  add(username: string, email: string, password: string) : void {
    username = username.trim();
    email = email.trim();
    password = password.trim();
    // Si le username, le email ou le password n'est pas entrer, alors on retourne rien
    if(!username || !email || !password) {return;}

    // On appelle notre service de l'explorateur pour ajouter l'explorateur en BD
    this.explorateurService.addExplorateur({username, email, password} as Explorateur)
    // On garde le token et on le retourne à la page d'accueil
    .subscribe(
      token => {
        localStorage.Authorization = "Bearer " + token;
        this.router.navigate(['pages/overview']);
      }
    );
  }
}
