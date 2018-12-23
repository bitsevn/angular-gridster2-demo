import { OnInit, Component } from "@angular/core";
@Component({
  selector: "analytics-app",
  templateUrl: "./analytics.component.html",
  styleUrls: ["./analytics.component.scss"]
})
export class AnalyticsAppComponent implements OnInit {
  collapsed: boolean = true;
  sidebarOpened: boolean = false;
  ngOnInit() {}

  openNav() {
    document.getElementById("sidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    this.sidebarOpened = !this.sidebarOpened;
  }

  closeNav() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    this.sidebarOpened = !this.sidebarOpened;
  }
}
