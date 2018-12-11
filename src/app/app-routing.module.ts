import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExplorateursComponent } from './pages/explorateurs/explorateurs.component';
import { PageOverviewComponent } from './pages/overview/overview.component';
import { PageUnitComponent } from './pages/units/units.component';

const routes: Routes = [
  { path: '', redirectTo: 'pages/explorateur', pathMatch: 'full' },
  { path: 'pages/explorateur', component: ExplorateursComponent },
  { path: 'pages/overview', component: PageOverviewComponent },
  { path: 'pages/units', component: PageUnitComponent },
  { path: '**', redirectTo: 'pages/explorateur' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { useHash: true }) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
