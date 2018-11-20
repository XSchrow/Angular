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
var ProfileFormComponent = /** @class */ (function () {
    function ProfileFormComponent() {
        this.data = {
            name: '',
            username: ''
        };
        this.user = {
            name: '',
            username: ''
        };
        this.isNew = false;
    }
    ProfileFormComponent.prototype.ngOnInit = function () { };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ProfileFormComponent.prototype, "user", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], ProfileFormComponent.prototype, "isNew", void 0);
    ProfileFormComponent = __decorate([
        Component({
            selector: 'app-profile-form',
            templateUrl: './profile-form.component.html',
            styleUrls: ['./profile-form.component.css'],
            encapsulation: ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [])
    ], ProfileFormComponent);
    return ProfileFormComponent;
}());
export { ProfileFormComponent };
//# sourceMappingURL=profile-form.component.js.map