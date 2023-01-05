import { HttpClient, HttpRequest } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { shareReplay } from 'rxjs';
import { ApiConfig } from 'src/app/ApiConfig/apiconfig.interface';
import { APP_SERVICE_CONFIG } from 'src/app/ApiConfig/apiconfig.service';
import { RoomList } from '../rooms';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  roomList : RoomList[] = [
    {
      roomNumber: '1',
      roomType: "Deluxe Room",
      amenities: "Air Condition, Free Wi-fi, Bathroom, Kitchen",
      price: 500,
      photo: "h",
      checkInTime: new Date('23-Dec-2022'),
      checkOutTime: new Date('23-Dec-2022'),
      rating: 4.55678
    },

    {
      roomNumber: '2',
      roomType: "Deluxe Room",
      amenities: "Air Condition, Free Wi-fi, Bathroom, Kitchen",
      price: 1000,
      photo: "h",
      checkInTime: new Date('23-Dec-2022'),
      checkOutTime: new Date('23-Dec-2022'),
      rating: 2.6
    },

    {
      roomNumber: '3',
      roomType: "Deluxe Room",
      amenities: "Air Condition, Free Wi-fi, Bathroom, Kitchen",
      price: 1500,
      photo: "h",
      checkInTime: new Date('23-Dec-2022'),
      checkOutTime: new Date('23-Dec-2022'),
      rating: 5.2
    }
  ]


  
  // Uses of Rxjs Operation 
  // ShareReplay
  getRooms$ = this.http.get<RoomList[]>('api/v1/rooms').pipe(
    shareReplay(1)
  )

  // To inject the service from app module
  // Before we say private roomsServe: RoomService , but based is registed in the app module we say
  // So to initilize or use http service
  constructor(@Inject(APP_SERVICE_CONFIG) private config: ApiConfig,
  private http: HttpClient) {
    console.log(config.apiEndpoint);

    console.log("Room Service Initalizing...");
  }

  getRooms() {

    // return this.roomList;
     // Get Method is Read
    // return this.http.get<RoomList[]>('/src/app/rooms')
    return this.http.get<RoomList[]>('api/v1/rooms');
  }
  // Create or send POST request.
  addRooms(room: RoomList) {
    return this.http.post<RoomList[]>('api/v1/rooms', room)
  }

  // Edit the http request
  editRoom(room: RoomList) {
    return this.http.put<RoomList[]>(`api/v1/rooms/${room.roomNumber}`, room);
  }

  // Delete The request
  delete(id: string) {
    return this.http.delete<RoomList[]>(`api/v1/rooms/${id}`);
  }

  // To create a HTTP Resquest API Call
  // First thing wiil do is to create a request
  getPhotos() {
    const request = new HttpRequest('GET', `https://jsonplaceholder.typicode.com/photos`, { // Pass some configuration
      reportProgress: true
    });
    return this.http.request(request);
  }
}
