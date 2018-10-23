import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApprovalRoutingModule } from './approval-routing.module';
import { SearchComponent } from './search/search.component';

@NgModule({
  imports: [
    CommonModule,
    ApprovalRoutingModule
  ],
  declarations: [SearchComponent]
})
export class ApprovalModule { }
