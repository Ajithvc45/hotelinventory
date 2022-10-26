import { ActivatedRoute } from '@angular/router';
import { BookingService } from './booking.service';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  FormArray,
  Validators,
} from '@angular/forms';
import { ConfigService } from '../services/config.service';
import { exhaustMap, mergeMap, switchMap } from 'rxjs';
import { CustomValidator } from './validators/custom-validator';

@Component({
  selector: 'hinv-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
})
export class BookingComponent implements OnInit {
  bookingForm!: FormGroup;

  get guests() {
    return this.bookingForm.get('guests') as FormArray;
  }

  constructor(
    private configService: ConfigService,
    private fb: FormBuilder,
    private bookingService: BookingService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const roomId = this.route.snapshot.paramMap.get('roomid');
    this.bookingForm = this.fb.group(
      {
        roomId: new FormControl(
          { value: roomId, disabled: true },
          { validators: [Validators.required] }
        ),
        guestEmail: [
          '',
          {
            updateOn: 'blur',
            validators: [Validators.required, Validators.email],
          },
        ],
        checkinDate: [''],
        checkoutDate: [''],
        bookingStatus: [''],
        bookingAmount: [''],
        bookingDate: [''],
        mobileNumber: [
          '',
          {
            updateOn: 'blur',
          },
        ],
        guestName: ['', [Validators.required,
          Validators.minLength(5),
          CustomValidator.ValidateName,
          CustomValidator.ValidateSpecialChar('*')]],
        address: this.fb.group({
          AddressLine1: ['', { validators: [Validators.required] }],
          AddressLine2: [''],
          City: ['', { validators: [Validators.required] }],
          State: ['', { validators: [Validators.required] }],
          Country: [''],
          ZipCode: [''],
        }),
        guests: this.fb.array([
          this.fb.group({ guestName: [''], age: new FormControl('') }),
        ]),
        tnc: new FormControl(false, { validators: [Validators.requiredTrue] }),
      },{ updateOn: 'blur', validators: [CustomValidator.validatedate] });
        
    this.getBookingData();

    // this.bookingForm.valueChanges.subscribe((data) => {
    //   this.bookingService.bookRoom(data).subscribe((data) => {})
    // });

    this.bookingForm.valueChanges.pipe(
      exhaustMap((data) => this.bookingService.bookRoom(data))
    ).subscribe((data) => console.log(data));
  }

  addBooking() {
    console.log(this.bookingForm.getRawValue());
    // this.bookingService
    //   .bookRoom(this.bookingForm.getRawValue())
    //   .subscribe((data) => {
    //     console.log(data);
    //   });
    this.bookingForm.reset({
      // roomId: '2',
      guestEmail: '',
      checkinDate: '',
      checkoutDate: '',
      bookingStatus: '',
      bookingAmount: '',
      bookingDate: '',
      mobileNumber: '',
      guestName: '',
      address: {
        AddressLine1: '',
        AddressLine2: '',
        City: '',
        State: '',
        Country: '',
        ZipCode: '',
      },
      guests: [],
      tnc: false,
    });
  }

  getBookingData() {
    this.bookingForm.patchValue({
      // roomId: '2',
      guestEmail: 'test@gmail.com',
      checkinDate: new Date('25-Oct-2022'),
      bookingStatus: '',
      bookingAmount: '',
      bookingDate: '',
      mobileNumber: '',
      guestName: '',
      address: {
        AddressLine1: '',
        AddressLine2: '',
        City: '',
        State: '',
        Country: '',
        ZipCode: '',
      },
      guests: [],
      tnc: false,
    });
  }

  addGuest() {
    this.guests.push(
      this.fb.group({
        guestName: ['', { validators: [Validators.required] }],
        age: new FormControl(''),
      })
    );
  }

  addPassport() {
    this.bookingForm.addControl('passport', new FormControl(''));
  }

  deletePassport() {
    if (this.bookingForm.get('passport')) {
      this.bookingForm.removeControl('passport');
    }
  }

  removeGuest(i: number) {
    this.guests.removeAt(i);
  }
}
