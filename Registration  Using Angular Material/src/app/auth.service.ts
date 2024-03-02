import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable
({
  providedIn: 'root',
})
export class AuthService {
  isAuthenticate: boolean = false;

  constructor(private http: HttpClient) {}
  login(email: any, password: any): Observable<boolean> {
    if (email === 'admin123@gmail.com' && password === 'admin123') {
      this.isAuthenticate = true;
      return of(true);
    }
    return of(false);
  }
}
