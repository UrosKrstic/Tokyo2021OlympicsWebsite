import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTennisResultsComponent } from './add-tennis-results.component';

describe('AddTennisResultsComponent', () => {
  let component: AddTennisResultsComponent;
  let fixture: ComponentFixture<AddTennisResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTennisResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTennisResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
