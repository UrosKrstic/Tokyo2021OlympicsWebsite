import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
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
export class AthletesComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;

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

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  dataSource!: MatTableDataSource<Athlete>;
  isMedalWinner = false;
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

  toggleIsMedalWinner() {
    this.isMedalWinner = !this.isMedalWinner;
  }

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
    let medalWinner = this.isMedalWinner ? 'yes' : 'no';

    this.athletesService.getAthletes(this.name, this.country, this.sport, this.discipline, this.gender, medalWinner).subscribe(res => {
      if (res) {
        let athletes: Athlete[] = res as Athlete[];
        this.athletes = athletes;
        this.dataSource = new MatTableDataSource(this.athletes);
        this.dataSource.paginator = this.paginator;
        console.log(JSON.stringify(this.athletes));
      }
      else {
        console.log("no athletes meet criteria");
      }
    });
  }
}
