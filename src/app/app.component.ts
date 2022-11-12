import { Component } from '@angular/core';
import { MenuLink } from './header';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  menuLinks: MenuLink[] = [
    { routerLink: '/pizza', name: 'Пиццы' },
    { routerLink: '/drinks', name: 'Напитки' },
    { routerLink: '/delivery', name: 'Доставка и оплата' },
    { routerLink: '/contacts', name: 'Контакты' },
  ];
}
