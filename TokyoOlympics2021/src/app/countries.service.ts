import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private http: HttpClient, private router: Router) {
    // this is intentationally empty
  }

  uri = 'http://localhost:4000'

  getAllCountries() {
    return this.http.post(`${this.uri}/allcountries`, null);
  }
}
