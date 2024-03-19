import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
import { MenuSidenavComponent } from '../menu-sidenav/menu-sidenav.component';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatSidenavModule, MenuSidenavComponent, MenuSidenavComponent],
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidebarComponent {
  @Input() collapsed: boolean = false;
  @Output() toggleCollapsed = new EventEmitter<void>();

  onToggleCollapsed() {
    this.toggleCollapsed.emit();
  }

  sidenavWidth() {
    return this.collapsed ? '65px' : '250px';
  }
}
