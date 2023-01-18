import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { login, logout } from '../store/actions/auth.actions';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private store: Store) {}

  login(username: string, password: string): void {
    this.store.dispatch(login({ username: username, password: password }));
  }

  logout(): void {
    this.store.dispatch(logout());
  }
}
