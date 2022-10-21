import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ConfigService } from '../services/config.service';

@Component({
  selector: 'hinv-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  bookingForm!: FormGroup;

  constructor(private configService: ConfigService,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.bookingForm = this.fb.group({
  roomId: new FormControl({ value: '2', disabled: true }),
  guestEmail: [''],
  checkinDate: [''],
  checkoutDate: [''],
  bookingStatus: [''],
  bookingAmount: [''],
  bookingDate: [''],
  mobileNumber: [''],
  guestName: [''],
  address: this.fb.group({
    AddressLine1: [''],
    AddressLine2: [''],
    City: [''],
    State: [''],
    Country: [''],
    ZipCode: [''],
  }),
  guestCount: [''],
    });
  }

  addBooking() {
    console.log(this.bookingForm.getRawValue());
    
  }

}
