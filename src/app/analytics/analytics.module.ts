import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { CollapseModule } from "ngx-bootstrap/collapse";
import { AnalyticsAppComponent } from "./analytics.component";
import { SearchComponent } from "./search/search.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { SidebarComponent } from "./dashboard/sidebar/sidebar.component";
import { MainComponent } from "./dashboard/main/main.component";
import { WorkspacesComponent } from "./workspaces/workspaces.component";
import { ClientsComponent } from "./search/clients/clients.component";
import { FundsComponent } from "./search/funds/funds.component";
import { IndicesComponent } from "./search/indices/indices.component";
import { DatesComponent } from "./search/dates/dates.component";
import { LayoutComponent } from './layout/layout.component';
import { LayoutSectionComponent } from './layout/layout-section/layout-section.component';

@NgModule({
  declarations: [
    AnalyticsAppComponent,
    SearchComponent,
    DashboardComponent,
    SidebarComponent,
    MainComponent,
    WorkspacesComponent,
    ClientsComponent,
    FundsComponent,
    IndicesComponent,
    DatesComponent,
    LayoutComponent,
    LayoutSectionComponent
  ],
  imports: [
    CommonModule,
    BsDropdownModule.forRoot({}),
    CollapseModule.forRoot()
  ],
  exports: [AnalyticsAppComponent],
  providers: []
})
export class AnalyticsAppModule {}
