import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageExplorateurFormComponent } from './pages/explorateur-form/explorateur-form.component';
import { PageConnexionComponent } from './pages/connexion/connexion.component';
import { PageOverviewComponent } from './pages/overview/overview.component';
import { PageCrudComponent } from './pages/crud/crud.component';
import { PageSettingsComponent } from './pages/settings/settings.component';

const routes: Routes = [
  { path: '', redirectTo: 'pages/connexion', pathMatch: 'full' },
  { path: 'pages/explorateur-form', component: PageExplorateurFormComponent },
  { path: 'pages/connexion', component: PageConnexionComponent },
  { path: 'pages/overview', component: PageOverviewComponent },
  { path: 'pages/users', component: PageCrudComponent },
  { path: 'pages/settings', component: PageSettingsComponent },
  { path: '**', redirectTo: 'pages/connexion' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { useHash: true }) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
