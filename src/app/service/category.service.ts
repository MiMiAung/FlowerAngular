import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CATEGORY_ENDPOINT} from '../EndPoint/endpoint';
import {Category} from '../dto/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {



  constructor(private httpClient:HttpClient ) { }


  public findById(id):Observable<Category>{
    return this.httpClient.get<Category>(CATEGORY_ENDPOINT+id);

  }

  public categorycreate(categoryForm):Observable<Category>{
    return this.httpClient.post<Category>(CATEGORY_ENDPOINT,categoryForm);
  }
}
