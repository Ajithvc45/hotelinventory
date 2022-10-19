import { InitService } from './init.service';
import { RoomsComponent } from './rooms/rooms.component';
import { Component,
         ViewChild,
         ViewContainerRef,
         AfterViewInit,
         OnInit,
         ElementRef,
         Optional, 
         Inject} from '@angular/core';
import { LoggerService } from './logger.service';
import { localStorageToken } from './localstorage.token'

@Component({
  selector: 'hinv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'hotelinventoryapp';

  @ViewChild('name', {static: true}) name!: ElementRef;

  constructor(@Optional() private loggerService: LoggerService,
              @Inject(localStorageToken) private localStorage: Storage,
              private initService:InitService){
                console.log(initService.config);
               }

  ngOnInit() {
    this.loggerService?.log('AppComponent.ngOnInit');
    this.name.nativeElement.innerText = "Hilton Hotel";

    this.localStorage.setItem('name', 'Hilton Hotel');
  }

  // @ViewChild('user', { read: ViewContainerRef } ) vcr! : ViewContainerRef;

  // role = 'Users';

  // ngAfterViewInit() {
  //   const componentRef = this.vcr.createComponent(RoomsComponent);
  //   componentRef.instance.numberOfRooms = 50;
  // }
}
