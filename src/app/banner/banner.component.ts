import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { advantages } from './advantages.data';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent {
  advantages = advantages;
}
