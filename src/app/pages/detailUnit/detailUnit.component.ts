import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './detailUnit.component.html',
  styleUrls: ['./detailUnit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DetailUnitComponent implements OnInit {

  constructor() { }

  ngOnInit() { 
  }

  @Input() unit;

}
