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
var ENavlistComponent = /** @class */ (function () {
    function ENavlistComponent() {
        this.activeBg = false;
        this.activeBold = false;
    }
    Object.defineProperty(ENavlistComponent.prototype, "classNames", {
        get: function () {
            return {
                'e-navlist--active-bg': this.activeBg,
                'e-navlist--active-bold': this.activeBold
            };
        },
        enumerable: true,
        configurable: true
    });
    ENavlistComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], ENavlistComponent.prototype, "activeBg", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], ENavlistComponent.prototype, "activeBold", void 0);
    ENavlistComponent = __decorate([
        Component({
            selector: 'e-navlist',
            templateUrl: './navlist.component.html',
            styleUrls: ['./navlist.component.css'],
            encapsulation: ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [])
    ], ENavlistComponent);
    return ENavlistComponent;
}());
export { ENavlistComponent };
//# sourceMappingURL=navlist.component.js.map