import { Component, AfterViewInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PageConnexionComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit() {
    const parent = (window.parent as any);
    if (parent.setDemoFrameHeight) {
      parent.setDemoFrameHeight();
    }
  }

}
