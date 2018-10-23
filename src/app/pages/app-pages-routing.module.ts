import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
        data: {
          title: 'Dashboard',
          breadcrumb: ['Home', 'Dashboard']
        }
      },
      {
        path: 'agent',
        loadChildren: 'src/app/pages/agent/agent.module#AgentModule'
      },
      {
        path: 'customer',
        loadChildren: 'src/app/pages/customer/customer.module#CustomerModule'
      },
      {
        path: 'transaction',
        loadChildren:
          'src/app/pages/transaction/transaction.module#TransactionModule'
      },
      {
        path: 'approval',
        loadChildren: 'src/app/pages/approval/approval.module#ApprovalModule'
      },
      // {
      //   path: 'report',
      //   loadChildren: 'src/app/pages/report/report.module#ReportModule'
      // },
      {
        path: 'system-setting',
        loadChildren:
          'src/app/pages/system-setting/system-setting.module#SystemSettingModule'
      },
      {
        path: 'user',
        loadChildren: 'src/app/pages/user/user.module#UserModule'
      },
      {
        path: 'role',
        loadChildren: 'src/app/pages/role/role.module#RoleModule'
      },
      {
        path: 'picklist',
        loadChildren: 'src/app/pages/picklist/picklist.module#PicklistModule'
      },
      {
        path: 'currency',
        loadChildren: 'src/app/pages/currency/currency.module#CurrencyModule'
      },
      {
        path: 'audit',
        loadChildren: 'src/app/pages/audit/audit.module#AuditModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppPagesRoutingModule {}
