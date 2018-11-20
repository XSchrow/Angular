var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementsModule } from '../../index';
import { DatepickerDateComponent } from './date/date.component';
import { DatepickerDatetimeComponent } from './datetime/datetime.component';
import { DatepickerInlineComponent } from './inline/inline.component';
import { DatepickerRangeComponent } from './range/range.component';
import { DatepickerTimeComponent } from './time/time.component';
var COMPONENTS = [
    DatepickerDateComponent,
    DatepickerDatetimeComponent,
    DatepickerInlineComponent,
    DatepickerRangeComponent,
    DatepickerTimeComponent,
];
var DatepickerExamplesModule = /** @class */ (function () {
    function DatepickerExamplesModule() {
    }
    DatepickerExamplesModule = __decorate([
        NgModule({
            declarations: COMPONENTS,
            exports: COMPONENTS.slice(),
            imports: [
                CommonModule,
                ElementsModule
            ]
        })
    ], DatepickerExamplesModule);
    return DatepickerExamplesModule;
}());
export { DatepickerExamplesModule };
//# sourceMappingURL=module.js.map