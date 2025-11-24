import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet, Router } from '@angular/router';
import { UserService } from './services/user.service';
import Swal from 'sweetalert2';
import { Utils } from './utils';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected year = new Date().getFullYear();

  constructor(private router: Router, private utils: Utils) {

  }

  hasAuth() {
    return UserService.hasAuth()
  }

  doLogout() {
    this.utils.showDialog("Are you sure you want to logout?", () => {
      UserService.logout()
      this.router.navigateByUrl('/login')
    }, "Confirm", "Cancel")
  }

  getUserName() {
    const user = UserService.getActiveUser();
    return `Welcome, ${user.firstName} ${user.lastName}`;
  }
}
