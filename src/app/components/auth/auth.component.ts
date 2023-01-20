import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  loginForm: FormGroup<{ username: FormControl<string | null>; password: FormControl<string | null>; }> | undefined;
  loginError$: Observable<string | null> | undefined;

  constructor(private fb: FormBuilder, private authService: AuthService) {}

  //TODO: server-side error handling

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.loginError$ = this.authService.getLoginError();
  }

  get username(): any {
    if (this.loginForm) {
      return this.loginForm.get('username');
    }
  }

  get password(): any {
    if (this.loginForm) {
      return this.loginForm.get('password');
    }
  }

  onSubmit(): void {
    if (this.loginForm && this.loginForm.valid) {
      // @ts-ignore
      this.authService.login(this.loginForm.value.username, this.loginForm.value.password)
    }
  }
}
