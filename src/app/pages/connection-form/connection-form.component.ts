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
@Component({
  selector: 'app-connection-form',
  templateUrl: './connection-form.component.html',
  styleUrls: ['./connection-form.component.css']
})
export class ConnectionFormComponent implements OnInit {
  submitted = false;
  // Variable pour indiquer un erreur à l'utilisateur
  errorMsg :string;
  constructor(private router: Router,private explorateurService: ExplorateurService) { }

  ngOnInit() {
  }
  onSubmit() { this.submitted = true;}

  // Fonction qui va chercher dans les comptes en Bd 
  find(username:string, password:string) : void {
    username = username.trim();
    password = password.trim();
    // S'il n'y a pas d'username ou de password on retourne rien
    if(!username && !password) {return;}
    // On appelle le service de l'explorateur pour trouver un explorateur en BD
    this.explorateurService.findExplorateur({username, password} as Explorateur)
    .subscribe(
      // On récupère le token et on l'envoie dans la page d'accueil
      token => {
        localStorage.Authorization = "Bearer " + token;
        this.router.navigate(['pages/overview']);
      },
      // S'il y a un erreur, on indique à l'utilisateur que le username ou le password n'est pas correct
      error => {
        this.errorMsg = "Username or password is incorrect";
      }
      );
  }

}
