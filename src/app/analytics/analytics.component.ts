import { OnInit, Component } from "@angular/core";
@Component({
  selector: "analytics-app",
  templateUrl: "./analytics.component.html",
  styleUrls: ["./analytics.component.scss"]
})
export class AnalyticsAppComponent implements OnInit {
  loaded: boolean = false;

  ngOnInit() {}
}
