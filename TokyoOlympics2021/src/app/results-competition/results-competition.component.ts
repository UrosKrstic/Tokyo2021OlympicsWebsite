import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompetitionService } from '../competition.service';
import { Competition } from '../model/competition.model';

@Component({
  selector: 'app-results-competition',
  templateUrl: './results-competition.component.html',
  styleUrls: ['./results-competition.component.css']
})
export class ResultsCompetitionComponent implements OnInit {

  constructor(private competitionService: CompetitionService, private router: Router) { }

  ngOnInit(): void {
    let currentuserStr = localStorage.getItem('currentuser');
    if (currentuserStr != null) {
      let currentuser = JSON.parse(currentuserStr);
      this.competitionService.getScheduledCompetitionsForDelegate(currentuser.username).subscribe(res => {
        if (res) {
          this.competitions = res as Competition[];
          console.log('competitions: ' + JSON.stringify(this.competitions));
        }
      });
    }
  }

  displayedColumns: string[] = ['sport', 'discipline', 'type', 'venue', 'start date and time', 'add results'];
  competitions: Competition[] = [];

  addResults(competition: Competition) {
    localStorage.setItem('comp', JSON.stringify(competition));
    this.router.navigate(['/' + this.router.url + '/addresults']);
  }
}
