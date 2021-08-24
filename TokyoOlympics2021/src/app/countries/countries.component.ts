import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../countries.service';
import { Country } from '../model/country.model';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  constructor(private countriesService: CountriesService) { }

  ngOnInit(): void {
    this.countriesService.getAllCountries().subscribe(res => {
      if (res) {
        this.countries = res as Country[];
      }
      else {
        this.countries = [];
      }
    });
  }

  countries!: Country[];

}
