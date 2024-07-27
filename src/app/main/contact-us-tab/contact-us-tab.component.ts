import { Component } from '@angular/core';
import { FormComponent } from './form/form.component';

@Component({
  selector: 'app-contact-us-tab',
  standalone: true,
  imports: [FormComponent],
  templateUrl: './contact-us-tab.component.html',
  styleUrl: './contact-us-tab.component.scss'
})
export class ContactUsTabComponent {

}
