import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PicklistRoutingModule } from './picklist-routing.module';
import { ConfigurationComponent } from './configuration/configuration.component';

@NgModule({
  imports: [
    CommonModule,
    PicklistRoutingModule
  ],
  declarations: [ConfigurationComponent]
})
export class PicklistModule { }
