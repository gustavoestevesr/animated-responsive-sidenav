import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SidebarComponent } from './components/sidenav/sidenav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ToolbarComponent, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  collapsed = false;

  onToggleCollapsed() {
    this.collapsed = !this.collapsed;
  }
}
