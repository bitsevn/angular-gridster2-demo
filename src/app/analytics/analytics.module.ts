import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { CollapseModule } from "ngx-bootstrap/collapse";
import { AnalyticsAppComponent } from "./analytics.component";

@NgModule({
  declarations: [AnalyticsAppComponent],
  imports: [
    CommonModule,
    BsDropdownModule.forRoot({}),
    CollapseModule.forRoot()
  ],
  exports: [AnalyticsAppComponent],
  providers: []
})
export class AnalyticsAppModule {}
