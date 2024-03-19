import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
import { MenuSidenavComponent } from '../menu-sidenav/menu-sidenav.component';


@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatSidenavModule, MenuSidenavComponent],
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidebarComponent {

}
