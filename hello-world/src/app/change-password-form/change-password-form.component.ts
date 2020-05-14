import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {PasswordValidators} from './password.validators';

@Component({
  selector: 'change-password',
  templateUrl: './change-password-form.component.html',
  styleUrls: ['./change-password-form.component.css']
})
export class ChangePasswordFormComponent {
  changePassword = new FormGroup({
    'old-password': new FormControl('', [Validators.required], PasswordValidators.mustBeValid),
    'new-password': new FormControl('', [Validators.required]),
    'confirm-password': new FormControl('', [Validators.required])
  }, {validators: [PasswordValidators.mustMatch]});

  constructor() { }

  submit() {
    //submit the form...
  }

  get oldPassword() {
    return this.changePassword.get('old-password')
  }

  get newPassword() {
    return this.changePassword.get('new-password')
  }

  get confirmPassword() {
    return this.changePassword.get('confirm-password')
  }
}
