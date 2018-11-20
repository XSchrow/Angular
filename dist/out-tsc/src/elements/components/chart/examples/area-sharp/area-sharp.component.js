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
var ChartAreaSharpComponent = /** @class */ (function () {
    function ChartAreaSharpComponent() {
        this.ticks = true;
        this.options = {
            legend: {
                display: false
            },
            maintainAspectRatio: false,
            spanGaps: false,
            elements: {
                line: {
                    tension: 0.000001
                }
            },
            scales: {
                yAxes: [
                    {
                        ticks: {
                            min: -80,
                            max: 80,
                            stepSize: 40,
                            padding: 10,
                            display: this.ticks
                        },
                        gridLines: {
                            display: true,
                            color: 'rgba(0, 0, 0, 0.05)',
                            zeroLineColor: 'rgba(255, 146, 139, 0.8)',
                            drawTicks: false
                        },
                    }
                ],
                xAxes: [
                    {
                        ticks: {
                            autoSkip: false
                        },
                        gridLines: {
                            display: true,
                            color: 'rgba(0, 0, 0, 0.05)'
                        }
                    }
                ]
            }
        };
        this.data = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [
                {
                    borderWidth: 1,
                    borderColor: colors.red.alpha(0.9).string(),
                    backgroundColor: colors.red.alpha(0.4).string(),
                    pointBackgroundColor: colors.red.alpha(0.9).string(),
                    radius: 0,
                    data: [-60, 20, -40, 40, -20, 60],
                    label: 'Dataset',
                    fill: 'origin'
                }
            ]
        };
    }
    ChartAreaSharpComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], ChartAreaSharpComponent.prototype, "height", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], ChartAreaSharpComponent.prototype, "ticks", void 0);
    ChartAreaSharpComponent = __decorate([
        Component({
            selector: 'chart-area-sharp',
            encapsulation: ViewEncapsulation.None,
            template: "\n    <e-chart type=\"line\" [options]=\"options\" [data]=\"data\" [height]=\"height\"></e-chart>\n  "
        }),
        __metadata("design:paramtypes", [])
    ], ChartAreaSharpComponent);
    return ChartAreaSharpComponent;
}());
export { ChartAreaSharpComponent };
//# sourceMappingURL=area-sharp.component.js.map