import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../common/components/button/button.component';
import { CardProduct } from '../products/products.interface';
import { LightBoxService } from '../common/components/light-box/light-box.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() data!: CardProduct;

  constructor(public readonly lightBoxService: LightBoxService) {}
}
