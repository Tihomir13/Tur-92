import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-form',
  standalone: true,
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  imports: [ReactiveFormsModule],
})
export class FormComponent {
  form = new FormGroup({
    name: new FormControl('', { validators: [Validators.required] }),
    tel: new FormControl('', {
      validators: [Validators.minLength(10), Validators.required],
    }),
    text: new FormControl('', { validators: [Validators.required] }),
  });

  onSubmit(e: Event) {
    e.preventDefault();
    if (this.form.invalid) {
      alert('Моля, попълнете всички полета.');
      return;
    }

    emailjs
      .sendForm(
        'service_foydf48',
        'template_sqgkl9m',
        e.target as HTMLFormElement,
        'X1WZHJPMyAmfASPsJ'
      )
      .then(
        (result: EmailJSResponseStatus) => {
          console.log(result.text);
          alert('Съобщението беше изпратено успешно!');
          this.form.reset();
        },
        (error) => {
          console.log(error.text);
          alert('Възникна грешка при изпращането на съобщението.');
        }
      );
  }
}
