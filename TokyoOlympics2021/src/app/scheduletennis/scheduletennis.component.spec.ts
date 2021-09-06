import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduletennisComponent } from './scheduletennis.component';

describe('ScheduletennisComponent', () => {
  let component: ScheduletennisComponent;
  let fixture: ComponentFixture<ScheduletennisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduletennisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduletennisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
