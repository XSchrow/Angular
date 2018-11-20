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
var SelectMultipleComponent = /** @class */ (function () {
    function SelectMultipleComponent() {
        this.options = [
            { label: 'One', value: 'one' },
            { label: 'Two', value: 'two' },
            { label: 'Three', value: 'three' }
        ];
        this.selected = ['one'];
    }
    SelectMultipleComponent.prototype.ngOnInit = function () {
    };
    SelectMultipleComponent = __decorate([
        Component({
            selector: 'select-multiple',
            encapsulation: ViewEncapsulation.None,
            template: "\n    <e-select\n      [options]=\"options\"\n      [(selected)]=\"selected\"\n      [multiple]=\"true\"\n      placeholder=\"Tags\"></e-select>\n  "
        }),
        __metadata("design:paramtypes", [])
    ], SelectMultipleComponent);
    return SelectMultipleComponent;
}());
export { SelectMultipleComponent };
//# sourceMappingURL=multiple.component.js.map