import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appEmailValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: EmailValidatorDirective,
      multi: true,
    },
  ],
})
export class EmailValidatorDirective implements Validator {
  constructor() {}

  // This validator class gives us a validator method
  // AbstractControl gives you the value of the controller
  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    const value = control.value as string;
    if(value.includes('test')){
      return {
        invalid: true
      }
    }
    return null
  }
}
