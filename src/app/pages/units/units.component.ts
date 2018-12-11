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

  public units: Observable<Unit[]>
  constructor(private modalService: NgbModal, private unitService: UnitService) { }

  ngAfterViewInit() {
    this.units = this.unitService.getAllUnit(localStorage.Authorization);
    const parent = (window.parent as any);
    if (parent.setDemoFrameHeight) {
      parent.setDemoFrameHeight();
    }
  }

  public page: number = 1;
  public perPage: number = 12;

  public filters: any = {
    name: '',
    date: [],
    status: null
  }

  public _unitToShow: any = {};
  public set userToShow(user) {
    this._unitToShow = user;
  }
  public get userToShow() {
    return Object.assign({}, this._unitToShow, {
      username: this._unitToShow.name
        .split(' ').reverse()
        .map((str, i) => i > 0 ? str.charAt(0) : str)
        .join('.')
        .toLowerCase()
    });
  }

  public tab: string = 'all';

  public get tabs() {
    let all = this.items.slice()

    if (this.filters.name) {
      all = this.searchItems(all, this.filters.name, ['name'])
    }
    if (this.filters.status !== null) {
      all = all.filter(item => item.status === this.filters.status)
    }
    if (this.filters.date.length == 2) {
      all = all.filter(i => {
        let start = new Date(this.filters.date[0].getTime()).setHours(0,0,0,0),
            end = new Date(this.filters.date[1].getTime()).setHours(23,59,59,999);
        return i.date * 1000 >= start && i.date * 1000 <= end;
      })
    }

    return {
      all,
      active: all.filter(i => i.status),
      selected: all.filter(i => i.selected)
    }
  }

  public get minMaxDates() {
    let min = Number.POSITIVE_INFINITY,
        max = 0;
    this.items.map(item => {
      if (item.date < min) {
        min = item.date
      }
      if (item.date > max) {
        max = item.date
      }
    })
    return [min, max];
  }

  public toggleSelected(item: any): void {
    if (item) {
      item.selected = !item.selected;
    }
  }

  public selectAll(value: boolean): void {
    this.tabs[this.tab].map((i) => i.selected = value)
  }

  public toggleStatus(item: any): void {
    if (item) {
      item.status = !item.status;
    }
  }

  public openModal(modal, size: 'sm' | 'lg' = 'lg'): void {
    this.modalService.open(modal, { size: size })
  }

  // filters the given array of objects with a provided text and fields
  public searchItems(array, query, fields = []): object[] {
    if (!array.length || !String(query)) {
      return array
    }

    return array.filter(item => {
      let found = false;
      for (let key in item) {
        if (fields.length && fields.indexOf(key) < 0) {
          continue
        }
        if (typeof item[key] === 'string' &&
            item[key].toLowerCase().indexOf(query.toLowerCase()) >= 0) {
          found = true;
        }
      }
      return found;
    })
  }

  public items: any = [
    { id: 1,  name: '',        date: 1512792908, status: true,  photo: '' },

  ]

  public columns = [
    {
      prop: 'photo',
      label: 'Photo',
      headerClass: 'text-center',
      cellClass: 'align-middle text-center'
    },
    {
      prop: 'name',
      label: 'Name',
      headerClass: 'max-width',
      cellClass: 'align-middle text-nowrap'
    },
    {
      prop: 'life',
      label: 'Life',
      cellClass: 'align-middle text-nowrap',
    },
    {
      prop: 'speed',
      label: 'Speed',
      cellClass: 'text-center align-middle'
    },
    {
      prop: 'action',
      label: 'Action',
      cellClass: 'text-center align-middle'
    }
  ]

}
