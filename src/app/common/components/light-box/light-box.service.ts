import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable()
export class LightBoxService {
  private _isOpen: boolean = false;
  private _imageSrc: string | null = null;

  constructor(@Inject(DOCUMENT) private document: Document) {}

  public get isOpen(): boolean {
    return this._isOpen;
  }

  public get imageSrc(): string | null {
    return this._imageSrc;
  }

  open(src: string) {
    this.document.body.style.overflow = 'hidden';
    this._imageSrc = src;
    this._isOpen = true;
  }

  close() {
    this.document.body.style.overflow = '';
    this._isOpen = false;
  }
}
