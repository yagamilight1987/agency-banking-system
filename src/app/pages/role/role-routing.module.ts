import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { ViewComponent } from './view/view.component';
import { AddEditComponent } from './add-edit/add-edit.component';

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
      title: 'Search Role',
      breadcrumb: ['Home', 'Role', 'Search']
    }
  },
  {
    path: 'view/:id',
    component: ViewComponent,
    data: {
      title: 'View Role',
      breadcrumb: ['Home', 'Role', 'View']
    }
  },
  {
    path: 'add',
    component: AddEditComponent,
    data: {
      title: 'Add Role',
      breadcrumb: ['Home', 'Role', 'Add']
    }
  },
  {
    path: 'edit/:id',
    component: AddEditComponent,
    data: {
      title: 'Edit Role',
      breadcrumb: ['Home', 'Role', 'Edit']
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoleRoutingModule {}
