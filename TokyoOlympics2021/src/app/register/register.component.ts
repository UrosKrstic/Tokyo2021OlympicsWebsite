import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { countries } from '../model/countries';
import { RegistrationResponse } from '../model/registrationresponse';
import { User } from '../model/user.model';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userService: UsersService, private router: Router) {
    // this is empty
  }

  ngOnInit(): void {
    // this is empty
  }

  hide = true;
  username!: string;
  password!: string;
  confirmed_password!: string;
  first_name!: string;
  last_name!: string;
  country!: string;
  type!: string;

  errorMessage!: string;

  countries = countries;

  register() {
    this.userService.getAllUsers().subscribe(res => {
      if (res) {
        let users = res as User[];
        if (users.find(user => user.username == this.username) == null) {
          if (this.password == this.confirmed_password) {
            if (this.isCorrectFormat(this.password)) {
              this.userService.register(
                this.username,
                this.password,
                this.first_name,
                this.last_name,
                this.country,
                this.type).subscribe(r => {
                  let response = r as RegistrationResponse;
                  if (response.user == 'ok') {
                    console.log("successful registration");
                    this.router.navigate(['/']);
                  }
                  else {
                    this.errorMessage = "Error occured; unsuccessful registration";
                  }
              });
            }
            else {
              this.errorMessage = "password has incorrect format";
            }
          }
          else {
            this.errorMessage = "password and password confirmation must match";
          }
        }
        else {
          this.errorMessage = "Username already exists";
        }
      }
    });
  }

  private isCorrectFormat(pass: string): boolean {
    return pass.length >= 8 && pass.length <= 12
    && /^[a-zA-Z]/.test(pass) && /\d.*\d/.test(pass)
    && /[A-Z]/.test(pass) && /[[a-z].*[a-z].*[a-z]/.test(pass)
    && /[\?\.\*\$\^\&\!\@\#,].*[\?\.\*\$\^\&\!\@\#,]/.test(pass)
    && !(/[a-z][A-Z]{4}/.test(pass));
  }
}
