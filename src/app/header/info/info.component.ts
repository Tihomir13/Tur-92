import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [],
  templateUrl: './info.component.html',
  styleUrl: './info.component.scss',
})
export class InfoComponent {
  title = input<string>();
  image = input<string>();
  info = input<string>();
}
