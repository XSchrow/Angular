import { Component, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { Unit } from '../../models/unit'
import { Observable } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UnitService } from '../../services/unit/unit.service'

@Component({
  selector: 'app-units',
  templateUrl: './units.component.html',
  styleUrls: ['./units.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PageUnitComponent implements AfterViewInit {
  // On veut avoir un seul unit à montrer
  public unitToShow: Unit;

  // Variable pour stocker la liste des units dans un observable de tableau
  public units: Observable<Unit[]>;
  constructor(private modalService: NgbModal, private unitService: UnitService) { }

  ngAfterViewInit() {
    this.units = this.unitService.getAllUnit(localStorage.Authorization);
    const parent = (window.parent as any);
    if (parent.setDemoFrameHeight) {
      parent.setDemoFrameHeight();
    }
  }

  // Fonction pour ouvrir un fênetre modal du détail d'un seul unit
  public openModal(unit: Unit, modal, size: 'sm' | 'lg' = 'lg'): void {
    this.unitToShow = unit;
    // Si on possède un unit a montrer, alors on ouvre un model avec ses infos
    if (this.unitToShow) {
      this.modalService.open(modal, { size: size });
    }
  }
}
