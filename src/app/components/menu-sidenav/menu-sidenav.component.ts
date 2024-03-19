import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

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

  menuItems = signal<MenuItem[]>([
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
      icon: 'dashboard',
      label: 'dashboard',
      route: 'dashboard',
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
  ]);

}
