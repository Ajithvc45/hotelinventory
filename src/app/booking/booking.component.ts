import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray } from '@angular/forms';
import { ConfigService } from '../services/config.service';

@Component({
  selector: 'hinv-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  bookingForm!: FormGroup;

  get guests() {
   return this.bookingForm.get('guests') as FormArray;
  }

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
  guests: this.fb.array([
    this.fb.group({ guestName: [''], age: new FormControl('')})
  ]),
    });
  }

  addBooking() {
    console.log(this.bookingForm.getRawValue());
    
  }

  addGuest() {
    this.guests.push(
      this.fb.group({ guestName: [''], age: new FormControl('')})
    );
  }

  addPassport() {
    this.bookingForm.addControl('passport', new FormControl(''));
  }

  deletePassport() {
    if(this.bookingForm.get('passport')) {
      this.bookingForm.removeControl('passport');
    }
  }

  removeGuest(i:number) {
    this.guests.removeAt(i);
  }

}
