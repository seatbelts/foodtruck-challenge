import { Component, OnDestroy, OnInit } from '@angular/core';
import { FoodTruckService } from './services/foodtruck/foodtruck.service';
import { Observable, ReplaySubject, catchError, map, takeUntil } from 'rxjs';
import { FoodtruckInterface } from './interfaces/foodtruck';
import { ErrorModalComponent } from './modals/error-modal/error-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy {
  public foodTruckData$: Observable<FoodtruckInterface[]> | undefined;
  public foodTruckDataAll$: Observable<FoodtruckInterface[]> | undefined;

  private destroy$: ReplaySubject<boolean> = new ReplaySubject;

  constructor(
    private foodTruckService: FoodTruckService,
    private modalService: NgbModal,
  ) { }

   /**
   *
   * @function ngOnInit Initilialize component and variables with API data
   * @returns {void} Void function
   */
  ngOnInit(): void {
    this.foodTruckData$ = this.foodTruckService.getTruckinfo()
      .pipe(
        // Shows Error Modal on the case of an error
        catchError(() => {
          this.modalService.open(ErrorModalComponent);
          throw new Error();
      })
    );
    this.foodTruckDataAll$ = this.foodTruckData$;

  }

  /**
   *
   * @function filteryBy Filter data based on the Permit status given by the selection
   * @param {permitStatus} A string representing the Permit Status, can only be ALL, REQUESTED, SUSPEND, EXPIRED
   * @returns {void} Void function
   */
  public filteryBy(permitStatus: string): void {
    if (permitStatus === 'ALL') {
      this.foodTruckData$ = this.foodTruckDataAll$;
    } else {
      
      this.foodTruckData$ = this.foodTruckDataAll$?.pipe(
        map((truckData: FoodtruckInterface[]) => truckData.filter((truckInfo: FoodtruckInterface) => truckInfo.permitStatus === permitStatus)),
        takeUntil(this.destroy$)
      )
    }
  }

  /**
   *
   * @function ngOnDestroy Cleans up the subscription of foodTruckDataAll$
   * @returns {void} Void function
   */
  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
