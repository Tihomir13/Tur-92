import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CraneServicesComponent } from './crane-services/crane-services.component';
import { AutoCraneTabComponent } from './auto-crane-tab/auto-crane-tab.component';
import { LocationTabComponent } from './location-tab/location-tab.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    AboutUsComponent,
    CraneServicesComponent,
    AutoCraneTabComponent,
    LocationTabComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Tur-92';
}
