import { HttpClient } from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';

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
}
