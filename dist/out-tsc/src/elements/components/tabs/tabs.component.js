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
var ETabsComponent = /** @class */ (function () {
    function ETabsComponent() {
        this.nested = false;
    }
    Object.defineProperty(ETabsComponent.prototype, "classNames", {
        get: function () {
            return {
                'e-tabs--nested': this.nested
            };
        },
        enumerable: true,
        configurable: true
    });
    ETabsComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], ETabsComponent.prototype, "nested", void 0);
    ETabsComponent = __decorate([
        Component({
            selector: 'e-tabs',
            templateUrl: './tabs.component.html',
            styleUrls: ['./tabs.component.css'],
            encapsulation: ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [])
    ], ETabsComponent);
    return ETabsComponent;
}());
export { ETabsComponent };
//# sourceMappingURL=tabs.component.js.map