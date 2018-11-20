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
var ChartBubbleComponent = /** @class */ (function () {
    function ChartBubbleComponent() {
        this.options = {
            scales: {
                yAxes: [
                    {
                        ticks: {
                            beginAtZero: true
                        }
                    }
                ],
                xAxes: [
                    {
                        ticks: {
                            beginAtZero: true
                        }
                    }
                ]
            },
        };
        this.data = {
            datasets: [
                {
                    label: 'Bubble',
                    backgroundColor: colors.green.string(),
                    borderColor: '#ffffff',
                    data: [
                        { x: 3, y: 6, r: 5 },
                        { x: 8, y: 4, r: 10 },
                        { x: 4, y: 8, r: 3 },
                        { x: 1, y: 5, r: 8 },
                        { x: 2, y: 1, r: 12 },
                        { x: 5, y: 3, r: 6 },
                        { x: 3, y: 3, r: 5 },
                        { x: 6, y: 6, r: 7 },
                    ]
                }
            ]
        };
    }
    ChartBubbleComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], ChartBubbleComponent.prototype, "height", void 0);
    ChartBubbleComponent = __decorate([
        Component({
            selector: 'chart-bubble',
            encapsulation: ViewEncapsulation.None,
            template: "\n    <e-chart type=\"bubble\" [options]=\"options\" [data]=\"data\" [height]=\"height\"></e-chart>\n  "
        }),
        __metadata("design:paramtypes", [])
    ], ChartBubbleComponent);
    return ChartBubbleComponent;
}());
export { ChartBubbleComponent };
//# sourceMappingURL=bubble.component.js.map