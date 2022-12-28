import { Component, OnInit, Self } from '@angular/core';
import { RoomsService } from '../rooms/services/rooms.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.sass'],
  providers: [RoomsService]
})
export class EmployeeComponent implements OnInit {
  // Resolution Modifies
  // 1. Self => How to intilize Self Decorator. Using Self we're saying thi service should be avaliable @ dis particular level
  // It is not avaliable we should through an aspection (The RoomSevice provider should be avaliable here).
  // constructor(@Self() private roomsServices : RoomsService) {}
  constructor(private roomsServices : RoomsService) {}
  ngOnInit(): void {

  }
  // Add Property
  employName: string = "John";
}
