import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public deconnexion(): void {
    console.log("ici");
    localStorage.removeItem(localStorage.key.toString());
  };
  
}
