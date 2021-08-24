import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ShortUser } from './model/shortuser.model';
import { User } from './model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient, private router: Router) {
    // this is intentationally empty
  }

  uri = 'http://localhost:4000'

  login(username: string, password: string) {
    const data = {
      username: username,
      password: password
    }
    return this.http.post(`${this.uri}/login`, data);
  }

  authenticateUser(plausableTypes: string[]): boolean {
    console.log(plausableTypes);
    let currentuserStr = localStorage.getItem('currentuser');
    if (currentuserStr != null) {
      let currentuser = JSON.parse(currentuserStr);
      return plausableTypes.includes(currentuser.type);
    }
    else {
      return plausableTypes.includes('guest');
    }
  }

  saveLoggedInUserToSession(user: User) {
    let currentuser = new ShortUser(user.username, user.country, user.type);
    localStorage.setItem('currentuser', JSON.stringify(currentuser));
  }

  logout() {
    localStorage.removeItem('currentuser');
    console.log('user logged out');
    this.router.navigate(['/']);
  }

  changePassword(password: string) {
    let currentuserStr = localStorage.getItem('currentuser');
    if (currentuserStr != null) {
      let currentuser = JSON.parse(currentuserStr);
      const data = {
        username: currentuser.username,
        password: password
      }
      return this.http.post(`${this.uri}/passwordchange`, data);
    }
    return null;
  }

  verifyPassword(password: string) {
    return true;
  }

  register(
    username: string,
    password: string,
    first_name: string,
    last_name: string,
    country: string,
    type: string) {
      const data = {
        username: username,
        password: password,
        first_name: first_name,
        last_name: last_name,
        country: country,
        type: type
      }
      return this.http.post(`${this.uri}/register`, data);
  }

  getAllUsers() {
    return this.http.post(`${this.uri}/getallusers`, null);
  }
}
