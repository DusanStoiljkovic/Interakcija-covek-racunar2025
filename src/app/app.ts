import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet, Router } from '@angular/router';
import { UserService } from './services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected year = new Date().getFullYear();

  constructor(private router: Router) {

  }

  hasAuth() {
    return UserService.hasAuth()
  }

  doLogout() {
    Swal.fire({
      title: 'Are you sure you want to logout?',
      showCancelButton: true,
      confirmButtonText: 'Logout',
      icon: 'warning'
    }).then((result) => {
      if (result.isConfirmed) {
        UserService.logout();
        this.router.navigateByUrl('/login');
      }
    })
  }

  getUserName() {
    const user = UserService.getActiveUser();
    return `Welcome, ${user.firstName} ${user.lastName}`;
  }
}
