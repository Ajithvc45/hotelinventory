import { NavigationEnd, NavigationStart, Router } from '@angular/router';
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
import { ConfigService } from './services/config.service';
import { filter } from 'rxjs';

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
              private initService:InitService,
              private configService: ConfigService,
              private router: Router){
                console.log(initService.config);
               }

  ngOnInit() {
    // this.router.events.subscribe((event) => {
    //   console.log('----------------evnt',event);
    // })

    this.router.events.pipe(
      filter((event) => event instanceof NavigationStart)
    ).subscribe((event) => {
      console.log('Navigation Started');
    });

    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd)
    ).subscribe((event) => {
      console.log('Navigation Completed');
    });

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
