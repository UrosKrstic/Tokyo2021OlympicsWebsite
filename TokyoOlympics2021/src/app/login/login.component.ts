import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user.model';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UsersService, private router: Router) { }

  ngOnInit(): void {
    // this is intentionally empty
  }

  hide = true;
  username!: string;
  password!: string;
  errorMessage!: string;

  login() {
    this.userService.login(this.username, this.password).subscribe(res => {
        if (res) {
          let user = res as User;
          console.log("successful login: " + JSON.stringify(user));
          this.userService.saveLoggedInUserToSession(user);
          this.router.navigate(['/']);
        }
        else {
          this.errorMessage = "Username or password is incorrect."
        }
    });
  }
}
