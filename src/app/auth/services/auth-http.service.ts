import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { loginModel, loginModelResponse } from '../models/login.model';
import { registerModel } from '../models/register.model';
import { environment } from './../../../environments/environment';
import { registerModelResponse } from './../models/register.model';

/** auth http */
@Injectable({
  providedIn: 'root',
})
export class AuthHttpService {
  /** constructor */
  constructor(private http: HttpClient) {}

  /** http de registro */
  register(user: registerModel): Observable<registerModelResponse> {
    return this.http.post<registerModelResponse>(
      environment.api + 'auth/register',
      user
    );
  }

  /** http de login */
  login(user: loginModel): Observable<loginModelResponse> {
    return this.http.post<loginModelResponse>(
      environment.api + 'auth/login',
      user
    );
  }
}
