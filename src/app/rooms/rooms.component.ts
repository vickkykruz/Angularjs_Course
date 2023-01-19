import { HttpEventType } from '@angular/common/http';
import {
  AfterContentInit,
  AfterViewInit,
  Component,
  DoCheck,
  OnInit,
  QueryList,
  SkipSelf,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { catchError, map, Observable, of, Subject, Subscription } from 'rxjs';
import { HeaderComponent } from '../header/header.component';
import { ConfigService } from '../services/config.service';
import { RoomList, Rooms } from './rooms';
import { RoomsService } from './services/rooms.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.sass'],
})
export class RoomsComponent
  implements OnInit, DoCheck, AfterContentInit, AfterViewInit
{
  // Using Interpolation Binding
  hostelName = 'VickkyKruz Hotel'; // Interpolation Binding => This is used to display value to fontend

  // Using ng-model
  username: string = 'Victor';
  hideRoom = true;
  rooms: Rooms = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRoom: 5,
  };
  // To asscess that Header Component
  // , {static: true}
  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent; // This ViewChild is used to access only one instance

  // While the ViewChildren is used to asscess mutiple instances
  @ViewChildren(HeaderComponent)
  headerChildrenComponent!: QueryList<HeaderComponent>;

  // Creating an observable using Rxjs
  stream = new Observable((observer) => {
    observer.next('User1');
    observer.next('User2');
    observer.next('User3');

    observer.complete();
    observer.error('error');
  });
  ngDoCheck(): void {
    console.log('On Changes is called');
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.headerComponent.title = 'Room View'; // We can change the header component title
  }
  ngAfterViewChecked(): void {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
    this.headerComponent.title = 'Room View';
  }

  ngAfterContentInit(): void {
    console.log(this.headerComponent);
  }

  // Using Depences Injection to inject the services => We Say
  // To declear the roomList
  roomList: RoomList[] = [];
  // Declear totalbyes
  totalBytes = 0;

  // Stream Pipes
  //  Now to avoid subscript => and i want to do this manually
  subscription!: Subscription;

  // Use of rxjs ShareReply on the component
  // rooms$ = this.roomsService.getRooms$ // This another way to display result without subscribe to it

  // So how to handle error in rxjs => catchError
  /* Note: We can't modifty a stream after subscribing to it but can be modified using pipe
    Don't write this code inside your component. it should be done inside service.ts
  */
  // How to fetech the error property one by one
  // !: => this stands for not intialize
  // error$ : Subject<string>;
  error$ = new Subject<string>();

  getError$ = this.error$.asObservable(); // Using this we are subscribe the error to display to the font-end
  rooms$ = this.roomsService.getRooms$.pipe(
    catchError((err) => {
      // console.log(err.message);
      this.error$.next(err.message);
      return of([]);
    })
  );

  // How to modify a stream using map operators
  // roomsCount$ = this.roomsService.getRooms$.pipe(
  //   // Using map operator
  //   map((rooms) => rooms.length)
  // );

  // How to create a form control => (Search)
    priceFilter = new FormControl(0)
  // Using SkipSelf we're saying that the angular shuld skip check of this RoomService provider
  constructor(
    @SkipSelf() private roomsService: RoomsService,
    private ConfigServices: ConfigService
  ) {} // Inject the Dependence Injecion provider: 'any' to see the functionalities

  // To get the getRooms from the service
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log(this.headerComponent);
    // this.roomList  = this.roomsService.getRooms();

    // To inovice the sream observables
    // this.stream.subscribe((data)=> { // You can call it mutiple times
    //   console.log(data);
    // })
    // Let call it again

    // this.stream.subscribe((data)=> { // You can call it mutiple times
    //   console.log(data);
    // })
    // Another ay to involue the stream
    this.stream.subscribe({
      next: (value) => console.log(value),
      complete: () => console.log('complete'),
      error: (err) => console.log(err),
    });

    // Using http from the service room => Get/ Read Request
    // this.roomsService.getRooms().subscribe(rooms => {
    //   this.roomList = rooms;
    // });

    // Intanse of call it as http you can call it as a stream
    // this.subscription = this.roomsService.getRooms$.subscribe(rooms => {
    //   this.roomList = rooms;
    // });

    // To invoice the http request
    this.roomsService.getPhotos().subscribe((event) => {
      // console.log(room);
      switch (event.type) {
        case HttpEventType.Sent: {
          console.log('Request has been made...');
          break;
        }

        case HttpEventType.ResponseHeader: {
          console.log('Request success');
          break;
        }

        case HttpEventType.DownloadProgress: {
          this.totalBytes += event.loaded;
          break;
        }

        case HttpEventType.Response: {
          console.log(event.body);
          break;
        }

        default:
          break;
      }
    });
  }

  numberOfRooms = 10; // Property Binding

  toogle() {
    this.hideRoom = !this.hideRoom;
    this.title = 'Rooms List';
  }

  selectedRoom!: RoomList;

  title: string = 'Room List';

  selectRoom(room: RoomList) {
    this.selectedRoom = room;
  }

  addRoom() {
    //  Declear it
    const room: RoomList = {
      roomNumber: '4',
      roomType: 'Sitting Room',
      amenities: 'Televsion, Fan Chairs',
      price: 2000,
      photo: 'Sitting logo',
      checkInTime: new Date('25-Dec-2022'),
      checkOutTime: new Date('26-Dec-2022'),
      rating: 4.9,
    };

    // To add the room
    // this.roomList.push(room);
    // this.roomList = [...this.roomList, room];

    // Add the room using http request
    this.roomsService.addRooms(room).subscribe((data) => {
      this.roomList = data;
    });
  }

  //  Edit Room
  editRoom() {
    // Declear the data
    const room: RoomList = {
      roomNumber: '3',
      roomType: 'Sitting Room',
      amenities: 'Televsion, Fan Chairs',
      price: 2000,
      photo: 'Sitting logo',
      checkInTime: new Date('25-Dec-2022'),
      checkOutTime: new Date('26-Dec-2022'),
      rating: 4.9,
    };

    // To invoice or call this
    this.roomsService.editRoom(room).subscribe((data) => {
      this.roomList = data;
    });
  }

  // Delete http
  deleteRoom() {
    this.roomsService.delete('3').subscribe((data) => {
      this.roomList = data;
    });
  }

  ngOnDestroy(): void {
    //it means whenevr this component get destory it go ahead an destroy the subscription
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.

    if (this.subscription) {
      // This means if there any active subscription it should go ahead an unsubscribe
      this.subscription.unsubscribe();
    }
  }

  //  getData -> addDate -> getDate
  //  getData -> continous stream of Data -> addData // so whenever we update the stream we get the lastest data
}
