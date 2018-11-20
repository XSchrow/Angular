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
import { Component, ViewEncapsulation, ElementRef, ChangeDetectorRef } from '@angular/core';
import { EDatepickerComponent } from '../../datepicker.component';
var EDatepickerInlineComponent = /** @class */ (function (_super) {
    __extends(EDatepickerInlineComponent, _super);
    function EDatepickerInlineComponent(element, cdr) {
        var _this = _super.call(this, element, cdr) || this;
        _this.options = {
            inline: true,
            appendTo: _this.element.nativeElement
        };
        return _this;
    }
    EDatepickerInlineComponent = __decorate([
        Component({
            selector: 'e-datepicker-inline',
            encapsulation: ViewEncapsulation.None,
            styleUrls: ['../../datepicker.component.css'],
            template: "\n    <ng2-flatpickr\n      class=\"d-none\"\n      [setDate]=\"date\"\n      [config]=\"options\"></ng2-flatpickr>\n  "
        }),
        __metadata("design:paramtypes", [ElementRef, ChangeDetectorRef])
    ], EDatepickerInlineComponent);
    return EDatepickerInlineComponent;
}(EDatepickerComponent));
export { EDatepickerInlineComponent };
//# sourceMappingURL=inline.component.js.map