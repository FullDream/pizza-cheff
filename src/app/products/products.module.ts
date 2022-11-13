import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { CardComponent } from '../card/card.component';

@NgModule({
  declarations: [ProductsComponent],
  imports: [CommonModule, CardComponent],
  exports: [ProductsComponent],
})
export class ProductsModule {}
