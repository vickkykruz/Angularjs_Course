import { AfterContentInit, AfterViewInit, Component, DoCheck, OnInit, QueryList, SkipSelf, ViewChild, ViewChildren } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { RoomList, Rooms } from './rooms';
import { RoomsService } from './services/rooms.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.sass']
})
export class RoomsComponent implements OnInit ,DoCheck, AfterContentInit, AfterViewInit {
  // Using Interpolation Binding
  hostelName = "VickkyKruz Hotel"; // Interpolation Binding => This is used to display value to fontend

  // Using ng-model
  username: string = 'Victor';
  hideRoom = false;
  rooms : Rooms = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRoom: 5
  }
  // To asscess that Header Component
  // , {static: true}
  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent; // This ViewChild is used to access only one instance

  // While the ViewChildren is used to asscess mutiple instances
  @ViewChildren(HeaderComponent) headerChildrenComponent!: QueryList<HeaderComponent>;
  ngDoCheck(): void {
    console.log('On Changes is called');
  }



  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.headerComponent.title = "Room View"; // We can change the header component title
  }
  ngAfterViewChecked(): void {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
    this.headerComponent.title = "Room View";
  }

  ngAfterContentInit(): void {
    console.log(this.headerComponent);
  }

  // Using Depences Injection to inject the services => We Say
  // To declear the roomList
  roomList: RoomList[] = [];
  // Using SkipSelf we're saying that the angular shuld skip check of this RoomService provider
  constructor(@SkipSelf() private roomsService: RoomsService) {}

  // To get the getRooms from the service
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log(this.headerComponent);
    this.roomList  = this.roomsService.getRooms();
  }

  numberOfRooms = 10; // Property Binding


 toogle() {
  this.hideRoom = !this.hideRoom;
  this.title = "Rooms List";
 }

 selectedRoom!: RoomList;

 title: string = 'Room List';

 selectRoom(room: RoomList){
  this.selectedRoom = room;
 }

 addRoom() {
  const room: RoomList = {
    roomNumber: 4,
    roomType: "Sitting Room",
    amenities: "Televsion, Fan Chairs",
    price: 2000,
    photo: "Sitting logo",
    checkInTime: new Date('25-Dec-2022'),
    checkOutTime: new Date('26-Dec-2022'),
    rating: 4.9
  }

  // this.roomList.push(room);
  this.roomList = [...this.roomList, room];
 }
}
