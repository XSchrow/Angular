import { Component, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { Explorateur } from '../../Explorateur'

@Component({
  selector: 'app-explorateur-form',
  templateUrl: './explorateur-form.component.html',
  styleUrls: ['./explorateur-form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PageExplorateurFormComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit() {
    const parent = (window.parent as any);
    if (parent.setDemoFrameHeight) {
      parent.setDemoFrameHeight();
    }
  }
  submitted = false;

  onSubmit() { this.submitted = true; }
}
