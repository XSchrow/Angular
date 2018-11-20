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
var EMetricComponent = /** @class */ (function () {
    function EMetricComponent() {
        this.title = 'Metric';
        this.value = '0';
        this.iconDark = false;
    }
    EMetricComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], EMetricComponent.prototype, "title", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], EMetricComponent.prototype, "value", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], EMetricComponent.prototype, "icon", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], EMetricComponent.prototype, "iconDark", void 0);
    EMetricComponent = __decorate([
        Component({
            selector: 'e-metric',
            templateUrl: './metric.component.html',
            styleUrls: ['./metric.component.css'],
            encapsulation: ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [])
    ], EMetricComponent);
    return EMetricComponent;
}());
export { EMetricComponent };
//# sourceMappingURL=metric.component.js.map