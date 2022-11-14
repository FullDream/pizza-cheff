import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ToastEvent } from './toast.interface';

@Injectable()
export class ToastService {
  private readonly _toastEvent = new Subject<ToastEvent>();

  public get toastEvent(): Observable<ToastEvent> {
    return this._toastEvent.asObservable();
  }

  public show(message: string) {
    this._toastEvent.next({ message });
  }
}
