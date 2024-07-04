import { Component, OnInit } from '@angular/core';
import { FoodTruckService } from './services/foodtruck/foodtruck.service';
import { Observable } from 'rxjs';
import { FoodtruckInterface } from './interfaces/foodtruck';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'foodtruck-challenge';

  public foodTruckData$: Observable<FoodtruckInterface[]> | undefined;

  constructor(
    private foodTruckService: FoodTruckService
  ) { }

  ngOnInit() {
    this.foodTruckData$ = this.foodTruckService.getTruckinfo();

    this.foodTruckData$.subscribe(data => {
      console.log(data)
    })
  }
}
