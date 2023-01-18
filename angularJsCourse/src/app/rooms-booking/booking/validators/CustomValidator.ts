import { AbstractControl, FormGroup } from "@angular/forms";

export class CustomValidator {

  // CustomValidtor in Reactive Form
  static ValidateName(control: AbstractControl){ // Abstaracte contol is based class from evrything (From FormGroup,
  // FormArray etc). Ho do this => This is to pass the word directly
    const value = control.value as string;
    // To value the in if test is there
    if(value.includes('test')){
      return {
        invalidName : true
        // ValidateName: {
        //   vaild: false
        // }
      }
    }
    return null
  }

  // Anther way is to return the function
  static ValidateSpecialCharaters(char: string){
    return (control: AbstractControl) => {
      const specialCharaters = control.value as string;

      if(specialCharaters.includes(char)){
        return{
          invalid: true
        }   
      }
      return null;
    }
  }

  // To validate the  checkoutdate from begin less than checkindate
  static ValidateDate(control: FormGroup){
    const checkInDate: any = new Date(control.get('checkinDate')?.value);
    const checkoutdate: any = new Date(control.get('checkoutDate')?.value);

    const dayTime = checkoutdate - checkInDate ;
    const diffDays = Math.ceil(dayTime/ (1000 * 60 * 60 * 24));

    console.log(diffDays);
    console.log(dayTime);
    if(diffDays <= 0) {
      // To do this
      control.get('checkoutDate')?.setErrors({
        invailDate: true
      })
      return {
        invalid: true
      }
    }
    return null;
  }
}
