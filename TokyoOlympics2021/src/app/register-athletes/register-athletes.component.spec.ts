import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterAthletesComponent } from './register-athletes.component';

describe('RegisterAthletesComponent', () => {
  let component: RegisterAthletesComponent;
  let fixture: ComponentFixture<RegisterAthletesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterAthletesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterAthletesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
