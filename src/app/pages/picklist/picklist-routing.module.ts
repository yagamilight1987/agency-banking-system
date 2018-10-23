import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfigurationComponent } from './configuration/configuration.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'configuration',
    pathMatch: 'full'
  },
  {
    path: 'configuration',
    component: ConfigurationComponent,
    data: {
      title: 'Picklist Configuration',
      breadcrumb: ['Home', 'Picklist', 'Configuration']
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PicklistRoutingModule {}
