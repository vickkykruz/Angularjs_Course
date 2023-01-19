import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { exhaustMap, mergeMap, switchMap } from 'rxjs';
import { ConfigService } from 'src/app/services/config.service';
import { BookingService } from './booking.service';
import { CustomValidator } from './validators/CustomValidator';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.sass']
})
export class BookingComponent implements OnInit {


  // How to create the reactive form
  // Using class formGroup to add multiple control
  bookingForm!: FormGroup; // FormGroup => (Second Step)


  // Next step ins to add the control
  constructor(private ConfigServices: ConfigService,
  private fb: FormBuilder, // FormBuilder => (Third Step))
  private bookingService: BookingService, // Inject the http BookingService
  private route: ActivatedRoute)  {} 

  ngOnInit(): void {
    // Anther way to fetch the id is using snapshote
    const roomId = this.route.snapshot.paramMap.get('roomsid')
    this.bookingForm = this.fb.group({
      // roomid: [''],
      // Another Way To Represent this annd also to assign the value directly and disable it
      // To apply custom validator => CustomValidation.ValidatorName  
      roomid: new FormControl({value: roomId, disabled: true}, {validators: [Validators.required]}), // To validate
      // roomid: new FormControl(''),
      // For value Chages inside control => 'blur' is an event begin called when you moved out of the control
      guestEmail: ['', {updateOn: 'blur', validators: [Validators.required, Validators.email]}],
      checkinDate: [''],
      checkoutDate: [''],
      bookingStatus: [''],
      bookingAmount: [''],
      bookingDate: [''],
      mobileNumber: [''],
      guestName: ['', [Validators.required, Validators.minLength(5), CustomValidator.ValidateName, CustomValidator.ValidateSpecialCharaters('@')]],
      // To create a  nexting for +. we assign anither formBuilder (e.g)
      address: this.fb.group({
        addressLine1: ['', {validators: [Validators.required]}],
        addressLine2: ['', {validators: [Validators.required]}],
        city: [''],
        state: [''],
        coutry: [''],
        zipCode: [''],
      }),
      // To add Control Dynamically
      guests: this.fb.array([this.addGuestControl()]),
      tnc: new FormControl(false, {validators: [Validators.requiredTrue]}),
      guestCount: [''],
      // guestList: Guest[]
    },
    // // To do the for the whole form control (Value Changes)
    { updateOn: 'blur', validators: [CustomValidator.ValidateDate]}
    )

    // call the setValue
    // NOTE: SetValue is needed to pass the value of every control.
    // PatchValue allow us to skip control
    this.getBookingForm();

    // To Listening to form value changes => Using this can be a little bit slower in validation so there is another way
    // to do this inside the control
    // this.bookingForm.valueChanges.subscribe((data) => {
    //   // console.log(data);
    //   // To render the submit method
    //   // this.bookingService.bookRoom(data).subscribe((data) => {}) This is not recommanded
    // })

    this.bookingForm.valueChanges.pipe(
    //   mergeMap((data) => this.bookingService.bookRoom(data))
    // ).subscribe((data)=> {console.log(data)})

    // For SwitchMap
    // SwitchMap will cancel and existing resquest if it recive a new data
    // switchMap((data) => this.bookingService.bookRoom(data))
    // ).subscribe((data)=> {console.log(data)})

    // For exhaustMap
    // exhaustMap:: Unles the previous request is not complete don't subscript to the lastest changes
    exhaustMap((data) => this.bookingService.bookRoom(data))
    ).subscribe((data)=> {console.log(data)})
  }

  addBooking() {
    // To get the value
    // console.log(this.bookingForm.value);
    console .log(this.bookingForm.getRawValue()) // this give you the value which are in disabled state

    // To this to http service
    // this.bookingService.bookRoom(this.bookingForm.getRawValue()).subscribe((data) => {

    // })
    // To reset the form after submition and you can prodive the value of every input
    this.bookingForm.reset({
      roomid: '', // To validate
      // roomid: new FormControl(''),
      guestEmail: '',
      checkinDate: '',
      checkoutDate: '',
      bookingStatus: '',
      bookingAmount: '',
      bookingDate: '',
      mobileNumber: '',
      guestName: '',
      // To create a  nexting for +. we assign anither formBuilder (e.g)
      address: this.fb.group({
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: '',
        coutry: '',
        zipCode: '',
      }),
      // To add Control Dynamically
      guests: [],
      tnc: false,
      guestCount: '',
    });
  }


  // SetValue Vs PatchValue => Resume This form is comming from an API (how to do it)
  getBookingForm() {
    // Let say this iis comming from backend
    // this.bookingForm.setValue({
    this.bookingForm.patchValue({
      // roomid: '2', // To validate
      // roomid: new FormControl(''),
      guestEmail: 'test@test.com',
      checkinDate: new Date('10-Feb-2023'),
      checkoutDate: '',
      bookingStatus: '',
      bookingAmount: '',
      bookingDate: '',
      mobileNumber: '',
      guestName: '',
      // To create a  nexting for +. we assign anither formBuilder (e.g)
      address: this.fb.group({
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: '',
        coutry: '',
        zipCode: '',
      }),
      // To add Control Dynamically
      guests: [],
      tnc: false,
      guestCount: ''
    })
  }

  // To implement the addGuests metthod we nned to implements the get property first
  get guest() {
    return this.bookingForm.get('guests') as FormArray;
  }
  addGuest() {
    this.guest.push(
      // This code the same with the bookimgForm.guest to reforctor it clicke the right button of the mouse and enter refactor
    //   this.fb.group({
    //     guestName: [''],
    //     age: new FormControl('')
    // })
    // Refactor it
    this.addGuestControl()
    );
  }

  addGuestControl() {
    return this.fb.group({
      guestName: ['', {validators: [Validators.required]}],
      age: new FormControl('', {validators: [Validators.required]})
    });
  }
  // To remove Guest
  removeGuest(i: number) {
    this.guest.removeAt(i);
  }

  // To Implements the app passport
  // This can be used to add input fields  ::: Control name is == passport ==
  addPassport() {
    this.bookingForm.addControl('passport', new FormControl(''));
  }

  // To delet controler
  deletePassport() {
    if(this.bookingForm.get('passport')){
      this.bookingForm.removeControl('passport');
    }
  }
}

// FormControl => (First Thing)
// export class Booking {
//   roomid!: [string;
//   guestEmail!: string;
//   checkinDate!: Date;
//   checkoutDate!: Date;
//   bookingStatus!: string;
//   bookingAmount!: number;
//   bookingDate!: Date;
//   mobileNumber!: number;
//   guestName!: string;
//   guestAddress!: string;
//   guestCity!: string;
//   guestState!: string;
//   guestCoutry!: string;
//   guestZipCode!: string;
//   guestCount!: number;
//   guestList!: Guest[];
// }
