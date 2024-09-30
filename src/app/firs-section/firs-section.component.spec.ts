import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirsSectionComponent } from './firs-section.component';

describe('FirsSectionComponent', () => {
  let component: FirsSectionComponent;
  let fixture: ComponentFixture<FirsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirsSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
