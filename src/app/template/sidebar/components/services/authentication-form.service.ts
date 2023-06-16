import { IAuthenticationToken } from './../../../../shared/interfaces/iauthentication-token.interface';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationDataService {

  private authData: IAuthenticationToken | null = null;
  readonly notifyier = new BehaviorSubject<boolean>(true);

  getAuthData(): IAuthenticationToken | null {
    return this.authData
  }

  setAuthData(authData: IAuthenticationToken | null): void {
    this.authData = authData;
    if (authData) this.notifyier.next(true);
  }
}
