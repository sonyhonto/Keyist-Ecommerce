import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HousingServiceComponent } from './housing-service.component';

describe('HousingServiceComponent', () => {
  let component: HousingServiceComponent;
  let fixture: ComponentFixture<HousingServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HousingServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HousingServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
