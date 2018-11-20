var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
import { ChartComponent } from 'angular2-chartjs';
var EChartComponent = /** @class */ (function (_super) {
    __extends(EChartComponent, _super);
    function EChartComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.defaultOptions = {
            maintainAspectRatio: false,
            elements: {
                arc: {
                    borderWidth: 3
                }
            },
            tooltips: {
                backgroundColor: 'rgb(120, 120, 120)',
                cornerRadius: 3,
            }
        };
        return _this;
    }
    EChartComponent.prototype.setCanvasHeight = function () {
        if (this.chart && this.height) {
            this.chart.canvas.style.height = this.height + 'px';
        }
    };
    EChartComponent.prototype.ngOnInit = function () {
        this.options = Object.assign({}, this.defaultOptions, this.options);
        _super.prototype.ngOnInit.call(this);
        this.setCanvasHeight();
    };
    EChartComponent.prototype.ngOnChanges = function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
        if (this.chart && changes['height']) {
            this.setCanvasHeight();
        }
    };
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], EChartComponent.prototype, "height", void 0);
    EChartComponent = __decorate([
        Component({
            selector: 'e-chart',
            template: '',
            styles: ['e-chart { display: block; }'],
            encapsulation: ViewEncapsulation.None,
        })
    ], EChartComponent);
    return EChartComponent;
}(ChartComponent));
export { EChartComponent };
//# sourceMappingURL=chart.component.js.map