import {
  Component,
  OnInit,
  ViewChild,
  ViewChildren,
  QueryList
} from "@angular/core";
import {
  DisplayGrid,
  GridsterConfig,
  GridsterItem,
  GridType,
  GridsterComponent
} from "angular-gridster2";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  @ViewChild("outerGrid") outerGrid: GridsterComponent;
  @ViewChildren("innerGrid") innerGrids: QueryList<GridsterComponent>;

  title = "ngrx-demo";
  options: GridsterConfig;
  dashboard: GridsterItem[];
  size: string = "large";

  onSize(size: string) {
    this.size = size;
    this.innerGrids.forEach(grid => grid.options.api.resize());
    this.outerGrid.options.api.resize();
  }

  ngOnInit() {
    this.options = {
      gridType: GridType.Fit,
      displayGrid: DisplayGrid.None,
      disableWindowResize: false,
      scrollToNewItems: false,
      disableWarnings: false,
      ignoreMarginInRow: false,
      mobileBreakpoint: 100,
      margin: 4
    };

    this.dashboard = [
      {
        rows: 1,
        cols: 1,
        x: 0,
        y: 0,
        dashboard: [
          { rows: 1, cols: 1, x: 0, y: 0 },
          { rows: 1, cols: 1, x: 1, y: 0 }
        ]
      },
      {
        rows: 1,
        cols: 1,
        x: 1,
        y: 0,
        dashboard: [
          { rows: 1, cols: 1, x: 0, y: 0 },
          { rows: 1, cols: 1, x: 1, y: 0 },
          { rows: 1, cols: 1, x: 2, y: 0 }
        ]
      },
      {
        rows: 1,
        cols: 1,
        x: 2,
        y: 0,
        dashboard: [
          { rows: 1, cols: 2, x: 0, y: 0 },
          { rows: 1, cols: 1, x: 0, y: 0 },
          { rows: 1, cols: 1, x: 1, y: 0 }
        ]
      },
      {
        rows: 1,
        cols: 1,
        x: 3,
        y: 0,
        dashboard: [
          { rows: 1, cols: 3, x: 0, y: 0 },
          { rows: 1, cols: 1, x: 0, y: 0 },
          { rows: 1, cols: 1, x: 1, y: 0 },
          { rows: 1, cols: 1, x: 2, y: 0 }
        ]
      },
      {
        rows: 1,
        cols: 1,
        x: 0,
        y: 0,
        dashboard: [
          { rows: 1, cols: 1, x: 0, y: 0 },
          { rows: 1, cols: 1, x: 1, y: 0 },
          { rows: 1, cols: 1, x: 0, y: 0 },
          { rows: 1, cols: 1, x: 1, y: 0 }
        ]
      },
      {
        rows: 1,
        cols: 1,
        x: 1,
        y: 0,
        dashboard: [
          { rows: 1, cols: 2, x: 0, y: 0 },
          { rows: 1, cols: 1, x: 2, y: 0 },
          { rows: 1, cols: 1, x: 0, y: 0 },
          { rows: 1, cols: 1, x: 1, y: 0 },
          { rows: 1, cols: 1, x: 2, y: 0 }
        ]
      },
      {
        rows: 1,
        cols: 1,
        x: 2,
        y: 0,
        dashboard: [
          { rows: 1, cols: 1, x: 0, y: 0 },
          { rows: 1, cols: 1, x: 0, y: 1 }
        ]
      },
      {
        rows: 1,
        cols: 1,
        x: 3,
        y: 0,
        dashboard: [
          { rows: 1, cols: 1, x: 0, y: 0 },
          { rows: 1, cols: 1, x: 0, y: 1 },
          { rows: 1, cols: 1, x: 0, y: 2 }
        ]
      }
    ];
  }
}
