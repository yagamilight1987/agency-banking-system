import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppSharedModule } from 'src/app/app.shared.module';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { AuthService } from './services/auth.service';

@NgModule({
  imports: [CommonModule, AuthRoutingModule, AppSharedModule],
  declarations: [LoginComponent],
  providers: [AuthService]
})
export class AuthModule {}
