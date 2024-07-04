import { Component, Input } from '@angular/core';
import { FoodtruckInterface } from '../../interfaces/foodtruck';

@Component({
  selector: 'app-foodtruck-card',
  templateUrl: './foodtruck-card.component.html',
  styleUrl: './foodtruck-card.component.scss'
})
export class FoodtruckCardComponent {

  @Input() foodTruckInfo: FoodtruckInterface | undefined;

    /**
   *
   * @function openMaps Open link with params to a point in google maps
   * @params {lat: string} A string representing the latitude of the location
   * @params {long: string} A string representing the longitude of the location
   * @returns {void}
   */

  openMaps(lat: string | undefined, long: string | undefined): void {
      if (!!lat && !!long) {
        const googleMapsLink = `https://www.google.com/maps/search/?api=1&query=${lat}%2C${long}`
        window.open(googleMapsLink);
      }
    }

}
