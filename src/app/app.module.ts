import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoodTruckService } from './services/foodtruck/foodtruck.service';
import { provideHttpClient } from '@angular/common/http';
import { FoodtruckCardComponent } from './components/foodtruck-card/foodtruck-card.component';
import { ErrorModalComponent } from './modals/error-modal/error-modal.component';
import { NgbActiveModal, NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    FoodtruckCardComponent,
    ErrorModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [
    provideHttpClient(),
    FoodTruckService,
    NgbActiveModal,
    NgbModal,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
