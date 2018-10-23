import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppPagesRoutingModule } from './app-pages-routing.module';
import { AppSharedModule } from 'src/app/app.shared.module';
import {
  AppHeaderComponent,
  AppFooterComponent,
  AppLayoutComponent,
  AppNavComponent
} from 'src/app/components';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LandingComponent } from './landing/landing.component';
import { LandingService } from './services/landing.service';

@NgModule({
  imports: [CommonModule, AppPagesRoutingModule, AppSharedModule],
  declarations: [
    AppHeaderComponent,
    AppFooterComponent,
    AppLayoutComponent,
    AppNavComponent,
    LandingComponent,
    DashboardComponent
  ],
  providers: [LandingService]
})
export class AppPagesModule {}
