import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

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
}
