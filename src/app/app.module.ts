import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ScheduledDishesComponent } from "./scheduled-dishes/scheduled-dishes.component";
import { GetFoodListService } from "./shared/services/get-food-list.service";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [AppComponent, ScheduledDishesComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [GetFoodListService],
  bootstrap: [AppComponent]
})
export class AppModule {}
