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
function random() {
    return Math.round(Math.random() * 10000);
}
var OutcomeTrendComponent = /** @class */ (function () {
    function OutcomeTrendComponent() {
        this.height = 51;
        this.data = {
            'day': {
                0: random(),
                1: random(),
                2: random(),
                3: random(),
                4: random(),
                5: random(),
            },
            'week': {
                0: random() * 7,
                1: random() * 7,
                2: random() * 7,
                3: random() * 7,
                4: random() * 7,
                5: random() * 7,
            },
            'month': {
                0: random() * 30,
                1: random() * 30,
                2: random() * 30,
                3: random() * 30,
                4: random() * 30,
                5: random() * 30,
            }
        };
        this.chartOptions = {
            legend: { display: false },
            tooltips: { enabled: false },
            layout: {
                padding: {
                    left: 10,
                    right: 10
                }
            },
            scales: {
                xAxes: [
                    {
                        display: false,
                        categoryPercentage: 0.8,
                        barPercentage: 0.6,
                    }
                ],
                yAxes: [
                    { display: false }
                ]
            }
        };
        this.chartData = {};
        this._period = Object.keys(this.data)[0];
    }
    OutcomeTrendComponent.prototype.setChartData = function (period) {
        var dataset = this.data[period];
        if (dataset) {
            this.chartData = {
                labels: Object.keys(dataset),
                datasets: [
                    {
                        label: "Outcome Trend",
                        backgroundColor: '#686e71',
                        data: Object.keys(dataset).map(function (key) { return dataset[key]; }),
                    }
                ]
            };
        }
    };
    Object.defineProperty(OutcomeTrendComponent.prototype, "period", {
        get: function () {
            return this._period;
        },
        set: function (value) {
            this._period = value;
            this.setChartData(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OutcomeTrendComponent.prototype, "periods", {
        get: function () {
            return Object.keys(this.data);
        },
        enumerable: true,
        configurable: true
    });
    OutcomeTrendComponent.prototype.ngOnInit = function () {
        this.setChartData(this.period);
    };
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], OutcomeTrendComponent.prototype, "height", void 0);
    OutcomeTrendComponent = __decorate([
        Component({
            selector: 'outcome-trend',
            templateUrl: './outcome-trend.component.html',
            encapsulation: ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [])
    ], OutcomeTrendComponent);
    return OutcomeTrendComponent;
}());
export { OutcomeTrendComponent };
//# sourceMappingURL=outcome-trend.component.js.map