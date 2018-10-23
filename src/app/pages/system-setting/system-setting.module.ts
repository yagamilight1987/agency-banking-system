import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystemSettingRoutingModule } from './system-setting-routing.module';
import { ConfigurationComponent } from './configuration/configuration.component';

@NgModule({
  imports: [
    CommonModule,
    SystemSettingRoutingModule
  ],
  declarations: [ConfigurationComponent]
})
export class SystemSettingModule { }
