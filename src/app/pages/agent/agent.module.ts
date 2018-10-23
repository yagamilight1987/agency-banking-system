import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppSharedModule } from 'src/app/app.shared.module';
import { AgentRoutingModule } from './agent-routing.module';
import { SearchComponent } from './search/search.component';
import { ViewComponent } from './view/view.component';
import { AddEditComponent } from './add-edit/add-edit.component';

@NgModule({
  imports: [CommonModule, AgentRoutingModule, AppSharedModule],
  declarations: [SearchComponent, ViewComponent, AddEditComponent]
})
export class AgentModule {}
