import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';

/** servicio de utilidades */
@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  /** informacion de la aplicacion */
  info = environment.info;
}
