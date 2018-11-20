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
var EToggleComponent = /** @class */ (function () {
    function EToggleComponent() {
        this.disabled = false;
        this.value = false;
        this.valueChange = new EventEmitter();
    }
    EToggleComponent.prototype.setValue = function (value) {
        this.valueChange.emit(value);
    };
    EToggleComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], EToggleComponent.prototype, "disabled", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], EToggleComponent.prototype, "value", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], EToggleComponent.prototype, "valueChange", void 0);
    EToggleComponent = __decorate([
        Component({
            selector: 'e-toggle',
            templateUrl: './toggle.component.html',
            styleUrls: ['./bootstrap-switch.css', './toggle.component.css'],
            encapsulation: ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [])
    ], EToggleComponent);
    return EToggleComponent;
}());
export { EToggleComponent };
//# sourceMappingURL=toggle.component.js.map