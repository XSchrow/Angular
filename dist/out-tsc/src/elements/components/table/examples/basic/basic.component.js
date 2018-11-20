var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewEncapsulation } from '@angular/core';
var TableBasicComponent = /** @class */ (function () {
    function TableBasicComponent() {
        this.page = 1;
        this.limit = 3;
        this.items = [
            { name: 'Adam Cotter', date: 1512792908, status: true },
            { name: 'Pauline Noble', date: 1516977768, status: false },
            { name: 'Sherilyn Metzel', date: 1517042476, status: true },
            { name: 'Terrie Boaler', date: 1516439865, status: true },
            { name: 'Rutter Pude', date: 1515850922, status: false },
            { name: 'Clifford Benjamin', date: 1516898701, status: true },
            { name: 'Thedric Romans', date: 1515707885, status: false },
            { name: 'Haily Carthew', date: 1517056707, status: true },
            { name: 'Dorothea Joicey', date: 1513090469, status: true },
            { name: 'Mikaela Pinel', date: 1512892304, status: false },
            { name: 'Donnell Farries', date: 1512299369, status: true },
            { name: 'Letizia Puncher', date: 1512769349, status: false },
            { name: 'Kania Yallowley', date: 1515521487, status: true },
            { name: 'Clay De Francesco', date: 1515012234, status: false },
            { name: 'Ina Queree', date: 1514458367, status: false },
            { name: 'Rasia Awty', date: 1516943842, status: false },
            { name: 'Basil Crosham', date: 1512108299, status: true },
            { name: 'Alexis Dodworth', date: 1516814115, status: false },
            { name: 'Greg Onyon', date: 1517071308, status: true },
            { name: 'Barry Carbett', date: 1515450742, status: true },
            { name: 'Carlyle Adran', date: 1512498261, status: true },
            { name: 'Guillaume Petel', date: 1512742913, status: false },
            { name: 'Wendeline Glasner', date: 1513319267, status: false },
            { name: 'Sylvia Petrollo', date: 1516080489, status: false },
            { name: 'Meade Quoit', date: 1513972299, status: true },
            { name: 'Eugine Planke', date: 1515488407, status: false },
            { name: 'Thoma Drakeley', date: 1515023660, status: false },
            { name: 'Web Margetson', date: 1513557231, status: true },
            { name: 'Erskine Stivens', date: 1515233788, status: true },
            { name: 'Jedidiah Emmer', date: 1512614842, status: false },
            { name: 'Wolfie Drakers', date: 1512381522, status: false },
            { name: 'Allie Quiney', date: 1515488202, status: true }
        ];
        this.columns = [
            {
                prop: 'index',
                label: '#',
                headerClass: 'text-center',
                cellClass: 'text-center'
            },
            {
                prop: 'name',
                label: 'Name',
                headerClass: 'max-width',
                cellClass: 'text-nowrap',
                sortable: true
            },
            {
                prop: 'date',
                label: 'Date',
                cellClass: 'text-nowrap',
                sortable: true
            },
            {
                prop: 'status',
                label: 'Status',
                cellClass: 'text-center'
            }
        ];
    }
    Object.defineProperty(TableBasicComponent.prototype, "tableStatus", {
        get: function () {
            var itemsTotal = this.items.length, itemsFrom = (this.limit * (this.page - 1)) + 1, itemsTo = Math.min(itemsFrom + this.limit - 1, itemsTotal);
            return itemsFrom + " - " + itemsTo + " of " + itemsTotal;
        },
        enumerable: true,
        configurable: true
    });
    TableBasicComponent.prototype.indexOf = function (row) {
        return this.items.indexOf(row) + 1;
    };
    TableBasicComponent.prototype.ngOnInit = function () { };
    TableBasicComponent = __decorate([
        Component({
            selector: 'table-basic',
            encapsulation: ViewEncapsulation.None,
            template: "\n    <e-panel [title]=\"'New Users'\" [subtitle]=\"'For the week'\">\n      <div actions>\n        <small class=\"text-muted\">{{ tableStatus }}</small>\n      </div>\n      <div class=\"mt-3\">\n        <e-table\n          [items]=\"items\"\n          [columns]=\"columns\"\n          [pagination]=\"true\"\n          [(page)]=\"page\"\n          [limit]=\"limit\"\n          [tableClass]=\"'table table-bordered'\"\n          [paginationClass]=\"'pagination pagination-sm pagination-separated justify-content-center mb-0'\"\n          [responsive]=\"true\">\n          <ng-template cell-template let-row prop=\"index\">{{ indexOf(row) }}</ng-template>\n          <ng-template cell-template let-row prop=\"date\">{{ row.date * 1000 | date: 'mediumDate' }}</ng-template>\n          <ng-template cell-template let-row prop=\"status\">\n            <span [ngClass]=\"{'badge': true, 'badge-light': row.status, 'badge-secondary': !row.status}\">{{ row.status }}</span>\n          </ng-template>\n        </e-table>\n      </div>\n    </e-panel>\n  "
        }),
        __metadata("design:paramtypes", [])
    ], TableBasicComponent);
    return TableBasicComponent;
}());
export { TableBasicComponent };
//# sourceMappingURL=basic.component.js.map