import { Component, OnInit } from '@angular/core';
import { RegistrationResponse } from '../model/registrationresponse';
import { SportsService } from '../sports.service';

@Component({
  selector: 'app-addsport',
  templateUrl: './addsport.component.html',
  styleUrls: ['./addsport.component.css']
})
export class AddsportComponent implements OnInit {

  constructor(private sportsService: SportsService) {
    // empty
   }

  ngOnInit(): void {
    // empty
  }

  name!: string;
  discipline!: string;
  errorMessage!: string;
  message!: string;

  addsport(): void {
    this.sportsService.addSport(this.name, this.discipline).subscribe(res => {
      if (res) {
        let response = res as RegistrationResponse;
        if (response.user == 'ok') {
          this.message = 'Successfully added!';
          this.errorMessage = '';
        }
        else {
          this.message = '';
          this.errorMessage = 'Unsuccessfully added!';
        }
      }
      else {
        this.message = '';
        this.errorMessage = 'Unsuccessfully added!';
      }
    });
  }

}
