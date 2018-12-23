import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AnalyticsAppComponent } from "./analytics.component";

@NgModule({
  declarations: [AnalyticsAppComponent],
  imports: [CommonModule],
  exports: [AnalyticsAppComponent],
  providers: []
})
export class AnalyticsAppModule {}
