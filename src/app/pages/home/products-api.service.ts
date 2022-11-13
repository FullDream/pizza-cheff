import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ApiAbstract } from 'src/app/common/abstract/api.abstract';
import { PizzaListData } from 'src/data/pizza-list.data';
import { CardProduct } from '../../products/products.interface';

@Injectable()
export class ProductsApiService extends ApiAbstract<CardProduct[]> {
  public get(url: string): Observable<CardProduct[]> {
    return of(PizzaListData);
  }
}
