import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { InoxLocationService } from '../../services/inoxLocation/inox-location.service'

@Component({
  selector: 'app-inox-location',
  templateUrl: './inox-location.component.html',
  styleUrls: ['./inox-location.component.css']
})
export class InoxLocationComponent implements OnInit {

  constructor(private inoxLocationService: InoxLocationService) { 
   /* console.log(this.Inox = this.getInox(localStorage.Authorization));
    this.Inox = this.getInox(localStorage.Authorization);*/
  }

  ngOnInit() {
  }
  public Inox: number;
  public getInox(token: string) {
    return this.inoxLocationService.getInox(token).subscribe(Inox => this.Inox = 2);
  }
}
