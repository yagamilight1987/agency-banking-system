import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'search',
    pathMatch: 'full'
  },
  {
    path: 'search',
    component: SearchComponent,
    data: {
      title: 'Search User',
      breadcrumb: ['Home', 'User', 'Search']
    }
  },
  {
    path: 'view/:id',
    component: ViewComponent,
    data: {
      title: 'View User',
      breadcrumb: ['Home', 'User', 'View']
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}
