import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ConfigService } from 'src/app/services/config.service';

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
  private fb: FormBuilder)  {} // FormBuilder => (Third Step))

  ngOnInit(): void {
    this.bookingForm = this.fb.group({
      roomid: [''],
      // Another Way To Represent this
      // roomid: new FormGroup(''),
      guestEmail: [''],
      checkinDate: [''],
      checkoutDate: [''],
      bookingStatus: [''],
      bookingAmount: [''],
      bookingDate: [''],
      mobileNumber: [''],
      guestName: [''],
      guestAddress: [''],
      guestCity: [''],
      guestState: [''],
      guestCoutry: [''],
      guestZipCode: [''],
      guestCount: [''],
      // guestList: Guest[]
    })
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
