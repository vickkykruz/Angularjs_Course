import { Component } from '@angular/core';
import { RoomList, Rooms } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.sass']
})
export class RoomsComponent {
  // Using Interpolation Binding
  hostelName = "VickkyKruz Hotel"; // Interpolation Binding => This is used to display value to fontend

  hideRoom = false;
  rooms : Rooms = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRoom: 5
  }

  roomList : RoomList[] = [
    {
      roomNumber: 1,
      roomType: "Deluxe Room",
      amenities: "Air Condition, Free Wi-fi, Bathroom, Kitchen",
      price: 500,
      photo: "h",
      checkInTime: new Date('23-Dec-2022'),
      checkOutTime: new Date('23-Dec-2022')
    },

    {
      roomNumber: 2,
      roomType: "Deluxe Room",
      amenities: "Air Condition, Free Wi-fi, Bathroom, Kitchen",
      price: 1000,
      photo: "h",
      checkInTime: new Date('23-Dec-2022'),
      checkOutTime: new Date('23-Dec-2022')
    },

    {
      roomNumber: 3,
      roomType: "Deluxe Room",
      amenities: "Air Condition, Free Wi-fi, Bathroom, Kitchen",
      price: 1500,
      photo: "h",
      checkInTime: new Date('23-Dec-2022'),
      checkOutTime: new Date('23-Dec-2022')
    }
  ]
  numberOfRooms = 10; // Property Binding
 toogle() {
  this.hideRoom = !this.hideRoom;
 }
}
