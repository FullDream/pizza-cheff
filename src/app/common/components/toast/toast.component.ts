import { trigger, transition, style, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { mergeMap, tap, timeout, timer } from 'rxjs';
import { ToastEvent } from './toast.interface';
import { ToastService } from './toast.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
  animations: [
    trigger('enterLeave', [
      transition(':enter', [
        style({ top: '-100%' }),
        animate('500ms', style({ top: 0 })),
      ]),
      transition(':leave', [animate('500ms', style({ right: -500 }))]),
    ]),
  ],
})
export class ToastComponent implements OnInit {
  public toast?: ToastEvent;

  constructor(public toastService: ToastService) {}

  ngOnInit(): void {
    this.toastService.toastEvent
      .pipe(
        tap((data) => (this.toast = data)),
        mergeMap(() => timer(3000)),
        tap(() => (this.toast = undefined))
      )
      .subscribe();
  }
}
