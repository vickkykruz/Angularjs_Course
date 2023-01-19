import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RoomList } from '../rooms/rooms';
import { RoomsService } from '../rooms/services/rooms.service';

@Component({
  selector: 'app-rooms-add',
  templateUrl: './rooms-add.component.html',
  styleUrls: ['./rooms-add.component.sass']
})
export class RoomsAddComponent implements OnInit {

  // WE create an intaface model to store the input data
  rooms : RoomList = {
    roomNumber: '',
    roomType: '',
    amenities: '',
    photo: '',
    price: 0,
    checkInTime: new Date(),
    checkOutTime: new Date(),
    rating: 0
  };

  successMessage !: string;

  constructor(private roomService: RoomsService) {}

  ngOnInit(): void {}

  // So passing NgForm libray to the argument roomsForm
  AddRoom(roomsForm: NgForm) {
    this.roomService.addRooms(this.rooms).subscribe((rooms)=> {
      this.successMessage = 'Rooms Added Successfully';
      // roomsForm.reset(); //call the reset method
      // another way
      roomsForm.resetForm({
        roomNumber: '',
        roomType: '',
        amenities: '',
        photo: '',
        price: 0,
        checkInTime: new Date(),
        checkOutTime: new Date(),
        rating: 0
      })
    })
  }
}
