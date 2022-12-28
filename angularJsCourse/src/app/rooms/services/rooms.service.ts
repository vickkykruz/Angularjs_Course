import { Injectable } from '@angular/core';
import { RoomList } from '../rooms';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  roomList : RoomList[] = [
    {
      roomNumber: 1,
      roomType: "Deluxe Room",
      amenities: "Air Condition, Free Wi-fi, Bathroom, Kitchen",
      price: 500,
      photo: "h",
      checkInTime: new Date('23-Dec-2022'),
      checkOutTime: new Date('23-Dec-2022'),
      rating: 4.55678
    },

    {
      roomNumber: 2,
      roomType: "Deluxe Room",
      amenities: "Air Condition, Free Wi-fi, Bathroom, Kitchen",
      price: 1000,
      photo: "h",
      checkInTime: new Date('23-Dec-2022'),
      checkOutTime: new Date('23-Dec-2022'),
      rating: 2.6
    },

    {
      roomNumber: 3,
      roomType: "Deluxe Room",
      amenities: "Air Condition, Free Wi-fi, Bathroom, Kitchen",
      price: 1500,
      photo: "h",
      checkInTime: new Date('23-Dec-2022'),
      checkOutTime: new Date('23-Dec-2022'),
      rating: 5.2
    }
  ]
  constructor() {
    console.log();

    console.log("Room Service Initalizing...");
  }

  getRooms() {
    return this.roomList;
  }
}
