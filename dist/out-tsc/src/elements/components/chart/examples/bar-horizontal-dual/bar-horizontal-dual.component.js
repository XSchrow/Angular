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
var ChartBarHorizontalDualComponent = /** @class */ (function () {
    function ChartBarHorizontalDualComponent() {
        this.options = {
            legend: {
                display: false
            },
            scales: {
                xAxes: [
                    {
                        ticks: {
                            beginAtZero: true
                        },
                    }
                ],
                yAxes: [
                    {
                        categoryPercentage: 0.6,
                        barPercentage: 0.8,
                    }
                ]
            },
        };
        this.data = {
            labels: ['Vue', 'Angular', 'React', 'Ember'],
            datasets: [
                {
                    label: 'One',
                    backgroundColor: colors.green.string(),
                    data: [35, 25, 40, 20]
                },
                {
                    label: 'Two',
                    backgroundColor: colors.blue.string(),
                    data: [40, 15, 35, 30]
                }
            ]
        };
    }
    ChartBarHorizontalDualComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], ChartBarHorizontalDualComponent.prototype, "height", void 0);
    ChartBarHorizontalDualComponent = __decorate([
        Component({
            selector: 'chart-bar-horizontal-dual',
            encapsulation: ViewEncapsulation.None,
            template: "\n    <e-chart type=\"horizontalBar\" [options]=\"options\" [data]=\"data\" [height]=\"height\"></e-chart>\n  "
        }),
        __metadata("design:paramtypes", [])
    ], ChartBarHorizontalDualComponent);
    return ChartBarHorizontalDualComponent;
}());
export { ChartBarHorizontalDualComponent };
//# sourceMappingURL=bar-horizontal-dual.component.js.map