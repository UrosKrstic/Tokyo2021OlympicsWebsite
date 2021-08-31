import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Athlete } from './model/athlete.model';
import { Bracket } from './model/bracket.model';

@Injectable({
  providedIn: 'root'
})
export class ResultsService {

  constructor(private http: HttpClient, private router: Router) {
    // this is intentationally empty
  }

  uri = 'http://localhost:4000'

  saveResults(sport: string, discipline: string, type: string, athletes_results_pair: any[]) {
    const data = {
      sport: sport,
      discipline: discipline,
      type: type,
      athletes_results_pair: athletes_results_pair
    }
    return this.http.post(`${this.uri}/saveresults`, data);
  }

  getBracket(sport: string, discipline: string, type: string) {
    const data = {
      sport: sport,
      discipline: discipline,
      type: type
    }
    return this.http.post(`${this.uri}/getbracket`, data);
  }

  saveBracket(sport: string, discipline: string, type: string, new_level: number, bracket: number[]) {
    const data = {
      sport: sport,
      discipline: discipline,
      type: type,
      new_level: new_level,
      bracket: bracket
    }
    return this.http.post(`${this.uri}/savebracket`, data);
  }
}
