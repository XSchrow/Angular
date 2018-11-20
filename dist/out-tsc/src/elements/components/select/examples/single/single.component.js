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
var SelectSingleComponent = /** @class */ (function () {
    function SelectSingleComponent() {
        this.options = [
            { label: 'One', value: 'one' },
            { label: 'Two', value: 'two' },
            { label: 'Three', value: 'three' }
        ];
    }
    SelectSingleComponent.prototype.ngOnInit = function () {
    };
    SelectSingleComponent = __decorate([
        Component({
            selector: 'select-single',
            encapsulation: ViewEncapsulation.None,
            template: "\n    <e-select [options]=\"options\" [(selected)]=\"selected\" placeholder=\"Select\"></e-select>\n  "
        }),
        __metadata("design:paramtypes", [])
    ], SelectSingleComponent);
    return SelectSingleComponent;
}());
export { SelectSingleComponent };
//# sourceMappingURL=single.component.js.map