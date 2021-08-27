import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AthletesService } from '../athletes.service';
import { CountriesService } from '../countries.service';
import { Athlete } from '../model/athlete.model';
import { Country } from '../model/country.model';
import { Sport } from '../model/sport.model';
import { SportsService } from '../sports.service';

@Component({
  selector: 'app-athletes',
  templateUrl: './athletes.component.html',
  styleUrls: ['./athletes.component.css']
})
export class AthletesComponent implements OnInit {

  constructor(private sportService: SportsService,
    private countriesService: CountriesService,
    private athletesService: AthletesService,
    private http: HttpClient) {
    // empty
  }

  ngOnInit(): void {
    this.sportService.getAllSports().subscribe(res => {
      if (res) {
        this.sports = res as Sport[];
      }
      else {
        this.sports = [];
      }
    });
    this.countriesService.getAllCountries().subscribe(res => {
      if (res) {
        this.countries = res as Country[];
      }
      else {
        this.countries = [];
      }
    });
  }

  name!: string;
  gender!: string;
  country: string = 'all';
  countries!: Country[];
  sports!: Sport[];
  sport: string = 'all';
  disciplines: string[] = [];
  discipline: string = 'all';
  athletes: Athlete[] = [];
  displayedColumns: string[] = ['name', 'country', 'sport', 'disciplines', 'gender'];

  changeDisciplines(): void {
    console.log('changing disciplines for sport: ' + this.sport);
    this.discipline = 'all';
    let selected = this.sports.find(spo => spo.name == this.sport);
    this.discipline = '';
    console.log('selected: ' + JSON.stringify(selected));
    if (selected) {
      this.disciplines = selected.disciplines;
    }
    else {
      this.disciplines = [];
    }
  }

  search(): void {
    this.athletesService.getAthletes(this.name, this.country, this.sport, this.discipline, this.gender, "").subscribe(res => {
      if (res) {
        let athletes: Athlete[] = res as Athlete[];
        this.athletes = athletes;
        console.log(JSON.stringify(this.athletes));
      }
      else {
        console.log("no athletes meet criteria");
      }
    });
  }
}
