import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CountriesService } from '../countries.service';
import { Country } from '../model/country.model';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {
    this.countriesService.getAllCountries().subscribe(res => {
      if (res) {
        this.countries = res as Country[];
      }
      else {
        this.countries = [];
      }
      this.dataSource = new MatTableDataSource(this.countries);
      this.dataSource.paginator = this.paginator;
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  dataSource!: MatTableDataSource<Country>;
  displayedColumns: string[] = ['name', 'flag', 'athletecnt'];
  countries!: Country[];

}
