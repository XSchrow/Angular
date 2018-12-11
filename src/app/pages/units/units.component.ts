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
  public unitToShow: Unit;
  public units: Observable<Unit[]>;
  constructor(private modalService: NgbModal, private unitService: UnitService) { }

  ngAfterViewInit() {
    this.units = this.unitService.getAllUnit(localStorage.Authorization);
    const parent = (window.parent as any);
    if (parent.setDemoFrameHeight) {
      parent.setDemoFrameHeight();
    }
  }

  public openModal(unit: Unit, modal, size: 'sm' | 'lg' = 'lg'): void {
    this.unitToShow = unit;

    if (this.unitToShow) {
      this.modalService.open(modal, { size: size });
    }
  }




}
