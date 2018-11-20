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
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
var UsersComponent = /** @class */ (function () {
    function UsersComponent(modalService) {
        this.modalService = modalService;
        this.page = 1;
        this.perPage = 12;
        this.filters = {
            name: '',
            date: [],
            status: null
        };
        this._userToShow = {};
        this.tab = 'all';
        this.items = [
            { id: 1, name: 'Adam Cotter', date: 1512792908, status: true, photo: '' },
            { id: 2, name: 'Pauline Noble', date: 1516977768, status: false, photo: '' },
            { id: 3, name: 'Sherilyn Metzel', date: 1517042476, status: true, photo: '' },
            { id: 4, name: 'Terrie Boaler', date: 1516439865, status: true, photo: '' },
            { id: 5, name: 'Rutter Pude', date: 1515850922, status: false, photo: '' },
            { id: 6, name: 'Clifford Benjamin', date: 1516898701, status: true, photo: '' },
            { id: 7, name: 'Thedric Romans', date: 1515707885, status: false, photo: '' },
            { id: 8, name: 'Haily Carthew', date: 1517056707, status: true, photo: '' },
            { id: 9, name: 'Dorothea Joicey', date: 1513090469, status: true, photo: '' },
            { id: 10, name: 'Mikaela Pinel', date: 1512892304, status: false, photo: '' },
            { id: 11, name: 'Donnell Farries', date: 1512299369, status: true, photo: '' },
            { id: 12, name: 'Letizia Puncher', date: 1512769349, status: false, photo: '' },
            { id: 13, name: 'Kania Yallowley', date: 1515521487, status: true, photo: '' },
            { id: 14, name: 'Clay De Francesco', date: 1515012234, status: false, photo: '' },
            { id: 15, name: 'Ina Queree', date: 1514458367, status: false, photo: '' },
            { id: 16, name: 'Rasia Awty', date: 1516943842, status: false, photo: '' },
            { id: 17, name: 'Basil Crosham', date: 1512108299, status: true, photo: '' },
            { id: 18, name: 'Alexis Dodworth', date: 1516814115, status: false, photo: '' },
            { id: 19, name: 'Greg Onyon', date: 1517071308, status: true, photo: '' },
            { id: 20, name: 'Barry Carbett', date: 1515450742, status: true, photo: '' },
            { id: 21, name: 'Carlyle Adran', date: 1512498261, status: true, photo: '' },
            { id: 22, name: 'Guillaume Petel', date: 1512742913, status: false, photo: '' },
            { id: 23, name: 'Wendeline Glasner', date: 1513319267, status: false, photo: '' },
            { id: 24, name: 'Sylvia Petrollo', date: 1516080489, status: false, photo: '' },
            { id: 25, name: 'Meade Quoit', date: 1513972299, status: true, photo: '' },
            { id: 26, name: 'Eugine Planke', date: 1515488407, status: false, photo: '' },
            { id: 27, name: 'Thoma Drakeley', date: 1515023660, status: false, photo: '' },
            { id: 28, name: 'Web Margetson', date: 1513557231, status: true, photo: '' },
            { id: 29, name: 'Erskine Stivens', date: 1515233788, status: true, photo: '' },
            { id: 30, name: 'Jedidiah Emmer', date: 1512614842, status: false, photo: '' },
            { id: 31, name: 'Wolfie Drakers', date: 1512381522, status: false, photo: '' },
            { id: 32, name: 'Allie Quiney', date: 1515488202, status: true, photo: '' }
        ];
        this.columns = [
            {
                prop: 'check',
                cellClass: 'text-center align-middle'
            },
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
                prop: 'date',
                label: 'Date',
                cellClass: 'align-middle text-nowrap',
                sortable: true
            },
            {
                prop: 'status',
                label: ' ',
                cellClass: 'text-center align-middle'
            },
            {
                prop: 'action',
                label: 'Action',
                cellClass: 'text-center align-middle'
            }
        ];
    }
    UsersComponent.prototype.ngAfterViewInit = function () {
        var parent = window.parent;
        if (parent.setDemoFrameHeight) {
            parent.setDemoFrameHeight();
        }
    };
    Object.defineProperty(UsersComponent.prototype, "userToShow", {
        get: function () {
            return Object.assign({}, this._userToShow, {
                username: this._userToShow.name
                    .split(' ').reverse()
                    .map(function (str, i) { return i > 0 ? str.charAt(0) : str; })
                    .join('.')
                    .toLowerCase()
            });
        },
        set: function (user) {
            this._userToShow = user;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UsersComponent.prototype, "tabs", {
        get: function () {
            var _this = this;
            var all = this.items.slice();
            if (this.filters.name) {
                all = this.searchItems(all, this.filters.name, ['name']);
            }
            if (this.filters.status !== null) {
                all = all.filter(function (item) { return item.status === _this.filters.status; });
            }
            if (this.filters.date.length == 2) {
                all = all.filter(function (i) {
                    var start = new Date(_this.filters.date[0].getTime()).setHours(0, 0, 0, 0), end = new Date(_this.filters.date[1].getTime()).setHours(23, 59, 59, 999);
                    return i.date * 1000 >= start && i.date * 1000 <= end;
                });
            }
            return {
                all: all,
                active: all.filter(function (i) { return i.status; }),
                selected: all.filter(function (i) { return i.selected; })
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UsersComponent.prototype, "minMaxDates", {
        get: function () {
            var min = Number.POSITIVE_INFINITY, max = 0;
            this.items.map(function (item) {
                if (item.date < min) {
                    min = item.date;
                }
                if (item.date > max) {
                    max = item.date;
                }
            });
            return [min, max];
        },
        enumerable: true,
        configurable: true
    });
    UsersComponent.prototype.toggleSelected = function (item) {
        if (item) {
            item.selected = !item.selected;
        }
    };
    UsersComponent.prototype.selectAll = function (value) {
        this.tabs[this.tab].map(function (i) { return i.selected = value; });
    };
    UsersComponent.prototype.toggleStatus = function (item) {
        if (item) {
            item.status = !item.status;
        }
    };
    UsersComponent.prototype.openModal = function (modal, size) {
        if (size === void 0) { size = 'lg'; }
        this.modalService.open(modal, { size: size });
    };
    // filters the given array of objects with a provided text and fields
    UsersComponent.prototype.searchItems = function (array, query, fields) {
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
    UsersComponent = __decorate([
        Component({
            selector: 'app-users',
            templateUrl: './users.component.html',
            styleUrls: ['./users.component.css'],
            encapsulation: ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [NgbModal])
    ], UsersComponent);
    return UsersComponent;
}());
export { UsersComponent };
//# sourceMappingURL=users.component.js.map