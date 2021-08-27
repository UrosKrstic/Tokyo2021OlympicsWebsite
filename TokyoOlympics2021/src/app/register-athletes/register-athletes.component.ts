import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FilestackService } from '@filestack/angular';
import { AthletesService } from '../athletes.service';
import { RegistrationResponse } from '../model/registrationresponse';
import { Sport } from '../model/sport.model';
import { SportsService } from '../sports.service';

@Component({
  selector: 'app-register-athletes',
  templateUrl: './register-athletes.component.html',
  styleUrls: ['./register-athletes.component.css']
})
export class RegisterAthletesComponent implements OnInit {

  constructor(private sportService: SportsService,
    private athletesService: AthletesService,
    private filestackService: FilestackService,
    private http: HttpClient) {
    // empty
  }

  ngOnInit(): void {
    this.sportService.getAllSports().subscribe(res => {
      if (res) {
        this.sports = res as Sport[];
        if (this.sports.length != 0) {
          this.sport = this.sports[0].name;
          console.log('init: ' + this.sport);
          this.discipline = '';
          this.changeDisciplines();
        }
      }
      else {
        console.log('no sports');
        this.sports = [];
      }
    });
  }

  file: any = null;

  name!: string;
  gender!: string;
  sports!: Sport[];
  sport: string = 'None';
  disciplines: string[] = [];
  discipline!: string;
  errorMessage!: string;
  message!: string;

  register(): void {
    let currentuserStr = localStorage.getItem('currentuser');
    if (currentuserStr != null) {
      let currentuser = JSON.parse(currentuserStr);
      console.log(`registering athlete: ${this.name} ${this.gender} ${currentuser.country} ${this.sport} ${this.discipline}`);
      this.athletesService.addAthlete(this.name, this.gender, currentuser.country, this.sport, this.discipline).subscribe(res => {
        if (res) {
          let response = res as RegistrationResponse;
          if (response.user == 'ok') {
            this.message = 'Successfully registered!';
            this.errorMessage = '';
          }
          else {
            this.message = '';
            this.errorMessage = response.user;
          }
        }
        else {
          this.message = '';
          this.errorMessage = 'Unsuccessfully added!';
        }
      });
    }
  }

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

  fileChanged(e: any) {
    this.file = e.target.files[0];
  }

  uploadFile() {
    let currentuserStr = localStorage.getItem('currentuser');
    if (this.file != null && currentuserStr != null) {
      let currentuser = JSON.parse(currentuserStr);
      let fr = new FileReader();
      fr.readAsText(this.file, "UTF-8");
      fr.onload = () => {
        if (fr.result != null) {
          console.log(JSON.parse(fr.result.toString()));
          let athletes = JSON.parse(fr.result.toString());
          athletes.forEach((athlete: any) => {
            console.log(athlete);
            athlete.disciplines.forEach((discipline: string) =>
              this.athletesService.addAthlete(athlete.name, athlete.gender, currentuser.country, athlete.sport, discipline).subscribe(
                res => console.log('success: ' + res)
              ));
          });
        }
      }
    }
  }
}
