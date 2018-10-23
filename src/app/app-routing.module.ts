import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginGaurd, AuthGaurd } from './gaurds';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: 'src/app/auth/auth.module#AuthModule',
    canActivate: [LoginGaurd]
  },
  {
    path: 'landing',
    loadChildren: 'src/app/pages/app-pages.module#AppPagesModule',
    canActivate: [AuthGaurd],
  },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
