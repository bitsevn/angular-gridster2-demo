import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { GridsterAppComponent } from "./gridster/gridster-app.component";
import { HighchartAppComponent } from "./highcharts/highchart-app.component";
import { AnalyticsAppComponent } from "./analytics/analytics.component";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "highchart"
  },
  { path: "gridster", component: GridsterAppComponent },
  { path: "highchart", component: HighchartAppComponent },
  { path: "analytics", component: AnalyticsAppComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
