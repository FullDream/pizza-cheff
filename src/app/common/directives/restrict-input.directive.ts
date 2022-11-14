import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appRestrictInput]',
  standalone: true,
})
export class RestrictInputDirective {
  @Input() appRestrictInput!: string;

  constructor(private el: ElementRef<HTMLInputElement>) {}

  @HostListener('input', ['$event']) onInput() {
    const regex = new RegExp(this.appRestrictInput, 'g');

    const value = this.el.nativeElement.value;
    this.el.nativeElement.value = value.replace(regex, '');
  }
}
