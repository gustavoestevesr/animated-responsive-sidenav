import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { Router } from '@angular/router';

export type MenuItem = {
  icon: string;
  label: string;
  route?: string;
}

@Component({
  selector: 'app-menu-sidenav',
  standalone: true,
  imports: [CommonModule, MatListModule, MatIconModule],
  templateUrl: './menu-sidenav.component.html',
  styleUrls: ['./menu-sidenav.component.scss']
})
export class MenuSidenavComponent {

  constructor(public router: Router) {}

  @Input() collapsed: boolean = false;

  menuItems: MenuItem[] = [
    {
      icon: 'dashboard',
      label: 'Dashboard',
      route: 'dashboard',
    },
    {
      icon: 'video_library',
      label: 'Content',
      route: 'content',
    },
    {
      icon: 'analytics',
      label: 'Analytics',
      route: 'analytics',
    },
    {
      icon: 'comment',
      label: 'Comments',
      route: 'comments',
    }
  ];

  get profilePicSize() {
    return this.collapsed ? '32' : '100';
  }

}
