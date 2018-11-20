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
var ChartAreaTripleComponent = /** @class */ (function () {
    function ChartAreaTripleComponent() {
        this.options = {
            maintainAspectRatio: false,
            legend: {
                display: false
            },
            scales: {
                xAxes: [
                    {
                        gridLines: {
                            display: true,
                            color: 'rgb(240, 240, 240)',
                            drawBorder: false
                        }
                    }
                ],
                yAxes: [
                    {
                        gridLines: {
                            display: true,
                            color: 'rgb(240, 240, 240)',
                            zeroLineColor: 'rgb(240, 240, 240)',
                            drawTicks: false
                        },
                        ticks: {
                            display: false
                        }
                    }
                ]
            }
        };
        this.data = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [
                {
                    label: 'Dataset 1',
                    borderColor: colors.green.alpha(0.9).string(),
                    backgroundColor: colors.green.string(),
                    borderWidth: 2,
                    pointRadius: 0,
                    data: [10, 5, 10, 5, 20, 10, 5, 35, 15, 25, 10, 15],
                    fill: 'start'
                },
                {
                    label: 'Dataset 3',
                    borderColor: colors.red.alpha(0.9).string(),
                    backgroundColor: colors.red.string(),
                    borderWidth: 2,
                    pointRadius: 0,
                    data: [20, 35, 35, 25, 75, 40, 85, 10, 45, 15, 25, 10],
                    fill: 'start',
                },
                {
                    label: 'Dataset 2',
                    borderColor: colors.blue.alpha(0.9).string(),
                    backgroundColor: colors.blue.string(),
                    borderWidth: 2,
                    pointRadius: 0,
                    data: [30, 80, 50, 60, 35, 10, 0, 5, 20, 40, 70, 40],
                    fill: 'start',
                }
            ]
        };
    }
    ChartAreaTripleComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], ChartAreaTripleComponent.prototype, "height", void 0);
    ChartAreaTripleComponent = __decorate([
        Component({
            selector: 'chart-area-triple',
            encapsulation: ViewEncapsulation.None,
            template: "\n    <e-chart type=\"line\" [options]=\"options\" [data]=\"data\" [height]=\"height\"></e-chart>\n  "
        }),
        __metadata("design:paramtypes", [])
    ], ChartAreaTripleComponent);
    return ChartAreaTripleComponent;
}());
export { ChartAreaTripleComponent };
//# sourceMappingURL=area-triple.component.js.map