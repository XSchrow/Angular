import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { InoxLocationService } from '../../services/inoxLocation/inox-location.service'

@Component({
  selector: 'app-inox-location',
  templateUrl: './inox-location.component.html',
  styleUrls: ['./inox-location.component.css']
})
export class InoxLocationComponent implements OnInit {
  //public data: {location: string, inox: number};
  public observable: Observable<{location: string, inox: number}>;

  constructor(private inoxLocationService: InoxLocationService) { }

  ngOnInit() {
    this.observable = this.inoxLocationService.get(localStorage.Authorization)
    /*this.inoxLocationService.get(localStorage.Authorization)
      .subscribe(value => this.data = value);*/
  }
}
