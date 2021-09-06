import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompetitionService } from '../competition.service';
import { Bracket } from '../model/bracket.model';
import { Competition } from '../model/competition.model';
import { Match } from '../model/match';
import { RegistrationResponse } from '../model/registrationresponse';
import { ResultsService } from '../results.service';

@Component({
  selector: 'app-scheduletennis',
  templateUrl: './scheduletennis.component.html',
  styleUrls: ['./scheduletennis.component.css']
})
export class ScheduletennisComponent implements OnInit {

  constructor(private resultsService: ResultsService, private competitionService: CompetitionService, private router: Router) { }

  ngOnInit(): void {
    for (let i = 0; i < 60; i++) {
      if (i >= 0 && i <= 23)
        this.hours.push(i);
      this.minutes.push(i);
    }
    let compStr = localStorage.getItem('comp');
    if (compStr) {
      this.competition = JSON.parse(compStr);
    }
    this.resultsService.getBracket(this.competition.sport, this.competition.discipline, this.competition.type).subscribe(res => {
      if (res) {
        this.bracket = res as Bracket;
        this.results_heading = this.results_headings[this.bracket.current_lvl];

        this.matches = [];
        for (let i = 0; i < this.bracket.bracket.length; i += 2) {
          this.matches.push({
            athlete_name_1: this.competition.athletes[this.bracket.bracket[i]].name,
            athlete_name_2: this.competition.athletes[this.bracket.bracket[i + 1]].name,
            athlete_country_1: this.competition.athletes[this.bracket.bracket[i]].country,
            athlete_country_2: this.competition.athletes[this.bracket.bracket[i + 1]].country,
            seeding_1: this.bracket.bracket[i],
            seeding_2: this.bracket.bracket[i + 1]
          });
          this.results.push(-1);
        }
        console.log('matches: ' + JSON.stringify(this.matches));
        console.log('bracket' + JSON.stringify(this.bracket));
      }
    });
   }

  bracket!: Bracket;
  results_headings: string[] = ['Finals & Third place', 'Semifinals', 'Quarterfinals','Eights Finals'];
  results_heading!: string;
  displayedColumns: string[] = ['name', 'venue', 'start date', 'start time'];
  competition!: Competition;
  results: number[] = [];
  errorMessage: string = '';
  matches!: Match[];
  venues: string[] = ['Olympic Stadium', 'Tokyo Stadium', 'Tatsumi Water Polo Center', 'Kasumigaseki Club', 'Fuji Speedway', 'Kokugikan Arena'];
  hours: number[] = [];
  minutes: number[] = [];

  updateResults(match: Match, firstWon: boolean) {
    if (firstWon) {
      this.results[this.bracket.bracket.indexOf(match.seeding_1) / 2] = match.seeding_1;
    }
    else {
      this.results[this.bracket.bracket.indexOf(match.seeding_1) / 2] = match.seeding_2;
    }

    if (this.bracket.current_lvl == 1) {
      if (firstWon) {
        this.results[this.bracket.bracket.indexOf(match.seeding_1) / 2 + 2] = match.seeding_2;
      }
      else {
        this.results[this.bracket.bracket.indexOf(match.seeding_1) / 2 + 2] = match.seeding_1;
      }
    }
  }

  scheduleMatches() {
    this.competitionService.scheduleTennis(this.competition.sport, this.competition.discipline, this.competition.type);
    this.router.navigate(['/updatecompetition']);
  }
}
