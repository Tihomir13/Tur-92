import { Component, OnInit } from '@angular/core';
import { MapComponent } from './map/map.component';

@Component({
  selector: 'app-location-tab',
  standalone: true,
  imports: [MapComponent],
  templateUrl: './location-tab.component.html',
  styleUrls: ['./location-tab.component.scss'],
})
export class LocationTabComponent implements OnInit {
  link: string = '';

  ngOnInit() {
    this.link = this.getLink();
  }

  getLink(): string {
    const googleMapsLink = 'https://www.google.com/maps?q=43.06168,25.622733';
    const mobileMapsLink = 'geo:43.06168,25.622733';

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    return isMobile ? mobileMapsLink : googleMapsLink;
  }
}
