import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { SearchComponent } from './search/search.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  imports: [
    CommonModule,
    CustomerRoutingModule
  ],
  declarations: [SearchComponent, ViewComponent]
})
export class CustomerModule { }
