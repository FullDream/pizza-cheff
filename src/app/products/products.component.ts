import { Component, OnInit } from '@angular/core';
import { ApiAbstract } from '../common/abstract/api.abstract';
import { ProductsApiService } from '../pages/home/products-api.service';
import { CardProduct } from './products.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  public products?: CardProduct[];

  constructor(private readonly apiService: ApiAbstract<CardProduct[]>) {}

  ngOnInit(): void {
    this.apiService
      .get('/products')
      .subscribe((data) => (this.products = data));
  }
}
