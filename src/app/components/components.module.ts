import { ApplicationHeaderComponent } from './structure/application-header/application-header.component';
import { ApplicationDetailsHeaderComponent } from './structure/application-details-header/application-details-header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationDetailsComponent } from '../components/application-details/application-details.component';
import { AllApplicationsComponent } from '../components/all-applications/all-applications.component';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationCardComponent } from './all-applications/application-card/application-card.component';

const routes: Routes = [
  {
    path: 'applications',
    component: AllApplicationsComponent,
  },
  {
    path: 'application/:id',
    component: ApplicationDetailsComponent,
  },
  { path: '', redirectTo: '/applications', pathMatch: 'full' },
  { path: '***', redirectTo: '/applications', pathMatch: 'full' },
];

@NgModule({
  declarations: [ApplicationDetailsComponent, AllApplicationsComponent, ApplicationCardComponent,ApplicationDetailsHeaderComponent,ApplicationHeaderComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ComponentsModule {}
