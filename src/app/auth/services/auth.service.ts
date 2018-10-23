import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConstants } from 'src/app/app.constants';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    return this.http.post(`${AppConstants.API_BASE_URL}/api/auth/login`, {
      username: username,
      password: password
    });
  }
}
