import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsModule } from 'src/app/products/products.module';
import { BannerComponent } from 'src/app/banner/banner.component';
import { ApiAbstract } from 'src/app/common/abstract/api.abstract';
import { ProductsApiService } from './products-api.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ProductsModule, BannerComponent],
  templateUrl: './home.component.html',
  providers: [{ provide: ApiAbstract, useClass: ProductsApiService }],
})
export class HomeComponent {}
