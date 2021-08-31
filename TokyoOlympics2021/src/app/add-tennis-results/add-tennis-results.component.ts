import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bracket } from '../model/bracket.model';
import { Competition } from '../model/competition.model';
import { Match } from '../model/match';
import { RegistrationResponse } from '../model/registrationresponse';
import { ResultsService } from '../results.service';

@Component({
  selector: 'app-add-tennis-results',
  templateUrl: './add-tennis-results.component.html',
  styleUrls: ['./add-tennis-results.component.css']
})
export class AddTennisResultsComponent implements OnInit {

  constructor(private resultsService: ResultsService, private router: Router) { }

  ngOnInit(): void {
    let compStr = localStorage.getItem('comp');
    if (compStr) {
      this.competition = JSON.parse(compStr);
    }
    this.resultsService.getBracket(this.competition.sport, this.competition.discipline, this.competition.type).subscribe(res => {
      if (res) {
        this.bracket = res as Bracket;
        this.results_heading = this.results_headings[this.bracket.current_lvl];

        if (this.bracket.current_lvl == 1) {
          this.results.push(-1);
          this.results.push(-1);
        }
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
  displayedColumns: string[] = ['name', 'result'];
  competition!: Competition;
  results: number[] = [];
  errorMessage: string = '';
  matches!: Match[];

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

  saveresults() {
    console.log('results: ' + this.results);
    if (this.bracket.current_lvl == 0) {
      let athlete_result_pairs: any[] = [];
      athlete_result_pairs.push({
        athlete: this.competition.athletes[this.results[0]]
      });
      if (this.bracket.bracket[0] == this.results[0]) {
        athlete_result_pairs.push({
          athlete: this.competition.athletes[this.bracket.bracket[1]]
        });
      }
      else {
        athlete_result_pairs.push({
          athlete: this.competition.athletes[this.bracket.bracket[0]]
        });
      }
      athlete_result_pairs.push({
        athlete: this.competition.athletes[this.results[1]]
      });
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
    else {
      this.resultsService.saveBracket(this.competition.sport, this.competition.discipline, this.competition.type, this.bracket.current_lvl - 1, this.results).subscribe(res => {
        if (res) {
          let response : RegistrationResponse = res as RegistrationResponse;
          if (response.user == 'ok') {
            console.log('Updated bracket');
            this.router.navigate(['/resultscompetition']);
          }
          else {
            this.errorMessage = 'Unseccessfully saved bracket';
          }
        }
        else {
          this.errorMessage = 'Unseccessfully saved bracket';
        }
      });
    }
  }
}
