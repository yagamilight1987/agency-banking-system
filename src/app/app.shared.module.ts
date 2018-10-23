import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxErrorsModule } from '@ultimate/ngxerrors';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { NgbModule, NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';
import {
  FormErrorsWrapperComponent,
  ObjectKeysPipe,
  ErrorMessagePipe,
  ControlNamePipe
} from 'src/app/components';
import { httpInterceptorProviders } from 'src/app/interceptors';

@NgModule({
  imports: [CommonModule, HttpClientModule, NgxErrorsModule],
  providers: [...httpInterceptorProviders, NgbDropdownConfig],
  declarations: [
    FormErrorsWrapperComponent,
    ObjectKeysPipe,
    ErrorMessagePipe,
    ControlNamePipe
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    FormErrorsWrapperComponent,
    FormlyModule,
    FormlyBootstrapModule,
    NgbModule,
    ChartsModule
  ]
})
export class AppSharedModule {
  constructor(config: NgbDropdownConfig) {
    // customize default values of dropdowns used by this component tree
    config.placement = 'bottom-right';
  }
}
