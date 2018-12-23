import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { GridsterAppModule } from "./gridster/gridster-app.module";
import { HighchartAppModule } from "./highcharts/highchart-app.module";
import { AnalyticsAppModule } from "./analytics/analytics.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GridsterAppModule,
    HighchartAppModule,
    AnalyticsAppModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
