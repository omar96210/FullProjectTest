import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeventhComponentComponent } from './seventh-component.component';

describe('SeventhComponentComponent', () => {
  let component: SeventhComponentComponent;
  let fixture: ComponentFixture<SeventhComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeventhComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeventhComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
