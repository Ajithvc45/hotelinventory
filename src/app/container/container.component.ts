import { EmployeeComponent } from './../employee/employee.component';
import { Component, ContentChild, OnInit, AfterContentInit, Host } from '@angular/core';
import { RoomsService } from '../rooms/services/rooms.service';

@Component({
  selector: 'hinv-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
  // providers: [RoomsService]
})
export class ContainerComponent implements OnInit {

  @ContentChild(EmployeeComponent) employee!: EmployeeComponent
  
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    console.log(this.employee);
    this.employee.empName = 'Rick';
  }  

}
