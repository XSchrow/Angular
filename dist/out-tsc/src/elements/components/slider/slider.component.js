var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
var ESliderComponent = /** @class */ (function () {
    function ESliderComponent() {
        this.min = 0;
        this.max = 100;
        this.value = 0;
        this.valueChange = new EventEmitter();
    }
    Object.defineProperty(ESliderComponent.prototype, "connect", {
        get: function () {
            return this.value instanceof Array ? [false, true, false] : [true, false];
        },
        enumerable: true,
        configurable: true
    });
    ESliderComponent.prototype.setValue = function (value) {
        this.valueChange.emit(value);
    };
    ESliderComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], ESliderComponent.prototype, "min", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], ESliderComponent.prototype, "max", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ESliderComponent.prototype, "value", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], ESliderComponent.prototype, "variant", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], ESliderComponent.prototype, "valueChange", void 0);
    ESliderComponent = __decorate([
        Component({
            selector: 'e-slider',
            templateUrl: './slider.component.html',
            styleUrls: ['./nouislider.css', './slider.component.css'],
            encapsulation: ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [])
    ], ESliderComponent);
    return ESliderComponent;
}());
export { ESliderComponent };
//# sourceMappingURL=slider.component.js.map