var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementsModule } from '../../index';
import { ChartAreaComponent } from './area/area.component';
import { ChartAreaSharpComponent } from './area-sharp/area-sharp.component';
import { ChartAreaTripleComponent } from './area-triple/area-triple.component';
import { ChartBarComponent } from './bar/bar.component';
import { ChartBarHorizontalComponent } from './bar-horizontal/bar-horizontal.component';
import { ChartBarHorizontalDualComponent } from './bar-horizontal-dual/bar-horizontal-dual.component';
import { ChartBubbleComponent } from './bubble/bubble.component';
import { ChartDonutComponent } from './donut/donut.component';
import { ChartLineComponent } from './line/line.component';
import { ChartMixedComponent } from './mixed/mixed.component';
import { ChartPieComponent } from './pie/pie.component';
import { ChartRadarComponent } from './radar/radar.component';
var COMPONENTS = [
    ChartAreaComponent,
    ChartAreaTripleComponent,
    ChartAreaSharpComponent,
    ChartBarComponent,
    ChartBarHorizontalComponent,
    ChartBarHorizontalDualComponent,
    ChartBubbleComponent,
    ChartDonutComponent,
    ChartLineComponent,
    ChartMixedComponent,
    ChartPieComponent,
    ChartRadarComponent,
];
var ChartExamplesModule = /** @class */ (function () {
    function ChartExamplesModule() {
    }
    ChartExamplesModule = __decorate([
        NgModule({
            declarations: COMPONENTS,
            exports: COMPONENTS.slice(),
            imports: [
                CommonModule,
                ElementsModule
            ]
        })
    ], ChartExamplesModule);
    return ChartExamplesModule;
}());
export { ChartExamplesModule };
//# sourceMappingURL=module.js.map