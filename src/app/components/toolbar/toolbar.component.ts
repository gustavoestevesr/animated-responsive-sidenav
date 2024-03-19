import { Component, EventEmitter, Input, Output, Signal, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatIconModule, MatButtonModule, MatInputModule],
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  @Input() collapsed = false;
  @Output() toggleCollapsed = new EventEmitter<void>();

  onToggleCollapsed() {
    this.toggleCollapsed.emit();
  }
}
