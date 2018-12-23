import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GridsterModule } from "angular-gridster2";

import { GridsterAppComponent } from "./gridster-app.component";

@NgModule({
  declarations: [GridsterAppComponent],
  imports: [CommonModule, GridsterModule],
  exports: [GridsterAppComponent],
  providers: []
})
export class GridsterAppModule {}
