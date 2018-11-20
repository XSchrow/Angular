var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ElementsModule } from '../../elements/components';
import { ChartExamplesModule } from '../../elements/components/chart/examples/module';
import { TableExamplesModule } from '../../elements/components/table/examples/module';
import { PagesComponent } from './pages.component';
import { PageOverviewComponent } from './overview/overview.component';
import { PageCrudComponent } from './crud/crud.component';
import { PageSettingsComponent } from './settings/settings.component';
import { LayoutDefaultComponent } from './layouts/default/default.component';
import { NavbarComponent } from './include/navbar/navbar.component';
import { SidebarComponent } from './include/sidebar/sidebar.component';
import { UsersComponent } from './users/users.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileFormComponent } from './profile-form/profile-form.component';
var COMPONENTS = [
    PagesComponent,
    PageOverviewComponent,
    PageCrudComponent,
    PageSettingsComponent,
    LayoutDefaultComponent,
    NavbarComponent,
    SidebarComponent,
    UsersComponent,
    ProfileComponent,
    ProfileFormComponent,
];
var MODULES = [
    NgbModule,
    ElementsModule,
    ChartExamplesModule,
    TableExamplesModule,
];
var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule = __decorate([
        NgModule({
            declarations: COMPONENTS,
            exports: COMPONENTS.concat(MODULES),
            imports: [
                CommonModule,
                RouterModule
            ].concat(MODULES)
        })
    ], PagesModule);
    return PagesModule;
}());
export { PagesModule };
//# sourceMappingURL=pages.module.js.map