import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsCompetitionComponent } from './results-competition.component';

describe('ResultsCompetitionComponent', () => {
  let component: ResultsCompetitionComponent;
  let fixture: ComponentFixture<ResultsCompetitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultsCompetitionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsCompetitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
