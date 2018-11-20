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
var SliderVariantsComponent = /** @class */ (function () {
    function SliderVariantsComponent() {
    }
    SliderVariantsComponent.prototype.ngOnInit = function () {
    };
    SliderVariantsComponent = __decorate([
        Component({
            selector: 'slider-variants',
            encapsulation: ViewEncapsulation.None,
            template: "\n    <div class=\"row w-100\">\n      <div class=\"col-md-3 mb-3\">\n        <div class=\"card p-2\">\n          <e-slider [variant]=\"'primary'\" [value]=\"50\"></e-slider>\n        </div>\n      </div>\n      <div class=\"col-md-3 mb-3\">\n        <div class=\"card p-2\">\n          <e-slider [variant]=\"'secondary'\" [value]=\"50\"></e-slider>\n        </div>\n      </div>\n      <div class=\"col-md-3 mb-3\">\n        <div class=\"card p-2\">\n          <e-slider [variant]=\"'success'\" [value]=\"50\"></e-slider>\n        </div>\n      </div>\n      <div class=\"col-md-3 mb-3\">\n        <div class=\"card p-2\">\n          <e-slider [variant]=\"'info'\" [value]=\"50\"></e-slider>\n        </div>\n      </div>\n      <div class=\"col-md-3 mb-3 mb-md-0\">\n        <div class=\"card p-2\">\n          <e-slider [variant]=\"'warning'\" [value]=\"50\"></e-slider>\n        </div>\n      </div>\n      <div class=\"col-md-3 mb-3 mb-md-0\">\n        <div class=\"card p-2\">\n          <e-slider [variant]=\"'danger'\" [value]=\"50\"></e-slider>\n        </div>\n      </div>\n      <div class=\"col-md-3 mb-3 mb-md-0\">\n        <div class=\"card p-2\">\n          <e-slider [variant]=\"'light'\" [value]=\"50\"></e-slider>\n        </div>\n      </div>\n      <div class=\"col-md-3\">\n        <div class=\"card p-2\">\n          <e-slider [variant]=\"'dark'\" [value]=\"50\"></e-slider>\n        </div>\n      </div>\n    </div>\n  "
        }),
        __metadata("design:paramtypes", [])
    ], SliderVariantsComponent);
    return SliderVariantsComponent;
}());
export { SliderVariantsComponent };
//# sourceMappingURL=variants.component.js.map