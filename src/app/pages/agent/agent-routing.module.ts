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
      title: 'Search Agent',
      breadcrumb: ['Home', 'Agent', 'Search']
    }
  },
  {
    path: 'view/:id',
    component: ViewComponent,
    data: {
      title: 'View Agent',
      breadcrumb: ['Home', 'Agent', 'View']
    }
  },
  {
    path: 'add',
    component: AddEditComponent,
    data: {
      title: 'Add Agent',
      breadcrumb: ['Home', 'Agent', 'Add']
    }
  },
  {
    path: 'edit/:id',
    component: AddEditComponent,
    data: {
      title: 'Edit Agent',
      breadcrumb: ['Home', 'Agent', 'Edit']
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgentRoutingModule {}
