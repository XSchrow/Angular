var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementsModule } from '../../index';
import { NavlistDefaultComponent } from './default/default.component';
import { NavlistActiveBgComponent } from './active-bg/active-bg.component';
import { NavlistActiveBgTooltipsComponent } from './active-bg-tooltips/active-bg-tooltips.component';
import { NavlistActiveBoldComponent } from './active-bold/active-bold.component';
var COMPONENTS = [
    NavlistDefaultComponent,
    NavlistDefaultComponent,
    NavlistActiveBgComponent,
    NavlistActiveBgTooltipsComponent,
    NavlistActiveBoldComponent,
];
var NavlistExamplesModule = /** @class */ (function () {
    function NavlistExamplesModule() {
    }
    NavlistExamplesModule = __decorate([
        NgModule({
            declarations: COMPONENTS,
            exports: COMPONENTS.slice(),
            imports: [
                CommonModule,
                ElementsModule
            ]
        })
    ], NavlistExamplesModule);
    return NavlistExamplesModule;
}());
export { NavlistExamplesModule };
//# sourceMappingURL=module.js.map