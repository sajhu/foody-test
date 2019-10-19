import { TestBed } from '@angular/core/testing';

import { GetFoodListService } from './get-food-list.service';

describe('GetFoodListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetFoodListService = TestBed.get(GetFoodListService);
    expect(service).toBeTruthy();
  });
});
