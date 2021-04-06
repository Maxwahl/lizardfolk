import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationStatisticsComponent } from './presentation-statistics.component';

describe('PresentationStatisticsComponent', () => {
  let component: PresentationStatisticsComponent;
  let fixture: ComponentFixture<PresentationStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresentationStatisticsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentationStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
