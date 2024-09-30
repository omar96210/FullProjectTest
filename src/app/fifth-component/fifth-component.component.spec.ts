import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FifthComponentComponent } from './fifth-component.component';

describe('FifthComponentComponent', () => {
  let component: FifthComponentComponent;
  let fixture: ComponentFixture<FifthComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FifthComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FifthComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
