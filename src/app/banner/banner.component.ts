import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { advantages } from './advantages.data';
import { ButtonComponent } from '../common/components/button/button.component';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent {
  advantages = advantages;
}
