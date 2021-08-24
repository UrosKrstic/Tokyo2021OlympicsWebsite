import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SportsService {

  constructor(private http: HttpClient) {
    // this is intentationally empty
  }

  uri = 'http://localhost:4000'

  addSport(name: string, discipline: string) {
    const data = {
      name: name,
      discipline: discipline
    }
    return this.http.post(`${this.uri}/addsport`, data);
  }

  getAllSports() {
    return this.http.post(`${this.uri}/getallsports`, null);
  }
}
