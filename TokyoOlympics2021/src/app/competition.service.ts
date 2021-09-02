import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Athlete } from './model/athlete.model';
import { Competition } from './model/competition.model';
import { User } from './model/user.model';

@Injectable({
  providedIn: 'root'
})
export class CompetitionService {

  constructor(private http: HttpClient) {
    // this is intentationally empty
  }

  uri = 'http://localhost:4000'

  addCompetition(name: string, format: string, type: string, sport: string, discipline: string, athletes: Athlete[], delegate: User) {
    console.log(`delegate ${JSON.stringify(delegate)}`);
    const data = {
      name: name,
      format: format,
      type: type,
      sport: sport,
      discipline: discipline,
      athletes: athletes,
      delegate: delegate
    }
    return this.http.post(`${this.uri}/addcompetition`, data);
  }

  getCompetition(sport: string, discipline: string) {
    const data = {
      sport: sport,
      discipline: discipline
    }
    return this.http.post(`${this.uri}/getcompetition`, data);
  }

  getCompetitionForDelegate(username: string) {
    const data = {
      username: username
    };
    return this.http.post(`${this.uri}/getcompetitionfordelegate`, data);
  }

  getScheduledCompetitionsForDelegate(username: string) {
    const data = {
      username: username
    };
    return this.http.post(`${this.uri}/getscheduledcompetitionfordelegate`, data);
  }

  updateCompetitionWithDateAndTime(competition: Competition) {
    const data = {
      sport: competition.sport,
      discipline: competition.discipline,
      type: competition.type,
      venue: competition.venue,
      startdatetime: competition.startdatetime
    };
    return this.http.post(`${this.uri}/updatecompetition`, data);
  }

  scheduleTennis(sport: string, discipline: string, type: string) {
    const data = {
      sport: sport,
      discipline: discipline,
      type: type
    };
    return this.http.post(`${this.uri}/scheduletennis`, data);
  }
}
