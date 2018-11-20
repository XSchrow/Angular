var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, ElementRef, EventEmitter, ChangeDetectorRef, ViewEncapsulation } from '@angular/core';
import Locale from "flatpickr/dist/l10n/default";
var EDatepickerComponent = /** @class */ (function () {
    function EDatepickerComponent(element, cdr) {
        var _this = this;
        this.element = element;
        this.cdr = cdr;
        this.globalDefaults = {
            locale: Object.assign({}, Locale, {
                weekdays: {
                    shorthand: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
                },
                rangeSeparator: " - "
            }),
            disableMobile: true,
            onChange: function (value) { return _this.handleChange(value); }
        };
        this.options = {};
        this.config = {};
        this.placeholder = '';
        this.onChange = new EventEmitter();
    }
    EDatepickerComponent.prototype.ngOnInit = function () {
        this.options = Object.assign({}, this.globalDefaults, this.options, this.config);
    };
    EDatepickerComponent.prototype.ngAfterViewInit = function () {
        this.input = this.element.nativeElement.querySelector('.ng2-flatpickr-input');
        if (this.input && this.input.classList) {
            this.input.classList.add('form-control');
        }
        if (this.value) {
            this.date = this.value;
            this.cdr.detectChanges();
        }
    };
    EDatepickerComponent.prototype.handleChange = function (value) {
        this.onChange.emit(value);
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], EDatepickerComponent.prototype, "config", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], EDatepickerComponent.prototype, "placeholder", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], EDatepickerComponent.prototype, "value", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], EDatepickerComponent.prototype, "onChange", void 0);
    EDatepickerComponent = __decorate([
        Component({
            selector: 'e-datepicker',
            templateUrl: './datepicker.component.html',
            styleUrls: ['./datepicker.component.css'],
            encapsulation: ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [ElementRef,
            ChangeDetectorRef])
    ], EDatepickerComponent);
    return EDatepickerComponent;
}());
export { EDatepickerComponent };
//# sourceMappingURL=datepicker.component.js.map