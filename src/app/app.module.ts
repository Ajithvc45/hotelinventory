import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomsComponent } from './rooms/rooms.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RoomsListComponent } from './rooms/rooms-list/rooms-list.component';
import { HeaderComponent } from './header/header.component';
import { ContainerComponent } from './container/container.component';

@NgModule({
  declarations: [AppComponent, RoomsComponent, RoomsListComponent, HeaderComponent, ContainerComponent],
  imports: [BrowserModule, AppRoutingModule, CommonModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
