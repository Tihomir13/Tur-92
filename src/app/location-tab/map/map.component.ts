import { Component, OnInit } from '@angular/core';

import Map from 'ol/Map';
import View from 'ol/View';
import { OSM } from 'ol/source';
import Tile from 'ol/layer/Tile';
import { useGeographic } from 'ol/proj';
import { Feature } from 'ol';
import { Point } from 'ol/geom';
import VectorSource from 'ol/source/Vector';
import VectorLayer from 'ol/layer/Vector';
import Style from 'ol/style/Style';
import Icon from 'ol/style/Icon';

@Component({
  selector: 'app-map',
  standalone: true,
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  public map!: Map;
  centerCoords: any;

  constructor() {
    useGeographic();
  }

  ngOnInit(): void {
    const markerStyle = new Style({
      image: new Icon({
        anchor: [0.5, 1],
        src: 'https://openlayers.org/en/latest/examples/data/icon.png',
        size: [32, 48],
        scale: 1.5,
      }),
    });

    const marker = new Feature({
      geometry: new Point([25.622733, 43.06168]),
    });

    marker.setStyle(markerStyle);

    const vectorSource = new VectorSource({
      features: [marker],
    });

    const vectorLayer = new VectorLayer({
      source: vectorSource,
    });

    this.map = new Map({
      layers: [
        new Tile({
          source: new OSM(),
        }),
        vectorLayer, // Добавяме векторния слой тук
      ],
      target: 'map',
      view: new View({
        center: [25.622733, 43.06168],
        zoom: 16,
        maxZoom: 18,
      }),
    });
  }
}