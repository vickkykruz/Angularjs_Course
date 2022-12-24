export interface Rooms {
  totalRooms: number,
  availableRooms: number;
  bookedRoom: number;
}

export interface RoomList {
  roomNumber: number,
  roomType: string;
  amenities: string;
  price: number;
  photo: string;
  checkInTime: Date;
  checkOutTime: Date;
}
