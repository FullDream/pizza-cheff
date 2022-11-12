import { Component, Input, OnInit } from '@angular/core';
import { MenuLink } from './header.types';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() menuLinks!: MenuLink[];

  constructor() {}

  ngOnInit(): void {}
}
