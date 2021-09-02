import { Component, OnInit } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { Router } from '@angular/router';
import { CompetitionService } from '../competition.service';
import { Competition } from '../model/competition.model';
import { RegistrationResponse } from '../model/registrationresponse';
import { User } from '../model/user.model';

@Component({
  selector: 'app-updatecomp',
  templateUrl: './updatecomp.component.html',
  styleUrls: ['./updatecomp.component.css']
})
export class UpdatecompComponent implements OnInit {

  constructor(private competitionService: CompetitionService, private router: Router) { }

  ngOnInit(): void {
    for (let i = 0; i < 60; i++) {
      if (i >= 0 && i <= 23)
        this.hours.push(i);
      this.minutes.push(i);
    }
    let currentuserStr = localStorage.getItem('currentuser');
    if (currentuserStr != null) {
      let currentuser = JSON.parse(currentuserStr);
      this.competitionService.getCompetitionForDelegate(currentuser.username).subscribe(res => {
        if (res) {
          this.competitions = res as Competition[];
          this.competitions.forEach(comp => this.compToErrorMsgMap.set(comp, ''));
          // console.log('competitions: ' + JSON.stringify(this.competitions));
        }
      });
    }

  }

  displayedColumns: string[] = ['sport', 'discipline', 'type', 'venue', 'start date', 'start time', 'schedule'];
  competitions: Competition[] = [];
  venues: string[] = ['Olympic Stadium', 'Tokyo Stadium', 'Tatsumi Water Polo Center', 'Kasumigaseki Club', 'Fuji Speedway', 'Kokugikan Arena'];
  hours: number[] = [];
  hour!: number;
  minutes: number[] = [];
  minute!: number;
  errorMessage: string = '';
  compToErrorMsgMap: Map<Competition, string> = new Map<Competition, string>();

  setDate(competition: Competition, event: MatDatepickerInputEvent<Date>) {
    if (event.value) {
      let date: Date = event.value;
      console.log('date selected: ' + date.toLocaleDateString());
      competition.startdatetime = date;
    }
  }

  setHour(competition: Competition, hour: number) {
    competition.startdatetime.setHours(hour);
    console.log('hour: ' + competition.startdatetime);
  }

  setMinute(competition: Competition, minute: number) {
    competition.startdatetime.setMinutes(minute);
    console.log('minute: '+ competition.startdatetime);
  }

  scheduleCompetition(competition: Competition) {
    this.competitionService.updateCompetitionWithDateAndTime(competition).subscribe(res => {
      if (res) {
        let response = res as RegistrationResponse;
        if (response.user == 'ok') {
          console.log('DONE update');
          if (competition.sport == 'Tennis') {
            localStorage.setItem('comp', JSON.stringify(competition));
            this.router.navigate(['/' + this.router.url + '/scheduletennis']);
          }
          else {
            window.location.reload();
          }
        }
        else {
          this.compToErrorMsgMap.set(competition, 'unsuccessful update');
        }
      }
      else {
        this.compToErrorMsgMap.set(competition, 'unsuccessful update');
      }
    });
  }
}
