import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGaurd, LoginGaurd } from './gaurds';
import {
  HelperService,
  SessionStorageService,
  LocalStorageService
} from './services';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule],
  providers: [
    HelperService,
    SessionStorageService,
    LocalStorageService,
    AuthGaurd,
    LoginGaurd
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
