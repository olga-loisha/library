import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  loginForm: FormGroup<{ username: FormControl<string | null>; password: FormControl<string | null>; }> | undefined;

  constructor(private fb: FormBuilder) {}

  //TODO: server-side error handling

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
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
      console.log(this.loginForm.value);
    }
  }
}
