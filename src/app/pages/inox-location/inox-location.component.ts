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
  // On veut recevoir un observable contenant la location et les inox
  public observable: Observable<{location: string, inox: number}>;

  constructor(private inoxLocationService: InoxLocationService) { }

  ngOnInit() {
    // On récupère la location et les inoox avec un get dans notre service
    this.observable = this.inoxLocationService.get(localStorage.Authorization)
    /*this.inoxLocationService.get(localStorage.Authorization)
      .subscribe(value => this.data = value);*/
  }
}
