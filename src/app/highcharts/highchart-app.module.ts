import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HighchartAppComponent } from "./highchart-app.component";

@NgModule({
  declarations: [HighchartAppComponent],
  imports: [CommonModule],
  exports: [HighchartAppComponent],
  providers: []
})
export class HighchartAppModule {}
