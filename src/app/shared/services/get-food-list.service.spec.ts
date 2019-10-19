import { TestBed } from '@angular/core/testing';

import { ScheduledDishesService } from './scheduled-dishes.service';

describe('GetFoodListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ScheduledDishesService = TestBed.get(ScheduledDishesService);
    expect(service).toBeTruthy();
  });
});
