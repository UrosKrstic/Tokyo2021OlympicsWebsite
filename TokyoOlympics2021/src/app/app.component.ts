import { Component } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TokyoOlympics2021';
  hide = true;

  constructor(private userService: UsersService) {
    // empty
  }

  logout() {
    this.userService.logout();
  }
}
