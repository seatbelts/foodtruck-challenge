import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoodTruckService } from './services/foodtruck/foodtruck.service';
import { provideHttpClient } from '@angular/common/http';
import { FoodtruckCardComponent } from './components/foodtruck-card/foodtruck-card.component';

@NgModule({
  declarations: [
    AppComponent,
    FoodtruckCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideHttpClient(),
    FoodTruckService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
