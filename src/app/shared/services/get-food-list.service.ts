import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {FoodListModel} from '../models/food-list-model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetFoodListService {
  private API_URL = 'https://testapi.io/api/sajhu/dishes/';

  constructor(private httpClient: HttpClient) {}

  public getFoodList(): Observable<any> {
    return this.httpClient.get(this.API_URL);
  }
}
