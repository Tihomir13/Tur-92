import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AboutUsTabComponent } from './about-us-tab/about-us-tab.component';
import { CraneServicesTabComponent } from './crane-services-tab/crane-services-tab.component';
import { AutoCraneTabComponent } from './auto-crane-tab/auto-crane-tab.component';
import { LocationTabComponent } from './location-tab/location-tab.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    AboutUsTabComponent,
    CraneServicesTabComponent,
    AutoCraneTabComponent,
    LocationTabComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Tur-92';
}
