import { Component } from '@angular/core';
import { InfoComponent } from './info/info.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [InfoComponent, NavBarComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  infoClasses = 'col-12 my-2 col-xxl-2 my-xxl-0';
}
