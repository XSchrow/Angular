import { Component, OnInit } from '@angular/core';
import { Explorateur } from '../../Explorateur'

@Component({
  selector: 'app-explorateur-form',
  templateUrl: './explorateur-form.component.html',
  styleUrls: ['./explorateur-form.component.css']
})
export class ExplorateurFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  submitted = false;

  onSubmit() { this.submitted = true; }
}
