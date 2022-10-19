import { AppConfig } from './../../AppConfig/appconfig.interface';
import { RoomList } from './../rooms';
import { Inject, Injectable } from '@angular/core';
import { APP_SERVICE_CONFIG } from '../../AppConfig/appconfig.service';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { shareReplay } from 'rxjs';
// import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  roomList: RoomList[] = []

  getRooms$ = this.http.get<RoomList[]>('http://localhost:3000/api/rooms').pipe(
    shareReplay(1)
  );
  
  constructor(@Inject(APP_SERVICE_CONFIG) private config:AppConfig, private http:HttpClient) {
    console.log(this.config.apiEndpoint);
    console.log('Rooms service Initialized...');
   }

  getRooms() {
  //  return this.roomList;
  return this.http.get<RoomList[]>('http://localhost:3000/api/rooms');
  }

  addRoom(room: RoomList) {
    return this.http.post<RoomList[]>('http://localhost:3000/api/rooms', room);
  }

  editRoom(room: RoomList) {
    return this.http.put<RoomList[]>(`http://localhost:3000/api/rooms/${room.roomNumber}`, room);
  }

  delete(id: string) {
    return this.http.delete<RoomList[]>(`http://localhost:3000/api/rooms/${id}`);
  }

  getPhotos() {
    const request = new HttpRequest('GET',`https://jsonplaceholder.typicode.com/photos`, {
      reportProgress: true,
    });
    return this.http.request(request);
  }
}
