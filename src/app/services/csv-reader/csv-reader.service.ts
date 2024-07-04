import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { FoodtruckResponseInterface } from '../../interfaces/foodtruck-response';
import { FoodtruckInterface } from '../../interfaces/foodtruck';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodTruckService {

  private csvTruckUrl = 'https://data.sfgov.org/api/views/rqzj-sfat/rows.json';

  constructor(private http: HttpClient) { }

  /**
   * @function getTruckinfo Retrieves data and parse it into an object
   * @returns {Observable<FoodtruckInterface[]>} An observable of an array of elements
   */
  public getTruckinfo(): Observable<FoodtruckInterface[]> {
    return this.http.get<FoodtruckResponseInterface>(this.csvTruckUrl)
    .pipe(
      map((truckData: FoodtruckResponseInterface) => this.parseData(truckData.data) as FoodtruckInterface[])
    )
  }

  /**
   *
   * @function parseData Parse the array of data into an appropiate object
   * @returns {FoodtruckInterface[]} An array of elements
   */
  private parseData(truckData: string[]): FoodtruckInterface[] {
    let truckObjectArray = truckData.map(truckInfo => {
      const truckObject = {
          name: truckInfo[9] || 'N/A',
          address: truckInfo[13] || 'N/A',
          permit: truckInfo[17] || 'N/A',
          permitStatus: truckInfo[18] || 'N/A',
          lat: truckInfo[22] || 'N/A',
          long: truckInfo[23] || 'N/A',
          shedulePdf: truckInfo[24] || 'N/A',
          dayHours: truckInfo[25] || 'N/A',
      }
      
      return truckObject;
    });

    return truckObjectArray;
  }
}
