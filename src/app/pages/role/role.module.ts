import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoleRoutingModule } from './role-routing.module';
import { SearchComponent } from './search/search.component';
import { ViewComponent } from './view/view.component';
import { AddEditComponent } from './add-edit/add-edit.component';

@NgModule({
  imports: [
    CommonModule,
    RoleRoutingModule
  ],
  declarations: [SearchComponent, ViewComponent, AddEditComponent]
})
export class RoleModule { }
