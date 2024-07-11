import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AboutUsTabComponent } from './main/about-us-tab/about-us-tab.component';
import { CraneServicesTabComponent } from './main/crane-services-tab/crane-services-tab.component';
import { AutoCraneTabComponent } from './main/auto-crane-tab/auto-crane-tab.component';
import { LocationTabComponent } from './main/location-tab/location-tab.component';
import { ContactUsTabComponent } from './main/contact-us-tab/contact-us-tab.component';
import { FooterComponent } from './footer/footer.component';

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
    ContactUsTabComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Tur-92';
}
