import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ScheduledDishesService {
  private API_URL = 'https://testapi.io/api/sajhu/dishes/';

  constructor(private httpClient: HttpClient) {}

  public getFoodList(): Observable<any> {
    return this.httpClient.get(this.API_URL);
  }

  public getUser(): Observable<any>  {
    return of({
      name: 'Bonifacio',
      balance: 3}).pipe(delay(1000)) ;
  }

  public getLimitTime(): Observable<any> {
    return of({limitTime: '19:15'}).pipe(delay(1000));
  }
}
