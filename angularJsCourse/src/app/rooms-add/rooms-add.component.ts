import { Component, OnInit } from '@angular/core';
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
    rating: 0,
  };

  successMessage !: string;

  constructor(private roomService: RoomsService) {}

  ngOnInit(): void {}

  AddRoom() {
    this.roomService.addRooms(this.rooms).subscribe((rooms)=> {
      this.successMessage = 'Rooms Added Successfully';
    })
  }
}
