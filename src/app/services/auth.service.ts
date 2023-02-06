import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { login, logout } from '../store/actions/auth.actions';
import { selectLoginErrorMessage } from '../store/selectors/auth.selectors';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private store: Store) {}

  login(username: string, password: string): void {
    this.store.dispatch(login({ username, password }));
  }

  getLoginError(): Observable<string | null> {
    return this.store.pipe(select(selectLoginErrorMessage))
  }

  logout(): void {
    this.store.dispatch(logout());
  }
}
