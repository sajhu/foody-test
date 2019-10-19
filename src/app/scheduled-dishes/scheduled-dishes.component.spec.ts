import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduledDishesComponent } from './scheduled-dishes.component';

describe('ScheduledDishesComponent', () => {
  let component: ScheduledDishesComponent;
  let fixture: ComponentFixture<ScheduledDishesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduledDishesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduledDishesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
