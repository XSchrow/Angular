var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SelectModule } from 'ng-select';
import { ESelectComponent } from './select.component';
var COMPONENTS = [
    ESelectComponent,
];
var ESelectModule = /** @class */ (function () {
    function ESelectModule() {
    }
    ESelectModule = __decorate([
        NgModule({
            declarations: COMPONENTS,
            exports: COMPONENTS.concat([
                SelectModule
            ]),
            imports: [CommonModule, FormsModule, SelectModule]
        })
    ], ESelectModule);
    return ESelectModule;
}());
export { ESelectModule };
//# sourceMappingURL=select.module.js.map