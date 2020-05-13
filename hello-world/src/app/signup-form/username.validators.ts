import {AbstractControl, AsyncValidatorFn, ValidationErrors} from '@angular/forms';

export class UsernameValidators {
  static cannotContainSpace(control: AbstractControl) : ValidationErrors {
    if ((control.value as string).indexOf(' ') >= 0){
      return { cannotContainSpace: true }
    }

    return null
  }

  static shouldBeUnique(control: AbstractControl) : Promise<ValidationErrors> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'merk')
          resolve({shouldBeUnique: true})
        else
          resolve(null)
      }, 2000)
    })
  }
}
