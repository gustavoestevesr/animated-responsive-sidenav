import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ActivatedRoute, Route, Router } from '@angular/router';

export type MenuItem = {
  icon: string;
  label: string;
  route?: string;
  isActive: boolean;
}

@Component({
  selector: 'app-menu-sidenav',
  standalone: true,
  imports: [CommonModule, MatListModule, MatIconModule],
  templateUrl: './menu-sidenav.component.html',
  styleUrls: ['./menu-sidenav.component.scss']
})
export class MenuSidenavComponent {

  constructor(private router: Router) {}


  @Input() collapsed: boolean = false;

  menuItems: MenuItem[] = [
    {
      icon: 'dashboard',
      label: 'Dashboard',
      route: 'dashboard',
      isActive: true,
    },
    {
      icon: 'video_library',
      label: 'Content',
      route: 'content',
      isActive: false,
    },
    {
      icon: 'analytics',
      label: 'Analytics',
      route: 'analytics',
      isActive: false,
    },
    {
      icon: 'comment',
      label: 'Comments',
      route: 'comments',
      isActive: false,
    }
  ];

  get profilePicSize() {
    return this.collapsed ? '32' : '100';
  }

  navigateTo(item: MenuItem) {
    this.activePage(item)
    this.router.navigate([item.route])
  }

  activePage(itemTarget: MenuItem) {
    this.menuItems.forEach((item) => {
      item.isActive = false;
      if(item.label === itemTarget.label) {
        item.isActive = true;
      }
    })
  }

}
