import { RoomList } from './rooms';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(rooms: RoomList[], price: number): RoomList[] {
    return rooms.filter((room) => room.price > price)
  }

}
