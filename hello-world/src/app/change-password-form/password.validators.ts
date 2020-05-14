import {AbstractControl, ValidationErrors} from '@angular/forms';

export class PasswordValidators {
  static mustBeValid(control: AbstractControl) : Promise<ValidationErrors> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let value = control.value
        if(value != 'patate'){
          resolve({mustBeValid: true})
        }
        else {
          resolve(null)
        }
      }, 5000)
    })
  }

  static mustMatch(control: AbstractControl) : ValidationErrors {
    let newpass = control.get('new-password')
    let confirmpass = control.get('confirm-password')
    if (newpass.value != confirmpass.value){
      return {mustMatch: true}
    }
    return null
  }
}
