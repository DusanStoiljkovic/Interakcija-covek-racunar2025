import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule, Validators, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  protected form: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if(!this.form.valid) {
      Swal.fire('Invalid form data!')
      return
    }

    if(!UserService.login(this.form.value.email, this.form.value.password)) {
      Swal.fire('Invalid credentials!')
      return
    }

    this.router.navigateByUrl('/dashboard')
  }

  
}
