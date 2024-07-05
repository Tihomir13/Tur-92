import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-auto-crane-tab',
  standalone: true,
  imports: [NgFor],
  templateUrl: './auto-crane-tab.component.html',
  styleUrls: ['./auto-crane-tab.component.scss'],
})
export class AutoCraneTabComponent {
  craneImgs: string[] = [
    './images/cranes/crane1.jpg',
    './images/cranes/crane2.jpg',
    './images/cranes/crane3.jpg',
  ];
  currentSlide: number = 0;

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.craneImgs.length;
  }

  prevSlide() {
    this.currentSlide =
      (this.currentSlide - 1 + this.craneImgs.length) % this.craneImgs.length;
  }
}
