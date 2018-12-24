import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.scss"]
})
export class NavigationComponent implements OnInit {
  @Input() loaded: boolean = false;
  collapsed: boolean = true;
  sidebarOpened: boolean = false;

  constructor() {}

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
