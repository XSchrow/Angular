var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PageConnexionComponent } from './pages/connexion/connexion.component';
import { PageOverviewComponent } from './pages/overview/overview.component';
import { PageCrudComponent } from './pages/crud/crud.component';
import { PageSettingsComponent } from './pages/settings/settings.component';
var routes = [
    { path: '', redirectTo: 'pages/connexion', pathMatch: 'full' },
    { path: 'pages/connexion', component: PageConnexionComponent },
    { path: 'pages/overview', component: PageOverviewComponent },
    { path: 'pages/users', component: PageCrudComponent },
    { path: 'pages/settings', component: PageSettingsComponent },
    { path: '**', redirectTo: 'pages/connexion' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forRoot(routes, { useHash: true })],
            exports: [RouterModule],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map