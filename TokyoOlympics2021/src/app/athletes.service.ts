import { HttpClient } from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AthletesService {

  constructor(private http: HttpClient) {
    // this is intentationally empty
  }

  uri = 'http://localhost:4000'

  addAthlete(name: string, gender: string, country: string, sport: string, discipline: string) {
    const data = {
      name: name,
      gender: gender,
      country: country,
      sport: sport,
      discipline: discipline
    }
    return this.http.post(`${this.uri}/addathlete`, data);
  }

  addAthletesInFile(athletes: Object[]) {
    console.log(athletes)
    return this.http.post(`${this.uri}/addathletewithfile`, athletes);
  }

  getAthletes(name: string, country: string, sport: string, discipline: string, gender: string, wonMedals: string) {
    if (name == null || name == '') name = '.*';
    if (country == 'all' || country == '') country = '.*';
    if (sport == 'all' || sport == '') sport = '.*';
    if (discipline == 'all' || discipline == '') discipline = '.*';
    if (gender == null || gender == '' || gender == 'none') gender = '.*';
    const data = {
      name: name,
      gender: gender,
      country: country,
      sport: sport,
      discipline: discipline,
      wonMedals: wonMedals
    }
    return this.http.post(`${this.uri}/getathletes`, data);
  }

  getAthletes2(sport: string, discipline: string, gender: string) {
    const data = {
      sport: sport,
      discipline: discipline,
      gender: gender
    }
    return this.http.post(`${this.uri}/getathletes2`, data);
  }
}
