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
var ChartAreaComponent = /** @class */ (function () {
    function ChartAreaComponent() {
        this.options = {
            scales: {
                yAxes: [
                    {
                        ticks: {
                            beginAtZero: true
                        }
                    }
                ],
                xAxes: []
            },
        };
        this.data = {
            labels: ['Mon', 'Tue', 'Wed', 'Thu'],
            datasets: [
                {
                    label: 'Area',
                    borderColor: '#ffffff',
                    borderWidth: 2,
                    backgroundColor: colors.green.alpha(0.6).string(),
                    pointRadius: 3,
                    data: [3, 12, 3, 12]
                },
            ]
        };
    }
    ChartAreaComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], ChartAreaComponent.prototype, "height", void 0);
    ChartAreaComponent = __decorate([
        Component({
            selector: 'chart-area',
            encapsulation: ViewEncapsulation.None,
            template: "\n    <e-chart type=\"line\" [options]=\"options\" [data]=\"data\" [height]=\"height\"></e-chart>\n  "
        }),
        __metadata("design:paramtypes", [])
    ], ChartAreaComponent);
    return ChartAreaComponent;
}());
export { ChartAreaComponent };
//# sourceMappingURL=area.component.js.map