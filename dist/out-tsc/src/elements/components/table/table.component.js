var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Directive, ContentChildren, QueryList, TemplateRef, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
var HeadTemplateDirective = /** @class */ (function () {
    function HeadTemplateDirective(template) {
        this.template = template;
    }
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], HeadTemplateDirective.prototype, "prop", void 0);
    HeadTemplateDirective = __decorate([
        Directive({ selector: '[head-template]' }),
        __metadata("design:paramtypes", [TemplateRef])
    ], HeadTemplateDirective);
    return HeadTemplateDirective;
}());
export { HeadTemplateDirective };
var CellTemplateDirective = /** @class */ (function () {
    function CellTemplateDirective(template) {
        this.template = template;
    }
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], CellTemplateDirective.prototype, "prop", void 0);
    CellTemplateDirective = __decorate([
        Directive({ selector: '[cell-template]' }),
        __metadata("design:paramtypes", [TemplateRef])
    ], CellTemplateDirective);
    return CellTemplateDirective;
}());
export { CellTemplateDirective };
var ETableComponent = /** @class */ (function () {
    function ETableComponent() {
        this.page = 1;
        this.pagination = false;
        this.paginationClass = '';
        this.tableClass = 'table';
        this.responsive = false;
        this.pageChange = new EventEmitter();
        this.sortOrders = {};
    }
    ETableComponent.prototype.getHeaderClass = function (column) {
        var headerClass = column.headerClass || '';
        if (column.sortable) {
            headerClass += ' sortable';
            if (this.sortKey === column.prop) {
                headerClass += this.sortOrders[column.prop] === -1 ? ' sortable--desc' : ' sortable--asc';
            }
        }
        return headerClass.trim();
    };
    ETableComponent.prototype.getHeadTemplate = function (prop) {
        return this.headTemplates.find(function (i) { return i.prop === prop; });
    };
    ETableComponent.prototype.getCellTemplate = function (prop) {
        return this.cellTemplates.find(function (i) { return i.prop === prop; });
    };
    ETableComponent.prototype.sortBy = function (column) {
        if (column.sortable) {
            var sortOrder = this.sortOrders[this.sortKey];
            this.sortKey = column.prop;
            this.sortOrders[this.sortKey] = sortOrder ? sortOrder * -1 : 1;
        }
    };
    Object.defineProperty(ETableComponent.prototype, "sortedItems", {
        get: function () {
            var sorted = this.items, sortKey = this.sortKey, sortOrder = this.sortOrders[this.sortKey] || 1;
            if (sortKey) {
                sorted = this.items.slice().sort(function (a, b) {
                    a = a[sortKey];
                    b = b[sortKey];
                    return (a === b ? 0 : a > b ? 1 : -1) * sortOrder;
                });
            }
            return sorted;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ETableComponent.prototype, "paginatedItems", {
        get: function () {
            var paginated = this.sortedItems, page = this.page, perPage = this.limit || this.sortedItems.length, start = (page - 1) * perPage, end = start + perPage;
            if (this.pagination) {
                paginated = paginated.slice(start, end);
            }
            return paginated;
        },
        enumerable: true,
        configurable: true
    });
    ETableComponent.prototype.onPageChange = function (value) {
        this.pageChange.emit(value);
    };
    ETableComponent.prototype.ngOnInit = function () { };
    ETableComponent.prototype.ngAfterContentInit = function () { };
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], ETableComponent.prototype, "items", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ETableComponent.prototype, "columns", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], ETableComponent.prototype, "limit", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], ETableComponent.prototype, "page", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], ETableComponent.prototype, "pagination", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], ETableComponent.prototype, "paginationClass", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], ETableComponent.prototype, "tableClass", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], ETableComponent.prototype, "responsive", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], ETableComponent.prototype, "pageChange", void 0);
    __decorate([
        ContentChildren(HeadTemplateDirective),
        __metadata("design:type", QueryList)
    ], ETableComponent.prototype, "headTemplates", void 0);
    __decorate([
        ContentChildren(CellTemplateDirective),
        __metadata("design:type", QueryList)
    ], ETableComponent.prototype, "cellTemplates", void 0);
    ETableComponent = __decorate([
        Component({
            selector: 'e-table',
            templateUrl: './table.component.html',
            styleUrls: ['./table.component.css'],
            encapsulation: ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [])
    ], ETableComponent);
    return ETableComponent;
}());
export { ETableComponent };
var ETablePaginationComponent = /** @class */ (function () {
    function ETablePaginationComponent() {
        this.page = 1;
        this.perPage = 1;
        this.total = 1;
        this.pagesCount = 5;
        this.class = 'pagination';
        this.pageChange = new EventEmitter();
    }
    ETablePaginationComponent.prototype.ngOnInit = function () { };
    ETablePaginationComponent.prototype.isValidPage = function (page) {
        return page > 0 && page <= this.pagesTotal;
    };
    Object.defineProperty(ETablePaginationComponent.prototype, "pagesTotal", {
        get: function () {
            return Math.ceil(this.total / this.perPage);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ETablePaginationComponent.prototype, "pages", {
        get: function () {
            var pages = [this.page], pagesCount = Math.min(this.pagesCount, this.pagesTotal), i = 1;
            while (pages.length < pagesCount) {
                if (this.isValidPage(this.page + i)) {
                    pages.push(this.page + i);
                }
                if (this.isValidPage(this.page - i)) {
                    pages.push(this.page - i);
                }
                i++;
            }
            return pages.sort(function (a, b) { return a === b ? 0 : a > b ? 1 : -1; });
        },
        enumerable: true,
        configurable: true
    });
    ETablePaginationComponent.prototype.setPage = function (page) {
        if (page) {
            this.pageChange.emit(page);
        }
    };
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], ETablePaginationComponent.prototype, "page", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], ETablePaginationComponent.prototype, "perPage", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], ETablePaginationComponent.prototype, "total", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], ETablePaginationComponent.prototype, "pagesCount", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], ETablePaginationComponent.prototype, "class", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], ETablePaginationComponent.prototype, "pageChange", void 0);
    ETablePaginationComponent = __decorate([
        Component({
            selector: 'e-table-pagination',
            template: "\n    <ul [attr.class]=\"class\">\n      <li class=\"page-item\" [class.disabled]=\"page === 1\">\n        <a href=\"\" class=\"page-link\" (click)=\"$event.preventDefault(); setPage(1);\">\u00AB</a>\n      </li>\n      <li class=\"page-item\" [class.disabled]=\"!isValidPage(page - 1)\">\n        <a href=\"\" class=\"page-link\" (click)=\"$event.preventDefault(); setPage(page - 1);\">\u2039</a>\n      </li>\n      <li\n        *ngFor=\"let p of pages\"\n        class=\"page-item\"\n        [class.active]=\"p === page\">\n        <a href=\"\" class=\"page-link\" (click)=\"$event.preventDefault(); setPage(p);\">{{ p }}</a>\n      </li>\n      <li class=\"page-item\" [class.disabled]=\"!isValidPage(page + 1)\">\n        <a href=\"\" class=\"page-link\" (click)=\"$event.preventDefault(); setPage(page + 1);\">\u203A</a>\n      </li>\n      <li class=\"page-item\" [class.disabled]=\"page >= pagesTotal\">\n        <a href=\"\" class=\"page-link\" (click)=\"$event.preventDefault(); setPage(pagesTotal);\">\u00BB</a>\n      </li>\n    </ul>\n  ",
            styleUrls: [],
            encapsulation: ViewEncapsulation.None,
            host: {
                class: 'bs-table__pagination'
            }
        }),
        __metadata("design:paramtypes", [])
    ], ETablePaginationComponent);
    return ETablePaginationComponent;
}());
export { ETablePaginationComponent };
//# sourceMappingURL=table.component.js.map