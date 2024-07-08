import { Component } from '@angular/core';
import { MapComponent } from './map/map.component';

@Component({
  selector: 'app-location-tab',
  standalone: true,
  imports: [MapComponent],
  templateUrl: './location-tab.component.html',
  styleUrl: './location-tab.component.scss',
})
export class LocationTabComponent {
  link = 'https://www.google.com/maps?q=43.06168,25.622733';
}
