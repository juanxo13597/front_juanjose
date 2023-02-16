import { environment } from './../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

/** servicio principal */
@Injectable({
  providedIn: 'root',
})
export class AppService {
  /** constructor */
  constructor(private http: HttpClient) {}

  /** primera llamada a back */
  init(): Observable<boolean> {
    return this.http.get<boolean>(environment.api + 'init');
  }
}
