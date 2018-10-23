import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurrencyRoutingModule } from './currency-routing.module';
import { ConfigurationComponent } from './configuration/configuration.component';

@NgModule({
  imports: [
    CommonModule,
    CurrencyRoutingModule
  ],
  declarations: [ConfigurationComponent]
})
export class CurrencyModule { }
