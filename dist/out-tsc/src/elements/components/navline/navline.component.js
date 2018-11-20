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
var ENavlineComponent = /** @class */ (function () {
    function ENavlineComponent() {
        this.arrow = false;
    }
    Object.defineProperty(ENavlineComponent.prototype, "classNames", {
        get: function () {
            return {
                'e-navline--arrow': this.arrow
            };
        },
        enumerable: true,
        configurable: true
    });
    ENavlineComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], ENavlineComponent.prototype, "arrow", void 0);
    ENavlineComponent = __decorate([
        Component({
            selector: 'e-navline',
            templateUrl: './navline.component.html',
            styleUrls: ['./navline.component.css'],
            encapsulation: ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [])
    ], ENavlineComponent);
    return ENavlineComponent;
}());
export { ENavlineComponent };
//# sourceMappingURL=navline.component.js.map