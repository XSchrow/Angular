import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ElementsModule } from '../../elements/components';
import { ChartExamplesModule } from '../../elements/components/chart/examples/module';
import { TableExamplesModule } from '../../elements/components/table/examples/module';

import { PagesComponent } from './pages.component';

import { PageOverviewComponent } from './overview/overview.component';
import { PageUnitComponent } from './units/units.component';
import { ExplorateursComponent } from './explorateurs/explorateurs.component';



import { LayoutDefaultComponent } from './layouts/default/default.component';

import { NavbarComponent } from './include/navbar/navbar.component';
import { SidebarComponent } from './include/sidebar/sidebar.component';

import { UsersComponent } from './users/users.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileFormComponent } from './profile-form/profile-form.component';
import { InoxLocationComponent } from './inox-location/inox-location.component';
import { RunesComponent } from './runes/runes.component';

const COMPONENTS = [
  PagesComponent,
  ExplorateursComponent,
  PageOverviewComponent,
  PageUnitComponent,
  LayoutDefaultComponent,
  NavbarComponent,
  SidebarComponent,
  UsersComponent,
  ProfileComponent,
  ProfileFormComponent,
  RunesComponent,
  InoxLocationComponent
]

const MODULES = [
  NgbModule,
  ElementsModule,
  ChartExamplesModule,
  TableExamplesModule,
]

@NgModule({
  declarations: COMPONENTS,
  exports: [
    ...COMPONENTS,
    ...MODULES
  ],
  imports: [
    CommonModule,
    RouterModule,
    ...MODULES,
  ]
})
export class PagesModule {}
