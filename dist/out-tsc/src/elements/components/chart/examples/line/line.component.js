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
var ChartLineComponent = /** @class */ (function () {
    function ChartLineComponent() {
        this.options = {
            scales: {
                yAxes: [
                    {
                        ticks: {
                            beginAtZero: true
                        }
                    }
                ],
            },
        };
        this.data = {
            labels: ['Mon', 'Tue', 'Wed', 'Thu'],
            datasets: [
                {
                    label: 'Line',
                    borderColor: colors.green.string(),
                    backgroundColor: 'transparent',
                    data: [3, 12, 3, 12]
                }
            ]
        };
    }
    ChartLineComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], ChartLineComponent.prototype, "height", void 0);
    ChartLineComponent = __decorate([
        Component({
            selector: 'chart-line',
            encapsulation: ViewEncapsulation.None,
            template: "\n    <e-chart type=\"line\" [options]=\"options\" [data]=\"data\" [height]=\"height\"></e-chart>\n  "
        }),
        __metadata("design:paramtypes", [])
    ], ChartLineComponent);
    return ChartLineComponent;
}());
export { ChartLineComponent };
//# sourceMappingURL=line.component.js.map