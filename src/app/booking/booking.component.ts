import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
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
  roomId: [''],
  guestEmail: [''],
  checkinDate: [''],
  checkoutDate: [''],
  bookingStatus: [''],
  bookingAmount: [''],
  bookingDate: [''],
  mobileNumber: [''],
  guestName: [''],
  guestAddress: [''],
  guestCity: [''],
  guestState: [''],
  guestCountry: [''],
  guestZipCode: [''],
  guestCount: [''],
    })
  }

}
