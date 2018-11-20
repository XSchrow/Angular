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
var ESelectComponent = /** @class */ (function () {
    function ESelectComponent() {
        this.multiple = false;
        this.selectedChange = new EventEmitter();
    }
    ESelectComponent.prototype.setSelected = function (value) {
        this.selectedChange.emit(value);
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ESelectComponent.prototype, "options", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], ESelectComponent.prototype, "multiple", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], ESelectComponent.prototype, "placeholder", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ESelectComponent.prototype, "selected", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], ESelectComponent.prototype, "selectedChange", void 0);
    ESelectComponent = __decorate([
        Component({
            selector: 'e-select',
            templateUrl: './select.component.html',
            styleUrls: ['./select.component.css'],
            encapsulation: ViewEncapsulation.None
        })
    ], ESelectComponent);
    return ESelectComponent;
}());
export { ESelectComponent };
//# sourceMappingURL=select.component.js.map