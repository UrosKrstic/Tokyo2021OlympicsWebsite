import { StepperSelectionEvent } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AthletesService } from '../athletes.service';
import { CompetitionService } from '../competition.service';
import { Athlete } from '../model/athlete.model';
import { RegistrationResponse } from '../model/registrationresponse';
import { Sport } from '../model/sport.model';
import { User } from '../model/user.model';
import { SportsService } from '../sports.service';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-competition',
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.css']
})
export class CompetitionComponent implements OnInit {

  constructor(
    private sportService: SportsService,
    private _formBuilder: FormBuilder,
    private athletesService: AthletesService,
    private competitionService: CompetitionService,
    private userService: UsersService) {
    // empty
  }

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.sportService.getAllSports().subscribe(res => {
      if (res) {
        this.sports = res as Sport[];
      }
      else {
        this.sports = [];
      }
      this.userService.getAllDelegates().subscribe(result => {
        if (result) {
          this.delegates = result as User[];
          console.log('Delegates: ' + JSON.stringify(this.delegates));
        }
        else {
          this.delegates = [];
        }
      });
    });
  }

  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;

  name!: string;
  format!: string;
  formats: string[] = ['individual - final 8', 'tennis singles', 'tennis doubles']
  gender!: string;
  sports!: Sport[];
  sport!: string;
  disciplines: string[] = [];
  discipline!: string;
  athletes: Athlete[] = [];
  selectedAthletes: Athlete[] = [];
  delegates: User[] = [];
  delegate!: User;
  formatInfo!: string;
  formatErrorInfo: string = '';
  formatIncorrect: boolean = true;
  errorMessage: string = '';
  message: string = '';

  changeDisciplines(): void {
    console.log('changing disciplines for sport: ' + this.sport);
    let selected = this.sports.find(spo => spo.name == this.sport);
    this.discipline = '';
    console.log('selected: ' + JSON.stringify(selected));
    if (selected) {
      this.disciplines = selected.disciplines;
      if (this.disciplines.length != 0) {
        this.discipline = this.discipline[0];
      }
    }
    else {
      this.disciplines = [];
    }
  }

  getathletes() {
    switch(this.format) {
      case 'individual - final 8': {
        this.formatInfo = 'Select 8 athletes to compete.';
        break;
      }
      case 'tennis singles': {
        this.formatInfo = 'Select 8 tennis players to compete.';
        break;
      }
      case 'tennis doubles': {
        this.formatInfo = 'Select 16 athletes (8 pairs of same nationality) to compete.';
        break;
      }
    }
    this.athletesService.getAthletes2(this.sport, this.discipline, this.gender).subscribe(res => {
      if (res) {
        let athletes: Athlete[] = res as Athlete[];
        this.athletes = athletes;
      }
      else {
        console.log("no athletes meet criteria");
      }
    });
  }

  checkAthlete(athl: Athlete) {
    if (this.selectedAthletes.includes(athl)) {
      this.selectedAthletes.splice(this.selectedAthletes.indexOf(athl), 1);
    }
    else {
      this.selectedAthletes.push(athl);
    }
    console.log(`selected athletes count: ${this.selectedAthletes.length}`);
    this.verifyFormat();
  }

  verifyFormat() {
    switch(this.format) {
      case 'individual - final 8': {
        if (this.selectedAthletes.length != 8) {
          this.formatErrorInfo = 'Format error: 8 athletes must be picked!';
          this.formatIncorrect = true;
          console.log('FUK format maaaan');
        }
        else {
          console.log('ready to go - format wise');
          this.formatIncorrect = false;
        }
        break;
      }
      case 'tennis singles': {
        this.formatInfo = 'Select 8 tennis players to compete.';
        break;
      }
      case 'tennis doubles': {
        this.formatInfo = 'Select 16 athletes (8 pairs of same nationality) to compete.';
        break;
      }
    }

  }

  add(): void {
    this.competitionService.addCompetition(
      this.name,
      this.format,
      this.gender,
      this.sport,
      this.discipline,
      this.selectedAthletes,
      this.delegate).subscribe(res => {
        console.log('lets go');
        this.selectedAthletes = [];
        if (res) {
          console.log('lets go 2');
          let response = res as RegistrationResponse;
          if (response.user == 'ok') {
            this.message = 'Successfully created competition';
          }
          else {
            this.errorMessage = 'Failed to create competition';
          }
        }
        else {
          console.log('lets go 3');
          this.errorMessage = 'Failed to create competition';
        }
      });
  }
}
