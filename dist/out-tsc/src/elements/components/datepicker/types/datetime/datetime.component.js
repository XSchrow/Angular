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
import { Component, ViewEncapsulation } from '@angular/core';
import { EDatepickerComponent } from '../../datepicker.component';
var EDatepickerDatetimeComponent = /** @class */ (function (_super) {
    __extends(EDatepickerDatetimeComponent, _super);
    function EDatepickerDatetimeComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.options = {
            dateFormat: 'j M Y H:i',
            enableTime: true,
            time_24hr: true
        };
        return _this;
    }
    EDatepickerDatetimeComponent = __decorate([
        Component({
            selector: 'e-datepicker-datetime',
            encapsulation: ViewEncapsulation.None,
            styleUrls: ['../../datepicker.component.css'],
            template: "\n    <ng2-flatpickr\n      [setDate]=\"date\"\n      [config]=\"options\"\n      [placeholder]=\"placeholder\"></ng2-flatpickr>\n  "
        })
    ], EDatepickerDatetimeComponent);
    return EDatepickerDatetimeComponent;
}(EDatepickerComponent));
export { EDatepickerDatetimeComponent };
//# sourceMappingURL=datetime.component.js.map