import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { SearchComponent } from './search/search.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  declarations: [SearchComponent, ViewComponent]
})
export class UserModule { }
