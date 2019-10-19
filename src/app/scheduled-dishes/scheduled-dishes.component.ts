import { Component, OnInit } from '@angular/core';
import { GetFoodListService } from '../shared/services/get-food-list.service';
import {FoodListModel} from '../shared/models/food-list-model';

@Component({
  selector: 'app-scheduled-dishes',
  templateUrl: './scheduled-dishes.component.html',
  styleUrls: ['./scheduled-dishes.component.scss']
})
export class ScheduledDishesComponent implements OnInit {
  public list: FoodListModel[];
  public selectedProducts: FoodListModel[] = [];
  public productLimit = 3;
  public limitTime = '19:15';
  public showMessageMax = false;
  public showMessageTime = true;
  public messageMax = 'No puedes agregar mas platos por hoy';
  public messageTime= 'No puedes hacer pedidos hoy, intenta mañana antes de las ' + this.limitTime;
  constructor(private getFoodListService: GetFoodListService) {}

  ngOnInit(): void {
    this.getFoodList();
  }

  private getFoodList(): void {
    if (this.validateDate()) {
      this.showMessageTime = false;
      this.getFoodListService.getFoodList().subscribe(
        foodList => {
          this.list = foodList;
        }
      );
    } else {
      this.showMessageTime = true;
    }
  }

  public addProduct(prod: FoodListModel): void {
    if (this.selectedProducts.length === this.productLimit) {
      this.showMessageMax = true;
    } else {
      this.selectedProducts.push(prod);
      this.showMessageMax = false;
    }
  }

  public removeSelection(prod: FoodListModel): void {
    for (let i = 0; i < this.selectedProducts.length; i++) {
      if ( this.selectedProducts[i] === prod) {
        this.selectedProducts.splice(i, 1);
        break;
      }
    }
    this.showMessageMax = false;
  }

  public cleanList() {
    this.selectedProducts = [];
    this.showMessageMax = false;
    this.validateDate();
  }

  public validateDate(): boolean {
    const date = new Date();
    const utc = date.getTime() + (date.getTimezoneOffset() * 60000);
    const colombiaDate = new Date(utc + (3600000 * -5));
    const time = colombiaDate.toLocaleTimeString(
      'en-US', { hour12: false,
        hour: 'numeric',
        minute: 'numeric'}
    );
    const timeLimit = new Date('01/01/2000 ' + this.limitTime);
    const timeActual = new Date('01/01/2000 ' + time);
    return timeLimit >= timeActual;
  }
}
