import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PORDUCT_ENDPPOINT} from '../EndPoint/endpoint';
import {Product} from '../dto/Product';

@Injectable({
  providedIn: 'root'
})
export class GiftService {

  constructor(private httpClient:HttpClient) { }

  public create(giftCreateForm):Observable<Product>{
    return this.httpClient.post<Product>(PORDUCT_ENDPPOINT,giftCreateForm);

  }
}
