import { Component, OnInit } from '@angular/core';
import { navbarData } from './nav-data';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  collapsed = true;
  navData = navbarData;
  //icons
  faX = faX;
  faBars = faBars;

  toggleCollapse() {
    this.collapsed = !this.collapsed;
  }
  closeSideNav() {
    this.collapsed = false;
  }
}
