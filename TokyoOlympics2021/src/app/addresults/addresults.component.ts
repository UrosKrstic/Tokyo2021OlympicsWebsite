import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Competition } from '../model/competition.model';
import { RegistrationResponse } from '../model/registrationresponse';
import { ResultsService } from '../results.service';

@Component({
  selector: 'app-addresults',
  templateUrl: './addresults.component.html',
  styleUrls: ['./addresults.component.css']
})
export class AddresultsComponent implements OnInit {

  constructor(private router: Router, private resultsService: ResultsService) {}

  ngOnInit(): void {
    for (let i = 0; i < this.individual_sport_count; i++)
      this.results.push('');
    let compStr = localStorage.getItem('comp');
    if (compStr) {
      this.competition = JSON.parse(compStr);
    }
    if (this.secs_millis.includes(this.competition.discipline)) {
      this.resultsFormat = ' [SS,TT]';
    }
    else if (this.min_sec_millis.includes(this.competition.discipline)) {
      this.resultsFormat = ' [MM:SS,TT]';
    }
    else if(this.meter_cm.includes(this.competition.discipline)) {
      this.resultsFormat = ' [M:CM]';
    }
    else if (this.hours_mins_secs.includes(this.competition.discipline)) {
      this.resultsFormat = ' [HH:MM:SS]';
    }
  }

  displayedColumns: string[] = ['name', 'country', 'result'];
  individual_sport_count: number = 8;
  competition!: Competition;
  results: string[] = [];
  secs_millis: string[] = ['100m running', '200m running', '400m running', '100m Butterfly', '200m Freestyle'];
  min_sec_millis: string[] = ['800m running', '5000m running', '10000m running'];
  meter_cm: string[] = ['Long Jump', 'Triple Jump', 'Pole Vault', 'Shot Put', 'Discus Throw', 'Hammer Throw', 'Javelin Throw'];
  hours_mins_secs: string[] = ['Marathon', '20km Race Walk', '50km Race Walk', 'Road 225km'];
  errorMessage: string = '';
  resultsFormat: string = '';

  saveresults() {
    console.log('results: ' + this.results);
    let athlete_result_pairs = [];
    for (let i = 0; i < this.competition.athletes.length; i++)
      athlete_result_pairs.push({athlete: this.competition.athletes[i], result: this.results[i]});
    athlete_result_pairs.sort((a, b) => {
      if (this.secs_millis.includes(this.competition.discipline)) {
        return this.secs_millis_to_number(a.result) - this.secs_millis_to_number(b.result);
      }
      else if (this.min_sec_millis.includes(this.competition.discipline)) {
        return this.min_sec_millis_to_number(a.result) - this.min_sec_millis_to_number(b.result);
      }
      else if(this.meter_cm.includes(this.competition.discipline)) {
        return -this.meter_cm_to_number(a.result) + this.meter_cm_to_number(b.result);
      }
      else if (this.hours_mins_secs.includes(this.competition.discipline)) {
        return this.hours_mins_secs_to_number(a.result) - this.hours_mins_secs_to_number(b.result);
      }
      else {
        return 0;
      }
    });

    console.log(JSON.stringify(athlete_result_pairs));
    this.resultsService.saveResults(this.competition.sport, this.competition.discipline, this.competition.type, athlete_result_pairs).subscribe(res => {
      if (res) {
        let response : RegistrationResponse = res as RegistrationResponse;
        if (response.user == 'ok') {
          console.log('Successfully saved results');
          this.router.navigate(['/resultscompetition']);
        }
        else {
          this.errorMessage = 'Unseccessfully saved results';
        }
      }
      else {
        this.errorMessage = 'Unseccessfully saved results';
      }
    });
  }

  private secs_millis_to_number(secs_millis: string): number {
    let secs_millis_split = secs_millis.split(',');
    let seconds = +secs_millis_split[0];
    let millis = +secs_millis_split[1];
    return seconds * 1000 + millis;
  }

  private min_sec_millis_to_number(min_secs_millis: string): number {
    let min_secs_millis_split = min_secs_millis.split(',');
    let millis = + min_secs_millis[1];
    let min_secs_split = min_secs_millis_split[0].split(':');
    let minute = +min_secs_split[0];
    let seconds = +min_secs_split[1];
    return minute * 60000 + seconds * 60 + millis;
  }

  private meter_cm_to_number(meter_cm: string): number {
    let meter_cm_split = meter_cm.split(',');
    let meter = +meter_cm_split[0];
    let cm = +meter_cm_split[1];
    return meter * 100 + cm;
  }

  private hours_mins_secs_to_number(hours_mins_secs: string): number {
    let hours_mins_secs_split = hours_mins_secs.split(':');
    let hour = +hours_mins_secs_split[0];
    let minute = +hours_mins_secs_split[1];
    let seconds = +hours_mins_secs_split[2];
    return hour * 3600 + minute * 60 + seconds;
  }
}
