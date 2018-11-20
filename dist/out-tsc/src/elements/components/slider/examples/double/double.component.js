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
var SliderDoubleComponent = /** @class */ (function () {
    function SliderDoubleComponent() {
        this.value = [25, 75];
    }
    SliderDoubleComponent.prototype.ngOnInit = function () {
    };
    SliderDoubleComponent = __decorate([
        Component({
            selector: 'slider-double',
            encapsulation: ViewEncapsulation.None,
            template: "\n    <e-slider\n      [min]=\"0\"\n      [max]=\"100\"\n      [(value)]=\"value\"></e-slider>\n  "
        }),
        __metadata("design:paramtypes", [])
    ], SliderDoubleComponent);
    return SliderDoubleComponent;
}());
export { SliderDoubleComponent };
//# sourceMappingURL=double.component.js.map