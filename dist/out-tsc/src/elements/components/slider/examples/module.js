var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementsModule } from '../../index';
import { SliderSingleComponent } from './single/single.component';
import { SliderDoubleComponent } from './double/double.component';
import { SliderVariantsComponent } from './variants/variants.component';
var COMPONENTS = [
    SliderSingleComponent,
    SliderDoubleComponent,
    SliderVariantsComponent,
];
var SliderExamplesModule = /** @class */ (function () {
    function SliderExamplesModule() {
    }
    SliderExamplesModule = __decorate([
        NgModule({
            declarations: COMPONENTS,
            exports: COMPONENTS.slice(),
            imports: [
                CommonModule,
                ElementsModule
            ]
        })
    ], SliderExamplesModule);
    return SliderExamplesModule;
}());
export { SliderExamplesModule };
//# sourceMappingURL=module.js.map