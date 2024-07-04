import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodtruckCardComponent } from './foodtruck-card.component';

describe('FoodtruckCardComponent', () => {
  let component: FoodtruckCardComponent;
  let fixture: ComponentFixture<FoodtruckCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FoodtruckCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodtruckCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
