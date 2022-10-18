import { RoomsComponent } from './rooms/rooms.component';
import { Component, ViewChild, ViewContainerRef, AfterViewInit, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'hinv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'hotelinventoryapp';

  @ViewChild('name', {static: true}) name!: ElementRef;

  ngOnInit() {
    this.name.nativeElement.innerText = "Hilton Hotel";
  }

  // @ViewChild('user', { read: ViewContainerRef } ) vcr! : ViewContainerRef;

  // role = 'Users';

  // ngAfterViewInit() {
  //   const componentRef = this.vcr.createComponent(RoomsComponent);
  //   componentRef.instance.numberOfRooms = 50;
  // }
}
