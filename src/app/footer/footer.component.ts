import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../common/components/button/button.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ValidationMessageComponent } from '../common/components/validation-message/validation-message.component';
import { RestrictInputDirective } from '../common/directives/restrict-input.directive';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
    ReactiveFormsModule,
    ValidationMessageComponent,
    RestrictInputDirective,
  ],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  public form = new FormGroup({
    name: new FormControl('', { validators: Validators.required }),
    phone: new FormControl('', { validators: Validators.required }),
    address: new FormControl('', { validators: Validators.required }),
  });
  public get name() {
    return this.form.get('name');
  }
  public get phone() {
    return this.form.get('phone');
  }
  public get address() {
    return this.form.get('address');
  }

  public onSubmit() {
    console.log(this.form.value);
  }
}
