import { Component } from '@angular/core';
import { sidebarItems } from './sidebarItems';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  sidebarItems = sidebarItems;
}
