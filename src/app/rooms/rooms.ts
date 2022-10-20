export interface Room {
  totalRooms: number; // Interface
  availableRooms: number;
  bookedRooms: number;
}

export interface RoomList {
  // Event?: string,
  roomNumber?: string;
  roomType: string;
  amenities: string;
  price: number;
  photos: string;
  checkinTime: Date;
  checkoutTime: Date;
  rating: number;
}
