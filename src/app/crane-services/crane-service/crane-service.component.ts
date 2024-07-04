import { Component, input } from '@angular/core';

@Component({
  selector: 'app-crane-service',
  standalone: true,
  imports: [],
  templateUrl: './crane-service.component.html',
  styleUrl: './crane-service.component.scss',
})
export class CraneServiceComponent {
  title = input('');
  paragraphs = input<string[]>([]);
}
