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
import colors from '../../colors';
var ChartRadarComponent = /** @class */ (function () {
    function ChartRadarComponent() {
        this.options = {
            legend: {
                display: false
            },
            scale: {
                ticks: {
                    beginAtZero: true
                }
            }
        };
        this.data = {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            datasets: [
                {
                    label: 'Radar',
                    borderColor: colors.green.alpha(0.9).string(),
                    backgroundColor: colors.green.alpha(0.5).string(),
                    data: [12.5, 12.5, 12.5, 12.5, 12.5, 12.5]
                }
            ]
        };
    }
    ChartRadarComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], ChartRadarComponent.prototype, "height", void 0);
    ChartRadarComponent = __decorate([
        Component({
            selector: 'chart-radar',
            encapsulation: ViewEncapsulation.None,
            template: "\n    <e-chart type=\"radar\" [options]=\"options\" [data]=\"data\" [height]=\"height\"></e-chart>\n  "
        }),
        __metadata("design:paramtypes", [])
    ], ChartRadarComponent);
    return ChartRadarComponent;
}());
export { ChartRadarComponent };
//# sourceMappingURL=radar.component.js.map