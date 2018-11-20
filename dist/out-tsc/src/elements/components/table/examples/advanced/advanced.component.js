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
var TableAdvancedComponent = /** @class */ (function () {
    function TableAdvancedComponent() {
        this.filters = {
            search: '',
            actives: false
        };
        this.tab = 'all';
        this.items = [
            { id: 1, name: 'Adam Cotter', date: 1512792908, status: true, bookmark: false },
            { id: 2, name: 'Pauline Noble', date: 1516977768, status: false, bookmark: true, selected: true },
            { id: 3, name: 'Sherilyn Metzel', date: 1517042476, status: true, bookmark: false, selected: true },
            { id: 4, name: 'Terrie Boaler', date: 1516439865, status: true, bookmark: false },
            { id: 5, name: 'Rutter Pude', date: 1515850922, status: false, bookmark: true },
            { id: 6, name: 'Clifford Benjamin', date: 1516898701, status: true, bookmark: false },
            { id: 7, name: 'Thedric Romans', date: 1515707885, status: false, bookmark: true },
            { id: 8, name: 'Haily Carthew', date: 1517056707, status: true, bookmark: false },
            { id: 9, name: 'Dorothea Joicey', date: 1513090469, status: true, bookmark: false },
            { id: 10, name: 'Mikaela Pinel', date: 1512892304, status: false, bookmark: true },
            { id: 11, name: 'Donnell Farries', date: 1512299369, status: true, bookmark: false },
            { id: 12, name: 'Letizia Puncher', date: 1512769349, status: false, bookmark: true },
            { id: 13, name: 'Kania Yallowley', date: 1515521487, status: true, bookmark: false },
            { id: 14, name: 'Clay De Francesco', date: 1515012234, status: false, bookmark: true },
            { id: 15, name: 'Ina Queree', date: 1514458367, status: false, bookmark: true },
            { id: 16, name: 'Rasia Awty', date: 1516943842, status: false, bookmark: true },
            { id: 17, name: 'Basil Crosham', date: 1512108299, status: true, bookmark: false },
            { id: 18, name: 'Alexis Dodworth', date: 1516814115, status: false, bookmark: true },
            { id: 19, name: 'Greg Onyon', date: 1517071308, status: true, bookmark: false },
            { id: 20, name: 'Barry Carbett', date: 1515450742, status: true, bookmark: false },
            { id: 21, name: 'Carlyle Adran', date: 1512498261, status: true, bookmark: false },
            { id: 22, name: 'Guillaume Petel', date: 1512742913, status: false, bookmark: true },
            { id: 23, name: 'Wendeline Glasner', date: 1513319267, status: false, bookmark: true },
            { id: 24, name: 'Sylvia Petrollo', date: 1516080489, status: false, bookmark: true },
            { id: 25, name: 'Meade Quoit', date: 1513972299, status: true, bookmark: false },
            { id: 26, name: 'Eugine Planke', date: 1515488407, status: false, bookmark: true },
            { id: 27, name: 'Thoma Drakeley', date: 1515023660, status: false, bookmark: true },
            { id: 28, name: 'Web Margetson', date: 1513557231, status: true, bookmark: false },
            { id: 29, name: 'Erskine Stivens', date: 1515233788, status: true, bookmark: false },
            { id: 30, name: 'Jedidiah Emmer', date: 1512614842, status: false, bookmark: true },
            { id: 31, name: 'Wolfie Drakers', date: 1512381522, status: false, bookmark: true },
            { id: 32, name: 'Allie Quiney', date: 1515488202, status: true, bookmark: false }
        ];
        this.columns = [
            {
                prop: 'check',
                cellClass: 'text-center'
            },
            {
                prop: 'name',
                label: 'Name',
                headerClass: 'max-width',
                cellClass: 'text-nowrap'
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
            },
            {
                prop: 'bookmark',
                label: ' ',
                cellClass: 'text-center'
            }
        ];
    }
    TableAdvancedComponent.prototype.ngOnInit = function () { };
    Object.defineProperty(TableAdvancedComponent.prototype, "tabs", {
        get: function () {
            var all = this.items.slice();
            if (this.filters.search) {
                all = this.searchItems(all, this.filters.search, ['name']);
            }
            if (this.filters.actives) {
                all = all.filter(function (item) { return item.status; });
            }
            return {
                all: all,
                bookmarks: all.filter(function (i) { return i.bookmark; }),
                selected: all.filter(function (i) { return i.selected; })
            };
        },
        enumerable: true,
        configurable: true
    });
    TableAdvancedComponent.prototype.toggleSelected = function (item) {
        if (item) {
            item.selected = !item.selected;
        }
    };
    TableAdvancedComponent.prototype.selectAll = function (value) {
        this.tabs[this.tab].map(function (i) { return i.selected = value; });
    };
    TableAdvancedComponent.prototype.toggleBookmark = function (item) {
        if (item) {
            item.bookmark = !item.bookmark;
        }
    };
    // filters the given array of objects with a provided text and fields
    TableAdvancedComponent.prototype.searchItems = function (array, query, fields) {
        if (fields === void 0) { fields = []; }
        if (!array.length || !String(query)) {
            return array;
        }
        return array.filter(function (item) {
            var found = false;
            for (var key in item) {
                if (fields.length && fields.indexOf(key) < 0) {
                    continue;
                }
                if (typeof item[key] === 'string' &&
                    item[key].toLowerCase().indexOf(query.toLowerCase()) >= 0) {
                    found = true;
                }
            }
            return found;
        });
    };
    TableAdvancedComponent.prototype.clearSearch = function () {
        this.filters.search = '';
    };
    TableAdvancedComponent = __decorate([
        Component({
            selector: 'table-advanced',
            encapsulation: ViewEncapsulation.None,
            template: "\n  <div class=\"card\">\n    <div class=\"card-body\">\n      <div class=\"e-advanced-table\">\n        <div class=\"d-flex mb-3\">\n          <div class=\"mr-3\" style=\"flex-grow: 1;\">\n            <form class=\"form-inline\">\n              <div class=\"input-with-ico w-100\">\n                <i class=\"input-ico fa fa-fw fa-search\"></i>\n                <div class=\"input-group flex-nowrap w-100\">\n                  <input class=\"form-control w-100\" name=\"search\" type=\"search\" [(ngModel)]=\"filters.search\" placeholder=\"Search\">\n                  <span *ngIf=\"filters.search.length\" class=\"input-group-append\">\n                    <button class=\"btn btn-secondary\" type=\"button\" (click)=\"clearSearch()\">\n                      <i class=\"fa fa-times\"></i>\n                    </button>\n                  </span>\n                </div>\n              </div>\n            </form>\n          </div>\n          <div>\n            <div class=\"btn-group\">\n              <button type=\"button\" class=\"btn btn-success\">\n                <span>\n                  <i class=\"fa fa-plus\"></i>\n                  <span class=\"d-none d-md-inline-block ml-1\">Create</span>\n                </span>\n              </button>\n              <div class=\"btn-group\" ngbDropdown placement=\"bottom-right\">\n                <button class=\"btn btn-success\" ngbDropdownToggle></button>\n                <div class=\"dropdown-menu\" ngbDropdownMenu>\n                  <h6 class=\"dropdown-header\">With selected:</h6>\n                  <a class=\"dropdown-item\" href=\"\" (click)=\"$event.preventDefault()\">Remove</a>\n                  <div class=\"dropdown-divider\"></div>\n                  <h6 class=\"dropdown-header\">Toggle:</h6>\n                  <a class=\"dropdown-item\" href=\"\" (click)=\"$event.preventDefault()\">Status</a>\n                  <a class=\"dropdown-item\" href=\"\" (click)=\"$event.preventDefault()\">Bookmark</a>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row flex-lg-nowrap\">\n          <div class=\"col\">\n            <e-navlist  activeBold={{true}}>\n              <ul class=\"nav\">\n                <li class=\"nav-item\" [class.active]=\"tab == 'all'\">\n                  <a href=\"\" class=\"nav-link text-nowrap\" (click)=\"$event.preventDefault(); tab = 'all'\">\n                    <span>All</span>\n                    <small>/ {{ tabs.all.length }}</small>\n                  </a>\n                </li>\n                <li class=\"nav-item\" [class.active]=\"tab == 'bookmarks'\">\n                  <a href=\"\" class=\"nav-link text-nowrap\" (click)=\"$event.preventDefault(); tab = 'bookmarks'\">\n                    <span>Bookmarks</span>\n                    <small>/ {{ tabs.bookmarks.length }}</small>\n                  </a>\n                </li>\n                <li class=\"nav-item\" [class.active]=\"tab == 'selected'\">\n                  <a href=\"\" class=\"nav-link text-nowrap\" (click)=\"$event.preventDefault(); tab = 'selected'\">\n                    <span>Selected</span>\n                    <small>/ {{ tabs.selected.length }}</small>\n                  </a>\n                </li>\n              </ul>\n            </e-navlist>\n            <hr class=\"mb-3\">\n            <div class=\"px-2\">\n              <div class=\"custom-control custom-checkbox m-0\">\n                <input type=\"checkbox\" class=\"custom-control-input\" id=\"actives-check\" name=\"actives\" [(ngModel)]=\"filters.actives\">\n                <label class=\"custom-control-label\" for=\"actives-check\">Actives Only</label>\n              </div>\n            </div>\n            <hr class=\"my-3 d-md-none\">\n          </div>\n          <div class=\"col-12 col-md-9\">\n            <e-table\n              [items]=\"tabs[tab]\"\n              [columns]=\"columns\"\n              [pagination]=\"true\"\n              [limit]=\"5\"\n              [tableClass]=\"'table table-bordered'\"\n              [paginationClass]=\"'pagination pagination-sm pagination-separated justify-content-center mb-0'\"\n              [responsive]=\"true\">\n              <ng-template head-template prop=\"check\">\n                <div class=\"custom-control custom-control-inline custom-checkbox custom-control-nameless m-0\">\n                  <input\n                    type=\"checkbox\"\n                    class=\"custom-control-input\"\n                    name=\"all-items\"\n                    id=\"all-items\"\n                    [checked]=\"tabs.selected.length === tabs.all.length\"\n                    (change)=\"selectAll($event.target.checked)\" />\n                  <label class=\"custom-control-label\" for=\"all-items\"></label>\n                </div>\n              </ng-template>\n              <ng-template cell-template let-row=\"row\" let-index=\"index\" prop=\"check\">\n                <div class=\"custom-control custom-control-inline custom-checkbox custom-control-nameless m-0\">\n                  <input\n                    type=\"checkbox\"\n                    class=\"custom-control-input\"\n                    [id]=\"'item-' + index\"\n                    [(ngModel)]=\"row.selected\" />\n                  <label class=\"custom-control-label\" [for]=\"'item-' + index\"></label>\n                </div>\n              </ng-template>\n              <ng-template cell-template let-row prop=\"date\">{{ row.date * 1000 | date: 'mediumDate' }}</ng-template>\n              <ng-template cell-template let-row prop=\"status\">\n                <span [ngClass]=\"{'badge': true, 'badge-light': !row.status, 'badge-secondary': row.status}\">{{ row.status }}</span>\n              </ng-template>\n              <ng-template cell-template let-row prop=\"bookmark\">\n                <span class=\"e-advanced-table__bookmark\" [class.active]=\"row.bookmark\">\n                <i\n                  class=\"fa fa-bookmark fa-fw\"\n                  (click)=\"toggleBookmark(row)\"></i>\n                </span>\n              </ng-template>\n            </e-table>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  ",
            styleUrls: ['./advanced.css']
        }),
        __metadata("design:paramtypes", [])
    ], TableAdvancedComponent);
    return TableAdvancedComponent;
}());
export { TableAdvancedComponent };
//# sourceMappingURL=advanced.component.js.map