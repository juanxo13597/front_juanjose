import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';

/** servicio de utilidades */
@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  /** informacion de la aplicacion */
  info = environment.info;

  /** generador de titulo para la app */
  public genTitle(titleApp: string): string {
    return this.info.nameApp + ' | ' + titleApp;
  }
}
