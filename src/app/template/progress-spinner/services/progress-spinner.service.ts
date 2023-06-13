import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgressSpinnerService {

  private progressSpinnerSubject = new BehaviorSubject<boolean>(false);

  public readonly progressSpinner$: Observable<boolean> =
    this.progressSpinnerSubject.asObservable();

  public hide(): void {
    this.progressSpinnerSubject.next(false);
  }

  public show(): void {
    this.progressSpinnerSubject.next(true);
  }
}
