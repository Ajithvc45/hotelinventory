import { Injectable } from '@angular/core';
import { config, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InitService {

  config: any;

  constructor(private http: HttpClient) { }

  init() {
    return this.http.get('/assets/config.json').pipe(tap((config) => (this.config = config)));
  }
}
