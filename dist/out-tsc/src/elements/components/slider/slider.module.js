var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NouisliderModule } from 'ng2-nouislider';
import { ESliderComponent } from './slider.component';
var COMPONENTS = [
    ESliderComponent,
];
var ESliderModule = /** @class */ (function () {
    function ESliderModule() {
    }
    ESliderModule = __decorate([
        NgModule({
            declarations: COMPONENTS,
            exports: COMPONENTS.concat([
                NouisliderModule
            ]),
            imports: [CommonModule, NouisliderModule]
        })
    ], ESliderModule);
    return ESliderModule;
}());
export { ESliderModule };
//# sourceMappingURL=slider.module.js.map