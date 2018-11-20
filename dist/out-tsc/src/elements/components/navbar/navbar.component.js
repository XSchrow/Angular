var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, ViewEncapsulation } from '@angular/core';
var ENavbarComponent = /** @class */ (function () {
    function ENavbarComponent() {
        this.title = '';
        this.navInCenter = false;
        this.brandInCenter = false;
        this.class = '';
        this.isCollapsed = true;
        this.classNames = {};
    }
    ENavbarComponent.prototype.setClassNames = function () {
        this.classNames = this.class.split(' ').reduce(function (result, className) {
            if (className.trim()) {
                result[className.trim()] = true;
            }
            return result;
        }, {});
        this.classNames = Object.assign({}, this.classNames, {
            'e-navbar--nav-in-center': this.navInCenter,
            'e-navbar--brand-in-center': this.brandInCenter
        });
    };
    ENavbarComponent.prototype.ngOnInit = function () {
        this.setClassNames();
    };
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], ENavbarComponent.prototype, "title", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], ENavbarComponent.prototype, "navInCenter", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], ENavbarComponent.prototype, "brandInCenter", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], ENavbarComponent.prototype, "class", void 0);
    ENavbarComponent = __decorate([
        Component({
            selector: 'e-navbar',
            templateUrl: './navbar.component.html',
            styleUrls: ['./navbar.component.css'],
            encapsulation: ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [])
    ], ENavbarComponent);
    return ENavbarComponent;
}());
export { ENavbarComponent };
//# sourceMappingURL=navbar.component.js.map